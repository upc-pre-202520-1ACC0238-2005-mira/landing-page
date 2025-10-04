import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PricingSection from './components/PricingSection'
import StoriesSection from './components/StoriesSection'
import ProductsSection from './components/ProductsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PricingSection />
      <StoriesSection />
      <ProductsSection />
      <Footer />
    </div>
  )
}

export default App
