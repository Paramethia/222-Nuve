import { Button } from "../components/ui/button"
import Link from "next/link"
import { Calendar, MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-deep-slate to-steel-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">Ready to Transform Your Music?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
          If you&apos;re ready to commit to your art, we&apos;re ready to help you shape your future in music. Let&apos;s create something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent-aqua text-textured-navy hover:bg-aqua-dark">
            <Link href="/booking">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Session
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-accent-aqua text-aqua-darker bg-gray-100 hover:bg-accent-aqua hover:text-textured-navy">
            <Link href="/contact">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
