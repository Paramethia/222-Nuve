"use client"

import { useState, useContext } from "react"
import { Globalize } from '../app/globalize';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Button } from "../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Calendar } from "../components/ui/calendar"
import { Clock, User, CreditCard } from "lucide-react"

const teamMembers = [
  { id: 1, name: "Alex Rivera", specialties: ["Mixing", "Mastering", "Beat Production"] },
  { id: 2, name: "Sarah Chen", specialties: ["Vocal Coaching", "Toplining", "Artistic Direction"] },
  { id: 3, name: "Marcus Johnson", specialties: ["Beat Production", "Sound Design", "Mixing"] },
  { id: 4, name: "Elena Volkov", specialties: ["Mastering", "Composition", "Artistic Direction"] },
]

const sessionTypes = [
  { id: "mastering", name: "Mastering", price: 150, duration: "1-2 hours" },
  { id: "mixing", name: "Mixing", price: 120, duration: "2-4 hours" },
  { id: "vocal-coaching", name: "Vocal Coaching", price: 100, duration: "1 hour" },
  { id: "consultation", name: "Consultation", price: 80, duration: "1 hour" },
  { id: "toplining", name: "Toplining", price: 200, duration: "2-3 hours" },
  { id: "artist-direction", name: "Artist Direction", price: 90, duration: "1-2 hours" },
]

const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

export function BookingCalendar() {
  const [chosenDate, setChosenDate] = useState<Date | undefined>(new Date())
  const [chosenTime, setChosenTime] = useState<string>("")
  const [chosenMember, setChosenMember] = useState<string>("")
  //const [chosenSession, setChosenSession] = useState<string>("")
  const {chosenSession, setChosenSession} = useContext(Globalize);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  const [nameErr, setNameErr] = useState<string>("");
  const [emailErr, setEmailErr] = useState<string>("");
  const [bookCheckErr, setBookCheckErr] = useState<string>("");
  const [color, setColor] = useState<string>("text-red-500");

  const realEmailDomains: string[] = [
    "gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "aol.com",
    "icloud.com", "protonmail.com", "zoho.com", "gmx.com", "yandex.com",
    "mail.com", "live.com", "msn.com", "att.net", "comcast.net",
    "me.com", "mac.com", "fastmail.com"
  ];

  function nameCheck(name: string) {
    return /^[A-Za-z ]+$/.test(name)
  }

  function emailCheck(email: string) {
    const emailDomain = email.split("@")[1];
    return realEmailDomains.includes(emailDomain);
  }

  const inputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    if (field === "name" && value !== "") {
      const validName: boolean = nameCheck(value);
      if (!validName) {
        setNameErr("Your name cannot have any digits or special characters")
        setTimeout(() => { setNameErr("") }, 3200 );
      }
    } else if (field === "email" && value !== "") {
      const validEmail: boolean = emailCheck(value);
      if (!validEmail) {
        setEmailErr("Invalid email");
        setTimeout(() => { setEmailErr("") }, 2000 );
      }
    }
  }

  const handleBooking = async () => {
    if (!formData.name || !formData.email || !chosenDate || !chosenTime || !chosenMember || !chosenSession) {
      alert("Please enter all required fields");
      return
    }

    const sessionType = sessionTypes.find((s) => s.id === chosenSession)
    const member = teamMembers.find((m) => m.id.toString() === chosenMember)

    const bookingData = {
      name: formData.name,
      email: formData.email,
      sessionId: chosenSession,
      memberId: chosenMember,
      date: chosenDate.toISOString().split('T')[0],
      time: chosenTime,
    };

    try {
      const response = await fetch('http://localhost:5008/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(`Booking confirmed! Your booking code: ${result.booking.code}\nRedirecting to PayPal...`);
        // To do: integrate PayPal
      } else {
        alert(result.error || "Booking failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }

    // This must integrate with PayPal API
    /*
    alert(
      `Booking received \n Session: ${sessionType?.name} \n With: ${member?.name} \n Date: ${chosenDate.toDateString()} \n Time: ${chosenTime} \n Price: $${sessionType?.price} \n\n Redirecting to PayPal...`,
    )
    */
  }

  const chosenSessionType = sessionTypes.find((s) => s.id === chosenSession)
  const selectedTeamMember = teamMembers.find((m) => m.id.toString() === chosenMember)

  const checkBooking = () => {
    const code: string = document.getElementById("code").value;

    if (!formData.name || !formData.email) {
      setBookCheckErr("Enter your name and email at the top");
      setColor("text-red-400");
      setTimeout(() => { setBookCheckErr("")}, 4000 );
      return
    }

    if (!code) {
      setBookCheckErr("No entered code");
      setColor("text-orange-500");
      setTimeout(() => { setBookCheckErr("")}, 2200 );
      return
    }

  }

  return (
    <Card className="border-gray-300">
      <CardHeader>
        <CardTitle className="text-gray-300">Schedule Your Session</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        { /* Personal info */}
        <div>
          <Label htmlFor="name" className="text-gray-300">Full name *</Label>
          <Input id="name" value={formData.name} maxLength={27} onChange={(e) => inputChange("name", e.target.value)} required className="bg-gray-300 border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
          <p className={`text-xs text-red-300 mt-2`}>{nameErr}</p>
        </div>
        <div>
          <Label htmlFor="email" className="text-gray-300"> Email address *</Label>
          <Input id="email" type="email" value={formData.email} maxLength={32} onChange={(e) => inputChange("email", e.target.value)} required className="bg-gray-300 border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
          <p className={`text-xs text-red-300 mt-2`}>{emailErr}</p>
        </div>

        {/* Session Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Session Type *</label>
          <Select value={chosenSession} onValueChange={setChosenSession}>
            <SelectTrigger className="focus-visible:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Choose a session type" />
            </SelectTrigger>
            <SelectContent className="bg-gray-300">
              {sessionTypes.map((session) => (
                <SelectItem key={session.id} value={session.id}>
                  <div className="flex justify-between items-center w-full">
                    <span>{session.name}</span>
                    <span className="text-sm text-gray-500 ml-4">${session.price}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Team Member Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Team Member *</label>
          <Select value={chosenMember} onValueChange={setChosenMember}>
            <SelectTrigger className="focus-visible:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Choose a team member" />
            </SelectTrigger>
            <SelectContent className="bg-gray-300">
              {teamMembers.map((member) => (
                <SelectItem key={member.id} value={member.id.toString()}>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-xs text-gray-500">{member.specialties.join(", ")}</div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Select Date *</label>
          <Calendar mode="single" selected={chosenDate} onSelect={setChosenDate} disabled={(date) => { const today = new Date(); today.setHours(0, 0, 0, 0); return date < today || date.getDay() === 0} } className="rounded-md" />
        </div>

        {/* Time Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Select Time *</label>
          <div className="grid grid-cols-5 gap-2">
            {timeSlots.map((time) => (
              <Button key={time} variant={chosenTime === time ? "default" : "times"} size="sm" onClick={() => setChosenTime(time)} className={`cursor-pointer border-aqua-darker ${chosenTime === time ? "bg-aqua-darker" : ""}`}>
                {time}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <Card className="bg-[rgba(209,213,219,0.2)] p-4 shadow-sm text-center">
            <h2 className="text-gray-300 text-2xl mb-2">Already booked?</h2>
            <label className="text-gray-300">Enter booking code:</label>
            <Input id="code" maxLength={10} placeholder="fb8nf0G4j3" required className="max-w-[385px] m-auto bg-gray-300 border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
            <p className={`text-xs ${color} mt-2`}>{bookCheckErr}</p>
            <br />
            <button className="border-2 border-aqua-dark rounded-lg p-1 text-aqua-dark cursor-pointer hover:border-accent-aqua hover:text-accent-aqua" onClick={checkBooking}>
              Check booking
            </button>
          </Card>
        </div>

        {/* Booking Summary */}
        {formData.name && formData.email && chosenMember && chosenSession && chosenDate && chosenTime && (
          <div className="bg-gray-300 rounded-md p-6">
            <h3 className="font-semibold text-deep-slate mb-4">Booking Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-gray-500" />
                <span className="text-sm">
                  <strong>{selectedTeamMember?.name}</strong> - {chosenSessionType?.name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm">
                  {chosenDate.toDateString()} at {chosenTime}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-4 w-4 text-gray-500" />
                <span className="text-sm">
                  <strong>${chosenSessionType?.price}</strong> ({chosenSessionType?.duration})
                </span>
              </div>
            </div>
            
            <Button onClick={handleBooking} className="w-full mt-6 bg-aqua-dark text-textured-navy cursor-pointer hover:bg-aqua-darker" size="lg">
              <CreditCard className="mr-2 h-5 w-5" />
              Book & Pay with PayPal
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
