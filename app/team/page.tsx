
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const teamMembers = [
  {
    name: "Nicolo Varani",
    role: "Team Captain & Mission Strategist",
    image: "/NICOLO.JPG",
  },
  {
    name: "Lorenzo Orta",
    role: "Researcher and Builder & Coder",
    image: "/LORENZO.JPG",
  },
  {
    name: "Gea Horozian Dini",
    role: "Researcher and Builder",
    image: "/GEA.JPG",
  },
  {
    name: "Mattia Gaudenzi",
    role: "Documentator and Communicator & Project Manager",
    image: "/MATTIA.jpg",
  },
  {
    name: "Andrea Greco",
    role: "Coder and Developer",
    image: "/ANDREA.JPG",
  },
  {
    name: "Giacomo Gorzanelli",
    role: "Documentator",
    image: "/GIACOMO.JPG",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Titolo */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the brilliant minds shaping the future of robotics
            </p>
          </div>

          {/* Griglia membri */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 relative h-[380px]"
              >
                {/* Immagine che riempie tutto il rettangolo */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                />

                {/* Overlay con testo sopra immagine */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-blue-300 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
