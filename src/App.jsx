import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Tiers from './components/Tiers.jsx'
import Clauses from './components/Clauses.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <div className="bg-field" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Tiers />
        <Clauses />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
