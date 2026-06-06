import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Tiers from './components/Tiers.jsx'
import Clauses from './components/Clauses.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ContactForm from './components/ContactForm.jsx'

function Home() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  )
}
