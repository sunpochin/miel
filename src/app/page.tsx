import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 導航欄 - 移到右上角 */}
      <nav className="absolute top-0 right-0 p-4">
        <div className="flex space-x-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-900 text-sm font-medium"
          >
            首頁
          </Link>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-900 text-sm font-medium"
          >
            關於
          </Link>
          <Link
            href="/contact"
            className="text-gray-500 hover:text-gray-900 text-sm font-medium"
          >
            聯絡我們
          </Link>
          <button className="text-gray-500 hover:text-gray-900 text-sm font-medium">
            登入
          </button>
        </div>
      </nav>

      {/* 主要內容區域 */}
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
            <span className="text-lg font-medium">Our services</span>
          </Link>
          <Link
            href="/testimonials"
            className="w-64 h-64 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            <span className="text-lg font-medium">Client TESTIMONIALS</span>
          </Link>
          <Link
            href="/shop"
            className="w-64 h-64 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            <span className="text-lg font-medium">SHOP MIEL BAG</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
