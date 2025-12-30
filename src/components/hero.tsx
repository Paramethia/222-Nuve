import { Button } from "../components/ui/button"
import Link from "next/link"
import { Calendar, Users } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-deep-slate via-steel-blue to-textured-navy text-white h-screen">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="m-translation relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Music Production
            <span className="block text-accent-aqua">& Sound Design</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Quality sound engineering and networking at competitive rates. Turn your passion into a sustainable,
            successful career.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-accent-aqua text-textured-navy hover:bg-[#80D4DC]">
              <Link href="/booking">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Session
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent-aqua text-textured-navy hover:bg-accent-aqua">
              <Link href="/about">
                <Users className="mr-2 h-5 w-5" />
                Meet Our Team
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-aqua mb-2">50+</div>
              <div className="text-gray-300">Artists Worked With</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-aqua mb-2">500+</div>
              <div className="text-gray-300">Sessions Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-aqua mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
