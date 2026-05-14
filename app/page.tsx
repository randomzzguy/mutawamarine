import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Fleet } from "@/components/fleet"
import { Clients } from "@/components/clients"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Clients />
      <Services />
      <Fleet />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
