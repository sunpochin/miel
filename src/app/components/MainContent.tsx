import Link from 'next/link'

export default function MainContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* 標語 */}
      <h1 className="text-4xl font-light tracking-wider mb-16">
        MOVE with elegance
      </h1>

      {/* 三個正方形區塊 */}
      <div className="grid grid-cols-3 gap-8">
        <Link
          href="/services"
          className="w-64 h-64 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
        >
          <span className="text-lg font-medium">OUT SERVICES</span>
        </Link>
        <Link
          href="/testimonials"
          className="w-64 h-64 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
        >
          <span className="text-lg font-medium">CLIENT TESTIMONIALS</span>
        </Link>
        <Link
          href="/shop"
          className="w-64 h-64 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
        >
          <span className="text-lg font-medium">SHOP MIEL BAG</span>
        </Link>
      </div>
    </div>
  )
}
