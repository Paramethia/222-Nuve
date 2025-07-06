"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog"
import { Plus, Edit, Trash2, Users, Calendar, DollarSign, Star } from "lucide-react"

const teamMembersData = [
  {
    id: 1,
    name: "Alex Rivera",
    age: 28,
    location: "Los Angeles, CA",
    price: "$40",
    languages: ["EN", "ES"],
    bio: "Grammy-nominated mixing engineer with 8+ years of experience.",
    specialties: ["Mixing", "Mastering", "Beat Production"],
    socials: { instagram: "@alexrivera_audio", twitter: "@alexaudio" },
  },
  {
    id: 2,
    name: "Sarah Chen",
    age: 25,
    location: "Nashville, TN",
    price: "$35",
    languages: ["EN", "ZH"],
    bio: "Vocal coach and topliner with classical background.",
    specialties: ["Vocal Coaching", "Toplining"],
    socials: { instagram: "@sarahchen_vocals", twitter: "@sarahvocals" },
  },
]

const bookingsData = [
  {
    id: 1,
    client: "Jordan Smith",
    service: "Mixing",
    member: "Alex Rivera",
    date: "2024-01-15",
    time: "14:00",
    status: "confirmed",
    amount: 120,
  },
  {
    id: 2,
    client: "Maya Patel",
    service: "Vocal Coaching",
    member: "Sarah Chen",
    date: "2024-01-16",
    time: "10:00",
    status: "pending",
    amount: 100,
  },
]

export function AdminDashboard() {
  const [teamMembers, setTeamMembers] = useState(teamMembersData)
  const [bookings] = useState(bookingsData)
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false)
  const [editingMember, setEditingMember] = useState<any>(null)
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [color, setColor] = useState<string>("text-red-700");


  const [newMember, setNewMember] = useState({
    name: "",
    age: "",
    location: "",
    price: "",
    languages: "",
    bio: "",
    specialties: "",
    instagram: "",
    twitter: "",
    youtube: ""
  })

  const addMember = () => {
    const member = {
      id: Date.now(),
      name: newMember.name,
      age: Number.parseInt(newMember.age),
      location: newMember.location,
      languages: newMember.languages.split(",").map((l) => l.trim()),
      price: newMember.price,
      bio: newMember.bio,
      specialties: newMember.specialties.split(",").map((s) => s.trim()),
      socials: {
        instagram: newMember.instagram,
        twitter: newMember.twitter,
        youtube: newMember.youtube,
      },
    }

    setTeamMembers([...teamMembers, member])
    setNewMember({
      name: "",
      age: "",
      location: "",
      price: "",
      languages: "",
      bio: "",
      specialties: "",
      instagram: "",
      twitter: "",
      youtube: "",
    })
    setIsAddMemberOpen(false)
  }

  const deleteMember = (id: number) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id))
  }

  function formatCheck(input: string) {
    return /^[A-Za-z ]+$/.test(input)
  }

  function formatCheck2(input: string) {
    return /^[A-Za-z, ]+$/.test(input)
  }

  const submit = () => {
    if (!newMember.name || !newMember.age || !newMember.location || !newMember.price || !newMember.languages || !newMember.bio || !newMember.specialties || !newMember.instagram) {
      setErrorMsg("Add the required fields before adding the new member");
      setColor("text-red-800");
      setTimeout(() => { setErrorMsg("") }, 3500 );
      return
    }

    newMember.price = "$" + newMember.price;

    const validName = formatCheck(newMember.name);
    const validLocation = formatCheck2(newMember.location);
    const validLanguages = formatCheck2(newMember.languages);
    const validSpecialties = formatCheck2(newMember.specialties);

    if (!validName) {
      setErrorMsg("The name cannot have any digits or special characters");
      setColor("text-red-700");
      setTimeout(() => { setErrorMsg("") }, 3500 );
      return
    }

    if (!validLocation) {
      setErrorMsg("The location cannot have any digits or special characters");
      setColor("text-red-500");
      setTimeout(() => { setErrorMsg("") }, 3500 );
      return
    }

    if (!validLanguages || !validSpecialties) {
      setErrorMsg("Ensure that the languages and/or specialties do not contain special characters")
      setColor("text-orange-500");
      setTimeout(() => { setErrorMsg("") }, 4500 );
      return
    }

    addMember();
  }

  const totalRevenue = bookings.reduce((sum, booking) => sum + booking.amount, 0)
  const confirmedBookings = bookings.filter((b) => b.status === "confirmed").length

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-300 mb-2">Admin Dashboard</h1>
        <p className="text-gray-300">Manage your team members, bookings, and business operations</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gray-300">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-aqua-darker" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Team Members</p>
                <p className="text-2xl font-bold text-deep-slate">{teamMembers.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-300">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-aqua-darker" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold text-deep-slate">{bookings.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-300">
          <CardContent className="p-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-aqua-darker" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Revenue</p>
                <p className="text-2xl font-bold text-deep-slate">${totalRevenue}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-300">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Star className="h-8 w-8 text-aqua-darker" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Confirmed</p>
                <p className="text-2xl font-bold text-deep-slate">{confirmedBookings}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="team" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-gray-700">
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
        </TabsList>

        <TabsContent value="team" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-300">Team Members</h2>
            <Dialog open={isAddMemberOpen} onOpenChange={setIsAddMemberOpen}>
              <DialogTrigger asChild>
                <Button className="bg-aqua-dark text-textured-navy hover:bg-aqua-darker cursor-pointer">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Member
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-gray-300">
                <DialogHeader>
                  <DialogTitle>Add New Team Member</DialogTitle>
                  <DialogDescription>Create a new team member profile with all their details</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" value={newMember.name} maxLength={21} onChange={(e) => setNewMember({ ...newMember, name: e.target.value })} className="bg-gray-200 border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
                  </div>
                  <div>
                    <Label htmlFor="age">Age *</Label>
                    <Input id="age" type="number" value={newMember.age} min={14} max={135} onChange={(e) => setNewMember({ ...newMember, age: e.target.value })} className="bg-gray-200 border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
                  </div>
                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Input id="location" placeholder="Compton, California" value={newMember.location} maxLength={35} onChange={(e) => setNewMember({ ...newMember, location: e.target.value })} className="bg-gray-200 border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
                  </div>
                  <div>
                    <Label htmlFor="price">Price (USD)</Label>
                    <Input id="price" type="number" value={newMember.price} onChange={(e) => setNewMember({ ...newMember, price: e.target.value })} className="bg-gray-200 border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
                  </div>
                  <div>
                    <Label htmlFor="languages">Languages (comma separated)</Label>
                    <Input id="languages" placeholder="EN, ES, FR" value={newMember.languages} maxLength={17} onChange={(e) => setNewMember({ ...newMember, languages: e.target.value })} className="bg-gray-200 border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
                  </div>
                  <div>
                    <Label htmlFor="specialties">Speciality/Specialties (comma separated)</Label>
                    <Input id="specialties" placeholder="Mixing, Mastering" value={newMember.specialties} maxLength={44} onChange={(e) => setNewMember({ ...newMember, specialties: e.target.value })} className="bg-gray-200 border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" value={newMember.bio} maxLength={280} onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })} className="bg-gray-200 border-gray-400 text-deep-slate focus-visible:ring-0 focus-visible:ring-offset-0" />
                  </div>
                  <div>
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input id="instagram" placeholder="@username" maxLength={15} value={newMember.instagram} onChange={(e) => setNewMember({ ...newMember, instagram: e.target.value })} className="bg-gray-200 border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
                  </div>
                  <div>
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input id="twitter" placeholder="@username" value={newMember.twitter} onChange={(e) => setNewMember({ ...newMember, twitter: e.target.value })} className="bg-gray-200 border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
                  </div>
                </div>
                <p className={`text-xs ${color}`}>{errorMsg}</p>
                <div className="flex justify-end space-x-2 mt-6">
                  <Button onClick={() => setIsAddMemberOpen(false)} className="border border-gray-300 bg-gray-400 text-gray-800 hover:border-gray-800 cursor-pointer">
                    Cancel
                  </Button>
                  <Button onClick={submit} className="border border-gray-800 bg-accent-aqua text-textured-navy hover:bg-aqua-dark hover:border-none cursor-pointer">
                    Add Member
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="border-gray-400 bg-gray-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-deep-slate">{member.name}</CardTitle>
                      <CardDescription>
                        {member.age} years • {member.location}
                      </CardDescription>
                    </div>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="times" className="border-none bg-gray-400">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="times" onClick={() => deleteMember(member.id)} className="border-none bg-gray-400 ext-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Languages:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.languages.map((lang) => (
                          <Badge key={lang} variant="secondary" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty) => (
                          <Badge key={specialty} className="text-xs bg-accent-aqua text-textured-navy hover:bg-accent-aqua">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-0">Price</p>
                    <span className="text-gray-500 text-xs">{member.price}/hour</span>
                    <p className="text-sm text-gray-700">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="bookings" className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-300">Recent Bookings</h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-500">
                  <thead className="bg-gray-300 border border-gray-500">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Client
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Service
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Team Member
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-200 divide-y divide-gray-200">
                    {bookings.map((booking) => (
                      <tr key={booking.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {booking.client}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.service}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.member}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {booking.date} at {booking.time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${booking.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge className={ booking.status === "confirmed" ? "bg-green-100 text-green-800 hover:bg-green-100" : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"}>
                            {booking.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testimonials" className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-300">Manage Testimonials</h2>
          <Card className="border-gray-400 bg-gray-300">
            <CardContent className="p-6">
              <p className="text-gray-600">Testimonial management features would be implemented here, including:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                <li>Approve/reject new testimonials</li>
                <li>Edit existing testimonials</li>
                <li>Assign testimonials to team members</li>
                <li>Moderate content</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
