"use client"

import { Card, CardContent } from "../components/ui/card"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"

// Mock testimonials data
const testimonials = [
  {
    id: 1,
    name: "Jordan Smith",
    role: "Independent Artist",
    content:
      "Working with Alex at 222 Nuve was incredible. The mixing quality exceeded my expectations and the turnaround time was perfect for my album release.",
    rating: 5,
    teamMember: "Alex Rivera",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Maya Patel",
    role: "Singer-Songwriter",
    content:
      "Sarah's vocal coaching transformed my performance. Her technique and guidance helped me find my true voice. Highly recommend!",
    rating: 5,
    teamMember: "Sarah Chen",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Chris Williams",
    role: "Hip-Hop Artist",
    content:
      "Marcus created the perfect beat for my track. His understanding of the genre and attention to detail is unmatched.",
    rating: 5,
    teamMember: "Marcus Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Isabella Rodriguez",
    role: "Pop Artist",
    content:
      "Elena's mastering brought my songs to life. The clarity and depth she achieved was exactly what my music needed.",
    rating: 5,
    teamMember: "Elena Volkov",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "David Kim",
    role: "Producer",
    content:
      "The artistic direction I received helped shape my entire album concept. Professional, creative, and results-driven.",
    rating: 5,
    teamMember: "Sarah Chen",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Aisha Johnson",
    role: "R&B Singer",
    content:
      "From vocal coaching to final mastering, the team at 222 Nuve delivered excellence at every step. My music has never sounded better.",
    rating: 5,
    teamMember: "Alex Rivera",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-aqua-dark max-w-3xl mx-auto">
            Don&apos;t just take our word for it &ndash; hear from the artists we&apos;ve helped succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg shadow-gray-400 border-gray-400 transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-200 mb-4 italic">&quot;{testimonial.content}&quot;</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-accent-aqua">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Worked with</p>
                    <p className="text-sm font-medium text-aqua-dark">{testimonial.teamMember}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
