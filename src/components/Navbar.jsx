import { useEffect, useState } from 'react'
import { ShoppingCart, User } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Navbar() {
  const [user, setUser] = useState(null)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return
    fetch(`${API}/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.ok ? res.json() : null)
      .then((u) => setUser(u))
      .catch(() => {})
    // naive cart count fetch
    fetch(`${API}/cart`, { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.ok ? r.json() : { items: [] })
      .then((c) => setCartCount(c.items?.reduce((s, it) => s + it.quantity, 0) || 0))
      .catch(() => {})
  }, [])

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold text-gray-800">BlueShop</a>
        <nav className="flex items-center gap-4">
          <a href="#catalog" className="text-gray-700 hover:text-gray-900">Catalog</a>
          <a href="/test" className="text-gray-700 hover:text-gray-900">Status</a>
          <a href="#" className="relative text-gray-700 hover:text-gray-900 flex items-center">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="ml-1 text-sm">{cartCount}</span>
            )}
          </a>
          <a href="#" className="ml-2 inline-flex items-center gap-2 bg-gray-900 text-white px-3 py-1.5 rounded-lg">
            <User className="w-4 h-4" />
            <span className="text-sm">{user ? user.name : 'Sign in'}</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
