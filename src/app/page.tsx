import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Image
        src="/screen_3x.webp"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
        quality={100}
      />
      <Navbar />
      <MainContent />
    </main>
  )
}
