"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [message, setMessage] = useState<string>("");
  const [color, setColor] = useState<string>("text-red-400");

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

  function phoneNumberCheck(phoneNumber: string){
    return /^\+?[0-9\s\-().]{7,20}$/.test(phoneNumber)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const validName: boolean = nameCheck(formData.name);
    const validEmail: boolean = emailCheck(formData.email);

    if (!validName) {
      setMessage("Your name cannot have any digits or special characters")
      setColor("text-red-700");
      setTimeout(() => { setMessage("") }, 3500 );
      return
    }
      
    if (!validEmail) {
      setMessage("That's a fake email");
      setColor("text-red-500");
      setTimeout(() => { setMessage("") }, 2400 );
      return
    }

    if (formData.phone) {
      const validPhoneNumber: boolean = phoneNumberCheck(formData.phone);
      if (!validPhoneNumber) {
        setMessage("Invalid phone number format");
        setColor("text-orange-500");
        setTimeout(() => { setMessage("") }, 2800 );
        return
      }
    }

    setMessage("Thank you for your message! We'll get back to you soon.");
    setTimeout(() => { setMessage("") }, 4400 );
    setColor("text-gray-300");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  const inputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="border-gray-300">
      <CardHeader>
        <CardTitle className="text-gray-300">Send us a message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-gray-300">Full name <span className="text-accent-aqua">*</span></Label>
              <Input id="name" value={formData.name} maxLength={27} onChange={(e) => inputChange("name", e.target.value)} required className="bg-gray-300 border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-300"> Email address <span className="text-accent-aqua">*</span></Label>
              <Input id="email" type="email" value={formData.email} maxLength={32} onChange={(e) => inputChange("email", e.target.value)} required className="bg-gray-300 border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="text-gray-300">Phone number</Label>
              <Input id="phone" type="tel" value={formData.phone} maxLength={14} onChange={(e) => inputChange("phone", e.target.value)} className="bg-gray-300 border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
            </div>
            <div>
              <Label htmlFor="service" className="text-gray-300">Service interest</Label>
              <Select value={formData.service} onValueChange={(value) => inputChange("service", value)}>
                <SelectTrigger className="border-gray-300 text-gray-400 focus-visible:ring-0 focus:ring-offset-0 focus-visible:border-[2px]">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-gray-300">
                  <SelectItem value="mixing">Mixing</SelectItem>
                  <SelectItem value="mastering">Mastering</SelectItem>
                  <SelectItem value="vocal-coaching">Vocal Coaching</SelectItem>
                  <SelectItem value="toplining">Toplining</SelectItem>
                  <SelectItem value="artist-direction">Artist Direction</SelectItem>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="message" className="text-gray-300">Message <span className="text-accent-aqua">*</span></Label>
            <Textarea id="message" rows={6} maxLength={700} placeholder="Tell us about your project, goals, and how we can help you..." value={formData.message} onChange={(e) => inputChange("message", e.target.value)} required className="bg-gray-300 border-gray-400 text-deep-slate focus-visible:ring-0 focus-visible:ring-offset-0"/>
          </div>

          <p className={`text-xs ${color}`}>{message}</p>

          <Button type="submit" className="w-full bg-aqua-dark text-textured-navy cursor-pointer hover:bg-aqua-darker" size="lg">
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}