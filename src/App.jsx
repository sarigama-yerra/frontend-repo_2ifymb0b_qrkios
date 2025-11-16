import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      <Hero />
      <ProductGrid />
      <footer className="border-t mt-12 py-10 text-center text-sm text-gray-500">© 2025 BlueShop — A modern, minimalist e‑commerce demo.</footer>
    </div>
  )
}

export default App
