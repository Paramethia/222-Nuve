import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Music, Mic, Headphones, PenTool, Users, ImageIcon, Zap, Briefcase } from "lucide-react"

const services = [
  {
    icon: Music,
    title: "Music Discovery Sessions",
    description: "For new and emerging artists looking to find their sound",
  },
  {
    icon: Headphones,
    title: "Scheduled Mixing Services",
    description: "Professional mixing to bring your tracks to life",
  },
  {
    icon: Zap,
    title: "On-demand Mastering",
    description: "Final polish to make your music radio-ready",
  },
  {
    icon: Users,
    title: "Artistic Direction",
    description: "Career guidance and creative direction for your musical journey",
  },
  {
    icon: PenTool,
    title: "Ghostwriting & Toplining",
    description: "Professional songwriting and melody creation services",
  },
  {
    icon: Mic,
    title: "Vocal Coaching",
    description: "For all voices - male, female, and even opera vocalists",
  },
  {
    icon: ImageIcon,
    title: "Custom Cover Art",
    description: "Professional graphic design for singles and albums",
  },
  {
    icon: Music,
    title: "Beat Production",
    description: "On-demand beats from our dedicated beatmakers",
  },
  {
    icon: Briefcase,
    title: "Production Deals",
    description: "For both amateur and professional artists",
  },
]

export function Services() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">What we offer</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            We provide a full range of professional services designed to help you grow and succeed in the music industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg shadow-gray-300 transition-shadow border-l-4 border-accent-aqua">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <service.icon className="h-8 w-8 text-accent-aqua" />
                  <CardTitle className="text-accent-aqua">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-100 max-w-4xl mx-auto">
            Our goal is to help you reach your full potential and turn your passion into a sustainable, successful
            career. At <strong>222 Nuve™</strong>, professionalism and passion go hand in hand. We&apos;re here to open
            doors, create real opportunities, and connect you with a network of experts and creatives from across the
            musical spectrum.
          </p>
          <p className="text-lg text-gray-100 mt-4">
            Whether you&apos;re a singer, rapper, or even an opera vocalist &ndash; yes, seriously &ndash; there&apos;s a place for you at <strong>222 Nuve&trade;</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
