import Link from 'next/link'
import Image from 'next/image'

export default function MainContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* 標語 */}
      <div className="text-4xl font-light tracking-wider mb-16">
        Ｍiel
        <span className="text-2xl font-light tracking-wider mb-16 ml-4">
          MOVE with elegance
        </span>
      </div>

      {/* 三個正方形區塊 */}
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <span className="text-lg font-medium mb-4">OUT SERVICES</span>
          <Link
            href="/services"
            className="w-64 h-64 bg-gray-100 hover:bg-gray-200 transition-colors relative overflow-hidden"
          >
            <Image
              src="/1.webp"
              alt="Services"
              fill
              className="object-cover"
              priority
            />
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-medium mb-4">CLIENT TESTIMONIALS</span>
          <Link
            href="/testimonials"
            className="w-64 h-64 bg-gray-100 hover:bg-gray-200 transition-colors relative overflow-hidden"
          >
            <Image
              src="/2.jpg"
              alt="Testimonials"
              fill
              className="object-cover"
              priority
            />
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-medium mb-4">SHOP MIEL BAG</span>
          <Link
            href="/shop"
            className="w-64 h-64 bg-gray-100 hover:bg-gray-200 transition-colors relative overflow-hidden"
          >
            <Image
              src="/3.webp"
              alt="Shop"
              fill
              className="object-cover"
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
