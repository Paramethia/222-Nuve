import { Card, CardContent } from "../../components/ui/card"
import { Music, Target, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-deep-slate via-steel-blue to-textured-navy py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-300 mb-4">About 222 Nuve™</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            We are a collective of passionate music professionals dedicated to helping artists reach their full
            potential and turn their passion into a sustainable, successful career.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-300 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-200">
              <p>
                At <strong>222 Nuve™</strong>, professionalism and passion go hand in hand. We started with a simple
                mission: to create real opportunities and connect artists with a network of experts and creatives from
                across the musical spectrum.
              </p>
              <p>
                Whether you're a singer, rapper, or even an opera vocalist — yes, seriously — there's a place for you at{" "}
                <strong>222 Nuve™</strong>. We believe that every voice deserves to be heard and every artist deserves
                professional support.
              </p>
              <p>
                If you're ready to commit to your art, we're ready to help you shape your future in music. Our team
                combines years of industry experience with cutting-edge technology to deliver results that exceed
                expectations.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-gray-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="h-6 w-6 text-gray-300" />
                  <h3 className="text-xl font-semibold text-gray-300">Our Mission</h3>
                </div>
                <p className="text-gray-300">
                  To provide quality sound engineering and networking at competitive rates, helping artists grow and
                  succeed in the music industry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-gray-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="h-6 w-6 text-gray-300" />
                  <h3 className="text-xl font-semibold text-gray-300">Our Values</h3>
                </div>
                <p className="text-gray-300">
                  Professionalism, creativity, and dedication to excellence in every project. We believe in building
                  lasting relationships with our artists.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-text-gray-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="h-6 w-6 text-gray-300" />
                  <h3 className="text-xl font-semibold text-gray-300">Our Promise</h3>
                </div>
                <p className="text-gray-300">
                  To deliver professional results that help turn your musical passion into a sustainable and successful
                  career.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-deep-slate to-steel-blue rounded-lg p-8 text-white text-center">
          <Music className="h-12 w-12 text-accent-aqua mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-200 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-200 mb-6">
            Join the growing community of artists who have chosen 222 Nuve™ to elevate their music.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking" className="bg-accent-aqua text-textured-navy px-6 py-3 rounded-lg font-semibold hover:bg-accent-aqua/90 transition-colors">
              Book Your First Session
            </a>
            <a href="/contact" className="border border-accent-aqua text-accent-aqua px-6 py-3 rounded-lg font-semibold hover:bg-accent-aqua hover:text-textured-navy transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
