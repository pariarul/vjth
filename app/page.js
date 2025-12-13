import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/services"
import Team from "@/components/team"


const page = () => {
  return (
    <>
    <Header />
    <Hero />
    <About />
     <Team />
    <Services />
    <Contact />
    <Footer />
    </>
  )
}

export default page