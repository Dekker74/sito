"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface RobotPart {
  id: string
  label: string
  icon: string
  content: {
    title: string
    description: string
    image: string
    detailedText: string
  }
}

const robotParts: RobotPart[] = [
  {
    id: "sensors",
    label: "Sensors",
    icon: "📡",
    content: {
      title: "Advanced Sensor Array",
      description:
        "The system integrates professional, certified gas detection and environmental sensing. Unlike hobby MQ sensors, it uses industrial-grade NDIR and electrochemical sensors: Senseair S8 / Sunrise for CO₂, Alphasense A-Series for CO/NO₂/O₂, and Figaro TGS 2611 (or similar) for methane (CH₄). These components are robust, precise, and designed for industrial environments.For navigation and environment perception, the system employs a cost-effective professional 2D LiDAR (E.g., RPLIDAR A1/A2), a low-cost industrial-grade IMU (MPU-9250 / ICM-20948), short-range industrial ultrasonic sensors in metal housings, and an onboard CSI camera for Raspberry Pi with IR LED illumination, ensuring reliable mapping, obstacle detection, and visual feedback in diverse conditions.",
      image: "/SENSORE.jpg",
      detailedText: "Advanced sensor array for precise environmental monitoring and navigation."
    },
  },
  {
    id: "the core",
    label: "AI Core",
    icon: "⚙️",
    content: {
      title: "Neural Processing Unit",
      description:
        "The system uses a Raspberry Pi 5 for high-level tasks such as vision, mapping, and advanced communications, combined with a dedicated microcontroller (ESP32 or STM32) for motor control, sensor acquisition, and real-time operations. Motor drive is handled through an industrial H-bridge driver like the Cytron MD30C (30 A, widely used in UGVs), or through cost-effective FOC drivers when using BLDC motors. This mixed architecture is common in affordable professional robotics.",
      image: "/CPU.jpg",
      detailedText: "High-performance neural processing for advanced AI capabilities."
    },
  },
  {
    id: "motors",
    label: "Motors",
    icon: "⚡",
    content: {
      title: "Precision Motor System",
      description:
        "Industrial-Light BLDC motors provide higher efficiency, reduced maintenance, and reliable performance, making them ideal for long runtime applications. The robust design and smooth electronic speed control ensure consistent operation in demanding environments.",
      image: "/MOTORE.jpg",
      detailedText: "High-precision motors ensure smooth, controlled movements in every situation.",
    },
  },
  {
    id: "power",
    label: "Power Core",
    icon: "🔋",
    content: {
      title: "Power Cell",
      description:
        "The system uses LiFePO₄ battery packs (12 V or 24 V), offering much higher safety and longevity compared to LiPo batteries. Battery management is handled via a BMS with full protection. Power conversion relies on industrial DC-DC converters (TracoPower, MeanWell), while IP67-rated connectors such as GX12/GX16 or industrial Amphenol ensure reliable, rugged connections.",
      image: "/BATTERIA.jpg",
      detailedText: "Advanced power management for extended operation time."
    },
  },
  {
    id: "chassis",
    label: "Chassis",
    icon: "🛡️",
    content: {
      title: "Alluminum Chassis",
      description:
        "Durable CNC anodized 6061 aluminum frame, lightweight, anti-corrosion, easy to work and repair. Reinforced rubber tracks with kevlar core",
      image: "/ROBOT2.png",
      detailedText: "Robust aluminum chassis designed for durability and performance."
    },
  },
]

export function RobotHero() {
  const [selectedPart, setSelectedPart] = useState<RobotPart | null>(null)
  const [buttonRect, setButtonRect] = useState<{ x: number; y: number } | null>(null)
  const [exitAnim, setExitAnim] = useState<{ part: RobotPart; rect: { x: number; y: number } } | null>(null)
  const [isClosing, setIsClosing] = useState(false)

  const handlePartClick = (part: RobotPart, event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    setButtonRect({
      x: Math.round(rect.left + rect.width / 2),
      y: Math.round(rect.top + rect.height / 2),
    })
    setIsClosing(false)
    setSelectedPart(part)
  }

  const handleClose = () => {
    if (!buttonRect || !selectedPart) return

    setExitAnim({ part: selectedPart, rect: buttonRect })
    setSelectedPart(null)
    setButtonRect(null)
    setIsClosing(true)

    const duration = 600
    setTimeout(() => {
      setExitAnim(null)
      setIsClosing(false)
    }, duration)
  }

  const computePosition = (index: number, total: number, radiusPercent = 44) => {
    const start = -Math.PI / 2
    const angle = start + (index * 2 * Math.PI) / total
    const x = 50 + Math.cos(angle) * radiusPercent
    const y = 50 + Math.sin(angle) * radiusPercent
    return { left: `${x}%`, top: `${y}%` }
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      {/* OPEN modal */}
      {selectedPart && buttonRect && (
        <>
          <style>{`
            @keyframes moveAndZoomFromButton {
              0% {
                left: ${buttonRect.x}px;
                top: ${buttonRect.y}px;
                transform: translate(-50%, -50%) scale(0.06);
                opacity: 0;
              }
              60% { opacity: 1; }
              100% {
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
              }
            }
          `}</style>

          <div className="fixed inset-0 z-50" onClick={handleClose}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-6">
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors z-60"
                aria-label="Close"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div
                className="fixed z-50"
                style={{
                  left: `${buttonRect.x}px`,
                  top: `${buttonRect.y}px`,
                  transform: "translate(-50%, -50%) scale(0.06)",
                  animation: "moveAndZoomFromButton 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                  width: "min(90vw, 900px)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-full bg-card rounded-2xl overflow-hidden shadow-2xl border border-primary/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
                    <div className="flex items-center justify-center">
                      <img
                        src={selectedPart.content.image}
                        alt={selectedPart.content.title}
                        className="w-full h-auto object-cover max-h-96 rounded-md"
                      />
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{robotParts.find(p => p.id === selectedPart.id)?.icon}</span>
                        <h3 className="text-3xl font-bold text-foreground">{selectedPart.content.title}</h3>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">{selectedPart.content.detailedText}</p>
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground leading-relaxed">{selectedPart.content.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* EXIT animation - non-interactive, overlay fades out gradually */}
      {exitAnim && isClosing && (
        <>
          <style>{`
            @keyframes moveAndZoomToButton {
              0% {
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
              }
              100% {
                left: ${exitAnim.rect.x}px;
                top: ${exitAnim.rect.y}px;
                transform: translate(-50%, -50%) scale(0.06);
                opacity: 0;
              }
            }
            @keyframes fadeOutOverlay {
              0% { opacity: 0.7; }
              100% { opacity: 0; }
            }
          `}</style>

          <div className="fixed inset-0 z-40 pointer-events-none">
            <div 
              className="absolute inset-0 bg-black backdrop-blur-sm pointer-events-none"
              style={{
                animation: "fadeOutOverlay 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
              }}
            />
            <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-6">
              <div
                className="fixed z-40 pointer-events-none"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%) scale(1)",
                  animation: "moveAndZoomToButton 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                  width: "min(90vw, 900px)",
                }}
              >
                <div className="w-full bg-card rounded-2xl overflow-hidden shadow-2xl border border-primary/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
                    <div className="flex items-center justify-center">
                      <img
                        src={exitAnim.part.content.image}
                        alt={exitAnim.part.content.title}
                        className="w-full h-auto object-cover max-h-96 rounded-md"
                      />
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{exitAnim.part.icon}</span>
                        <h3 className="text-3xl font-bold text-foreground">{exitAnim.part.content.title}</h3>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">{exitAnim.part.content.detailedText}</p>
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground leading-relaxed">{exitAnim.part.content.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom duration-700">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">Advanced Robotic System</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Discover the cutting-edge technology powering next-generation robotics</p>
        </div>

        <div className="relative w-full aspect-[4/3] flex items-center justify-center mb-16">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-3/4 h-3/4 flex items-center justify-center z-10">
              <img src="/ROBOT2.png" alt="Advanced Robot" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>

            <div className="absolute inset-0">
              {robotParts.map((part, i) => {
                const pos = computePosition(i, robotParts.length, 44)
                return (
                  <button
                    key={part.id}
                    onClick={(e) => { e.stopPropagation(); handlePartClick(part, e) }}
                    aria-label={part.label}
                    className="absolute z-40 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{
                      left: pos.left,
                      top: pos.top,
                    }}
                  >
                    <div
                      className={cn(
                        "px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 whitespace-nowrap flex items-center gap-2 bg-card text-card-foreground border-2 border-primary/40",
                        "hover:border-primary hover:shadow-lg hover:scale-105"
                      )}
                    >
                      <span className="text-lg">{part.icon}</span>
                      {part.label}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile list */}
        <div className="sm:hidden grid grid-cols-2 gap-3 mb-12">
          {robotParts.map((part) => (
            <button
              key={part.id}
              onClick={(e) => handlePartClick(part, e)}
              className={cn(
                "p-4 rounded-lg border-2 transition-all duration-200 text-center cursor-pointer",
                "bg-card text-card-foreground border-primary/30",
                "active:border-primary active:bg-primary active:text-primary-foreground",
              )}
            >
              <span className="text-2xl block mb-1">{part.icon}</span>
              <span className="font-semibold text-sm">{part.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}