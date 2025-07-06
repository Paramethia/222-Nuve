import Link from "next/link"
import Image from "next/image";
import { Instagram, Twitter, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-textured-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/222 Nuve logo white.png" width="80" height="50" alt="222 Nuve logo" className="h-10 w-15" />
              <span className="text-xl font-bold">222 Nuve™</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional music production and sound design services. Quality sound engineering and networking at
              competitive rates.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-accent-aqua hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-accent-aqua hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-accent-aqua hover:text-white cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-accent-aqua hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services" className="hover:text-accent-aqua transition-colors">
                  Mixing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent-aqua transition-colors">
                  Mastering
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent-aqua transition-colors">
                  Vocal Coaching
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent-aqua transition-colors">
                  Artistic Direction
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent-aqua transition-colors">
                  Toplining
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-accent-aqua transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-accent-aqua transition-colors">
                  Book Session
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-aqua transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-steel-blue mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} 222 Nuve™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
