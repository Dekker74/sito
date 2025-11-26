import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "30Tre3ntini - Robotics and AI Innovation",
  description:
    "Leading the revolution in robotics and artificial intelligence with cutting-edge technology",
  generator: "v0.app",
  icons: {
    icon: "/LOGO.png",
    apple: "/LOGO.png",
  },
  openGraph: {
    title: "30Tre3ntini - Robotics and AI Innovation",
    description:
      "Leading the revolution in robotics and artificial intelligence with cutting-edge technology",
    type: "website",
    url: "https://tuodominio.com",
    images: [
      {
        url: "https://30Tre3ntini.com/LOGO.png",
        width: 1200,
        height: 1200,
        alt: "30Tre3ntini Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "30Tre3ntini - Robotics and AI Innovation",
    description:
      "Leading the revolution in robotics and artificial intelligence with cutting-edge technology",
    images: ["https://30Tre3ntini.com/LOGO.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
