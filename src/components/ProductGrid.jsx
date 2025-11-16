import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ProductGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/products?page=1&page_size=8&sort=newest`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="py-12 text-center text-gray-500">Loading products...</div>
  if (error) return <div className="py-12 text-center text-red-600">{error}</div>

  return (
    <section id="catalog" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">New Arrivals</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((p) => (
          <a key={p.id} href={`#/product/${p.slug}`} className="group bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
            <div className="aspect-square bg-gray-100 overflow-hidden">
              {p.images?.[0] ? (
                <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{p.title}</h3>
              <div className="mt-2 text-blue-600 font-bold">${'{'}p.price.toFixed(2){'}'}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
