import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductsSection />
      <Footer />
    </div>
  )
}

export default App
