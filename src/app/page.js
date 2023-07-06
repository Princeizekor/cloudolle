'use client'
import Distribution from "./components/Distribution"
import Contact from "./components/Contact"
import Service from "./components/Service"
import Careers from "./components/Careers"
import Technologies from "./components/Technologies"
import Companies from "./components/Companies"
import Reviews from "./components/Reviews"
import Header from "./components/Header"

export default function Home() {
  return (
    <div>
      <Header />
      <Service />
      <Technologies />
      <Distribution />
      <Companies />
      <Reviews />
      <Careers />
      <Contact />
    </div>
  )
}
