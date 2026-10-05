import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CategoryGrid from './components/CategoryGrid.jsx'
import Catalog from './components/Catalog.jsx'
import Offers from './components/Offers.jsx'
import About from './components/About.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { WhatsAppFloat } from './components/SocialLinks.jsx'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all')

  const goToCatalog = (categoryId) => {
    setActiveCategory(categoryId)
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoryGrid onSelect={goToCatalog} />
        <Catalog active={activeCategory} onChange={setActiveCategory} />
        <Offers />
        <About />
        <SocialLinks />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
