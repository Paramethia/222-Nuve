import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Music, Mic, Headphones, PenTool, Users, ImageIcon, Zap, Briefcase, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Music,
    title: "Music Discovery Sessions",
    description: "For new and emerging artists looking to find their sound and develop their unique style.",
    duration: "2-3 hours",
    price: "From $200",
    features: ["Genre exploration", "Style development", "Creative direction", "Industry insights"],
  },
  {
    icon: Headphones,
    title: "Professional Mixing",
    description: "Transform your raw recordings into polished, radio-ready tracks with our expert mixing services.",
    duration: "2-4 hours",
    price: "From $120/hour",
    features: ["Multi-track mixing", "EQ and compression", "Effects processing", "Stereo imaging"],
  },
  {
    icon: Zap,
    title: "On-demand Mastering",
    description: "The final touch that makes your music competitive and ready for all streaming platforms. We'll help master whatever you require.",
    duration: "1-2 hours",
    price: "From $150/hour",
    features: ["Loudness optimization", "EQ balancing", "Stereo enhancement", "Format delivery"],
  },
  {
    icon: Mic,
    title: "Vocal Coaching",
    description: "Professional vocal training for all voice types - from pop to opera, we've got you covered.",
    duration: "1 hour",
    price: "From $100/hour",
    features: ["Technique improvement", "Range expansion", "Performance coaching", "Recording preparation"],
  },
  {
    icon: PenTool,
    title: "Toplining & Songwriting",
    description: "Professional songwriting and melody creation to bring your musical ideas to life.",
    duration: "2-3 hours",
    price: "From $200/session",
    features: ["Melody creation", "Lyric writing", "Hook development", "Song structure"],
  },
  {
    icon: Users,
    title: "Artistic Direction",
    description: "Career guidance and creative direction to help shape your artistic identity and career path.",
    duration: "1-2 hours",
    price: "From $90/hour",
    features: ["Brand development", "Career planning", "Creative guidance", "Industry networking"],
  },
  {
    icon: ImageIcon,
    title: "Custom Cover Art",
    description: "Professional graphic design for singles, albums, and promotional materials.",
    duration: "3-5 days",
    price: "From $300",
    features: ["Original artwork", "Multiple concepts", "High-res files", "Social media formats"],
  },
  {
    icon: Music,
    title: "Beat Production",
    description: "Custom beats and instrumentals created by our dedicated team of producers.",
    duration: "1-2 days",
    price: "From $250",
    features: ["Custom production", "Multiple genres", "Stems included", "Commercial rights"],
  },
  {
    icon: Briefcase,
    title: "Production Deals",
    description: "Comprehensive production packages for both amateur and professional artists.",
    duration: "Project-based",
    price: "Custom pricing",
    features: ["Full production", "Multiple revisions", "Industry connections", "Marketing support"],
  },
]

export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-gradient-to-r from-deep-slate via-steel-blue to-textured-navy py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-200 mb-4">Our Services</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            We provide a full range of professional services designed to help you grow and succeed in the music
            industry. From initial concept to final release, we're with you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl shadow-gray-400 transition-shadow border-l-4 border-aqua-dark">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <service.icon className="h-8 w-8 text-aqua-dark" />
                  <CardTitle className="text-aqua-dark">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-200">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-300" />
                    <span className="text-sm text-gray-300">{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-semibold text-gray-400">{service.price}</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-aqua-dark mb-2">What's included:</p>
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="border-gray-400 text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full bg-aqua-dark text-textured-navy hover:bg-aqua-darker">
                  <Link href="/booking">Book this service</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-deep-slate to-steel-blue rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Package?</h2>
          <p className="text-lg text-gray-200 mb-6">
            Every artist is unique, and so are their needs. Contact us to discuss a custom package that perfectly fits
            your project and budget.
          </p>
          <Button asChild size="lg" className="bg-accent-aqua text-textured-navy hover:bg-aqua-dark">
            <Link href="/contact">Get Custom Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
