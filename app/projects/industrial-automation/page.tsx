"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ProjectDetailPage() {
	return (
		<div className="min-h-screen">
			<Navigation />
			<main className="pt-32 pb-20 px-4">
				<div className="container mx-auto max-w-4xl">
					<Link
						href="/projects"
						className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 mb-8"
					>
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
						Back to Projects
					</Link>

					<div className="space-y-8">
						<div className="space-y-4">
							<span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
								Manufacturing
							</span>
							<h1 className="text-5xl font-bold">Industrial Automation Suite</h1>
							<p className="text-xl text-muted-foreground">
								Advanced robotic systems for high-precision manufacturing and assembly lines
							</p>
						</div>

						<img
							src="/LEGO.jpg"
							alt="Industrial Automation Suite"
							className="w-full h-96 object-cover rounded-2xl"
						/>

						<div className="space-y-6">
							<div>
								<h2 className="text-2xl font-bold mb-3">Overview</h2>
								<p className="text-muted-foreground leading-relaxed">
									Our Industrial Automation Suite represents the cutting edge of robotic manufacturing technology. 
									Designed specifically for high-precision manufacturing and assembly lines, this system increases 
									productivity by 300% while maintaining zero-defect quality standards.
								</p>
							</div>

							<div>
								<h2 className="text-2xl font-bold mb-3">Key Features</h2>
								<ul className="space-y-3 text-muted-foreground">
									<li className="flex items-start gap-3">
										<span className="text-primary font-bold">•</span>
										<span>High-precision robotic arms with sub-millimeter accuracy</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-primary font-bold">•</span>
										<span>AI-powered quality control and defect detection</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-primary font-bold">•</span>
										<span>Real-time production monitoring and analytics</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-primary font-bold">•</span>
										<span>Modular design for easy integration into existing systems</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-primary font-bold">•</span>
										<span>24/7 automated operation with minimal human intervention</span>
									</li>
								</ul>
							</div>

							<div>
								<h2 className="text-2xl font-bold mb-3">Results</h2>
								<div className="grid grid-cols-2 gap-4">
									<div className="bg-card p-4 rounded-lg border">
										<p className="text-3xl font-bold text-primary">300%</p>
										<p className="text-sm text-muted-foreground">Productivity Increase</p>
									</div>
									<div className="bg-card p-4 rounded-lg border">
										<p className="text-3xl font-bold text-primary">0%</p>
										<p className="text-sm text-muted-foreground">Defect Rate</p>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-card p-8 rounded-xl border">
							<h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
							<p className="text-muted-foreground mb-6">
								Interested in learning more about our Industrial Automation Suite? Contact us to schedule a demo.
							</p>
							<Link
								href="/contact"
								className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
							>
								Contact Us
							</Link>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}
