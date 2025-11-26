"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
	{
		title: "LEGO MINDSTORM FLL",
		category: "ROBOTICS",
		description: "Un robot compatto realizzato con LEGO Mindstorms EV3, dotato di una base robusta e simmetrica costruita attorno al mattoncino intelligente. La trazione è affidata a due motori grandi montati ai lati, che permettono movimenti precisi e curve controllate, mentre una rotella folle posteriore assicura stabilità. Nella parte frontale è installato un sensore di colore per seguire linee e riconoscere i contrasti del tappeto FLL. Un motore medio controlla un braccio o attacco modulare, progettato per agganciare, spingere o sollevare gli oggetti delle missioni. Il design è compatto, ordinato nei cavi e ottimizzato per facilità di manutenzione e rapidità di cambio degli attrezzi.",
		image: "/LEGO.jpg",
	},
	{
		title: "INNOVATIVE PROJECT",
		category: "ROBOTICS",
		description: "Il Cave Explorer Bot è un robot autonomo progettato per esplorare caverne e grotte in totale sicurezza. È dotato di un telaio resistente, ruote o cingoli adatti a terreni irregolari e un sistema di illuminazione potente per muoversi in ambienti bui. Utilizza sensori LiDAR e telecamere 3D per creare mappe dettagliate dell'ambiente, individuare ostacoli e scansionare le pareti della caverna. Il robot integra anche sensori chimici che rilevano la presenza di gas pericolosi come metano, monossido di carbonio o idrogeno solforato. In caso di valori fuori norma, invia un allarme istantaneo all'operatore. Grazie a un software di navigazione intelligente, può muoversi in autonomia, aggiornare la mappa in tempo reale e tornare automaticamente alla base quando la batteria è bassa o la missione è completata.",
		image: "/ROBOT2.png",
	},
]

export default function ProjectsPage() {
	return (
		<div className="min-h-screen">
			<Navigation />
			<main className="pt-32 pb-20 px-4">
				<div className="container mx-auto max-w-6xl space-y-12">
					<div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
						<h1 className="text-4xl md:text-6xl font-bold text-balance">
							Our Projects
						</h1>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
							Transforming industries with cutting-edge robotic solutions
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{projects.map((project) => (
							<Card
								key={project.title}
								className="group hover:shadow-xl hover:border-primary/50 transition-all duration-300 overflow-hidden rounded-2xl p-0 flex flex-col"
							>
								{/* image container: image fills entire rounded rectangle with no gaps */}
								<div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
									<img
										src={project.image || "/placeholder.svg"}
										alt={project.title}
										className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 block"
									/>
									<div className="absolute top-4 left-4 z-10">
										<span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
											{project.category}
										</span>
									</div>
								</div>

								<CardHeader className="pb-0">
									<CardTitle className="group-hover:text-primary transition-colors text-primary">
										{project.title}
									</CardTitle>
									<CardDescription className="leading-relaxed">
										{project.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Link href="https://firstlegoleague.it/resources/Challenge" target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all hover:underline">
										Learn More
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
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</Link>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}
