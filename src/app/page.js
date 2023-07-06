'use client'
import Distribution from "./components/Distribution"
import Contact from "./components/Contact"
import Service from "./components/Service"
import Careers from "./components/Careers"
import Technologies from "./components/Technologies"
import Companies from "./components/Companies"
import Reviews from "./components/Reviews"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Service />
      <Technologies />
      <Distribution />
      <Companies />
      <Reviews />
      <Careers />
      <Contact />
      <Footer />
    </div>
  )
}
