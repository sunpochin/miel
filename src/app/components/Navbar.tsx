import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="absolute top-0 right-0 p-4">
      <div className="flex space-x-12">
        <Link
          href="/"
          className="text-gray-500 hover:text-gray-900 text-sm font-medium"
        >
          HOME
        </Link>
        <Link
          href="/about"
          className="text-gray-500 hover:text-gray-900 text-sm font-medium"
        >
          ABOUT
        </Link>
        <Link
          href="/contact"
          className="text-gray-500 hover:text-gray-900 text-sm font-medium"
        >
          SERVICE
        </Link>
        <button className="text-gray-500 hover:text-gray-900 text-sm font-medium">
          CONTACT
        </button>
      </div>
    </nav>
  )
}
