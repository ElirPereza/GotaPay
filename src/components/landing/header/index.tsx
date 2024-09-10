import { DollarSign } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
  
      <header className="px-4 lg:px-6 h-16 flex items-center bg-[#1c2233] text-white">
        <Link className="flex items-center justify-center" href="#">
          <Image alt='logo' src="/logo.svg" width={80} height={80}   /> 
          <span className="ml-2 text-2xl font-bold">GotaPay</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-[#10b981] transition-colors" href="#features">
            Características
          </Link>
          <Link className="text-sm font-medium hover:text-[#10b981] transition-colors" href="#how-it-works">
            Cómo funciona
          </Link>
          <Link className="text-sm font-medium hover:text-[#10b981] transition-colors" href="#testimonials">
            Testimonios
          </Link>
        </nav>
      </header>

  )
}

export default Header