"use client"

import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Instagram, Twitter, Youtube, ExternalLink } from "lucide-react"
import Image from "next/image"

// Mock team data - in a real app, this would come from your database
const teamMembers = [
  {
    id: 1,
    name: "Alex Rivera",
    age: 28,
    location: "Los Angeles, CA",
    languages: ["EN", "ES"],
    bio: "Grammy-nominated mixing engineer with 8+ years of experience. Specializes in hip-hop, R&B, and pop production.",
    specialties: ["Mixing", "Mastering", "Beat Production"],
    socials: {
      instagram: "@alexrivera_audio",
      twitter: "@alexaudio",
      youtube: "AlexRiveraStudio",
    },
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Sarah Chen",
    age: 25,
    location: "Nashville, TN",
    languages: ["EN", "ZH"],
    bio: "Vocal coach and topliner with a background in classical and contemporary music. Worked with major label artists.",
    specialties: ["Vocal Coaching", "Toplining", "Artistic Direction"],
    socials: {
      instagram: "@sarahchen_vocals",
      twitter: "@sarahvocals",
      youtube: "SarahChenMusic",
    },
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    age: 32,
    location: "Atlanta, GA",
    languages: ["EN"],
    bio: "Multi-platinum producer and sound designer. Expert in trap, drill, and experimental hip-hop production.",
    specialties: ["Beat Production", "Sound Design", "Mixing"],
    socials: {
      instagram: "@marcusbeats",
      twitter: "@marcusproducer",
      youtube: "MarcusJohnsonBeats",
    },
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Elena Volkov",
    age: 29,
    location: "New York, NY",
    languages: ["EN", "RU", "FR"],
    bio: "Classically trained composer and mastering engineer. Brings orchestral elements to modern productions.",
    specialties: ["Mastering", "Composition", "Artistic Direction"],
    socials: {
      instagram: "@elenavolkov_audio",
      twitter: "@elenamastering",
      youtube: "ElenaVolkovStudio",
    },
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function Team() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our diverse team of professionals brings years of experience and passion to every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="border-gray-400 shadow-gray-400 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square relative">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-200 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-300">
                    {member.age} years old • {member.location}
                  </p>
                </div>

                <div className="mb-3">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {member.languages.map((lang) => (
                      <Badge key={lang} variant="secondary" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty) => (
                      <Badge key={specialty} className="text-xs bg-accent-aqua text-textured-navy hover:bg-accent-aqua">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-4 line-clamp-3">{member.bio}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Instagram className="h-4 w-4 text-gray-400 hover:text-accent-aqua cursor-pointer transition-colors" />
                    <Twitter className="h-4 w-4 text-gray-400 hover:text-accent-aqua cursor-pointer transition-colors" />
                    <Youtube className="h-4 w-4 text-gray-400 hover:text-accent-aqua cursor-pointer transition-colors" />
                  </div>
                  <Button size="sm" variant="outline" className="border-black bg-aqua-darker text-xs cursor-pointer">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
