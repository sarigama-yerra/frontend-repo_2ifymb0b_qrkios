import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">
        <div className="backdrop-blur-sm bg-white/40 rounded-xl p-6 sm:p-10 shadow-lg">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">Shop the Modern Minimalist Store</h1>
          <p className="mt-3 sm:mt-4 text-gray-700 max-w-xl">Browse curated products with a clean, calming vibe. Seamless checkout. Secure payments. Built for speed.</p>
          <div className="mt-6 flex gap-3">
            <a href="#catalog" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors">Explore Products</a>
            <a href="/test" className="bg-white/80 hover:bg-white text-gray-800 px-5 py-2.5 rounded-lg transition-colors">Check Backend</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
    </section>
  )
}
