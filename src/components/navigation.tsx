"use client"

import { usePathname, useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify';
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image";
import { Button } from "../components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const currentPage = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (currentPage === '/admin') {
    toast.error("Nahhhh!", {
      position: "top-left",
      autoClose: 2700,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });
    setTimeout(() => { router.push('/') }, 3000 );
  }
  }, [currentPage])

  return (
    <>
    <ToastContainer className="mt-15"></ToastContainer>
    <nav className="bg-deep-slate border-b border-steel-blue sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/222 Nuve logo white.png" width="80" height="50" alt="222 Nuve logo" className="h-12 w-17" />
              <span className="text-white text-xl font-bold">222 Nuve™</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${currentPage === '/' ? "text-accent-aqua italic" : "text-white"} hover:text-accent-aqua transition-colors`}>
              Home
            </Link>
            <Link href="/about" className={`${currentPage === '/about' ? "text-accent-aqua italic" : "text-white"} hover:text-accent-aqua transition-colors`}>
              About
            </Link>
            <Link href="/services" className={`${currentPage === '/services' ? "text-accent-aqua italic" : "text-white"} hover:text-accent-aqua transition-colors`}>
              Services
            </Link>
            <Link href="/booking" className={`${currentPage === '/booking' ? "text-accent-aqua italic" : "text-white"} hover:text-accent-aqua transition-colors`}>
              Booking
            </Link>
            <Link href="/contact" className={`${currentPage === '/contact' ? "text-accent-aqua italic" : "text-white"} hover:text-accent-aqua transition-colors`}>
              Contact
            </Link>
            <Link href="/admin" className={`${currentPage === '/admin' ? "text-accent-aqua italic" : "text-white"} hover:text-accent-aqua transition-colors`}>
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-white border hover:bg-aqua-dark hover:text-deep-slate">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-textured-navy mb-4 text-center">
              <Link href="/" className={`block rounded-lg px-3 py-2 ${currentPage === '/' ? "bg-gray-400" : "text-gray-300 border-b border-gray-400 hover:bg-gray-400"} transition-colors`}>
                Home
              </Link>
              <Link href="/about" className={`block rounded-lg px-3 py-2 ${currentPage === '/about' ? "bg-gray-400" : "text-gray-300 border-b border-gray-400 hover:bg-gray-400"} transition-colors`}>
                About
              </Link>
              <Link href="/services" className={`block rounded-lg px-3 py-2 ${currentPage === '/services' ? "bg-gray-400" : "text-gray-300 border-b border-gray-400 hover:bg-gray-400"} transition-colors`}>
                Services
              </Link>
              <Link href="/booking" className={`block rounded-lg px-3 py-2 ${currentPage === '/booking' ? "bg-gray-400" : "text-gray-300 border-b border-gray-400 hover:bg-gray-400"} transition-colors`}>
                Book Session
              </Link>
              <Link href="/contact" className={`block rounded-lg px-3 py-2 ${currentPage === '/contact' ? "bg-gray-400" : "text-gray-300 border-b border-gray-400 hover:bg-gray-400"} transition-colors`}>
                Contact
              </Link>
              <Link href="/admin" className={`block rounded-lg px-3 py-2 ${currentPage === '/admin' ? "bg-gray-400" : "text-gray-300 border-b border-gray-400 hover:bg-gray-400"} transition-colors`}>
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  )
}
