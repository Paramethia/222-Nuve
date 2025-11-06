"use client"

import { useState, useEffect, useContext } from "react"
import { Globalize } from '../app/globalize';
import { toast, ToastContainer, Bounce, Zoom, Slide, Flip } from 'react-toastify'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import { Button } from "../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Calendar } from "../components/ui/calendar"
import { Clock, Eye, EyeClosed, User, CreditCard, Book } from "lucide-react"

const teamMembers = [
  { id: 1, name: "Alex Rivera", specialties: ["Mixing", "Mastering", "Beat Production"] },
  { id: 2, name: "Sarah Chen", specialties: ["Vocal Coaching", "Toplining", "Artistic Direction"] },
  { id: 3, name: "Marcus Johnson", specialties: ["Beat Production", "Sound Design", "Mixing"] },
  { id: 4, name: "Elena Volkov", specialties: ["Mastering", "Composition", "Artistic Direction"] },
]

const sessionTypes = [
  { name: "Mastering", price: 150, duration: "1-2 hours" },
  { name: "Mixing", price: 120, duration: "2-4 hours" },
  { name: "Vocal coaching", price: 100, duration: "1 hour" },
  { name: "Consultation", price: 80, duration: "1 hour" },
  { name: "Toplining", price: 200, duration: "2-3 hours" },
  { name: "Artist direction", price: 90, duration: "1-2 hours" }
]

const timeSlots: string[] = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

export function BookingCalendar() {
  const [chosenDate, setChosenDate] = useState<Date | undefined>(new Date())
  const [chosenTime, setChosenTime] = useState<string>("")
  const [chosenMember, setChosenMember] = useState<string>("")
  const {chosenSession, setChosenSession} = useContext(Globalize);

  const [booked, setBooked] = useState<boolean>();
  interface Booking {
    name: string,
    session: string,
    member: string,
    date: string,
    time: string
  }
  const [bookingInfo, setBookingInfo] = useState<Booking | null>(null)
  const [expired, setExpired] = useState<boolean>(false);

  const fetchBookingData = async (code: string) => {
    try {
      const response = await fetch(`http://localhost:5008/find-booking?code=${code}`);   
      const result = await response.json();

      const now = new Date();
      const gmtPlus2 = new Date(now.toLocaleString("en-US", { timeZone: "Africa/Johannesburg" }));
      const bookingD = new Date(result.booking.date);

      let bookingDate = new Date(
        bookingD.toLocaleString("en-US", { timeZone: "Africa/Johannesburg" })
      );

      const bookingTime = result.booking.time.slice(0, -3);
      bookingDate = new Date(bookingDate.toString().replace("00:00:00", bookingTime));

      console.log("📅 Current (GMT+2):", gmtPlus2);
      console.log("🎫 Booking (GMT+2):", bookingDate);


      if (gmtPlus2 === bookingDate || gmtPlus2 > bookingDate) {
        setExpired(true);
        //document.getRootNode().scrollTop = 0;
        toast.warn("This booking expired.", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: true,
          theme: "dark",
          transition: Flip
        })
        //localStorage.removeItem("booked")
      }
      setBookingInfo({
        name: result.booking.name,
        session: result.booking.session,
        member: result.booking.member,
        date: bookingDate.toString().slice(0, 15),
        time: result.booking.time.slice(0, -3)
      })
    } catch(error) {
      toast.error("Error fetching booking data", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: true,
        theme: "dark",
        transition: Bounce
      })
      console.error("Error occured while fetching booking data: ", error);
    }
  }

  useEffect(() => {
    // Check if already booked
    const storedCode = localStorage.getItem("booked")
    if (storedCode) { 
      setBooked(true);
      console.log("Already booked before");
      fetchBookingData(storedCode);
    }
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  const [nameErr, setNameErr] = useState<string>("");
  const [emailErr, setEmailErr] = useState<string>("");
  const [bookCheckErr, setBookCheckErr] = useState<string>("");
  const [bookingRes, setBookingRes] = useState<string>("");
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
      const validName:boolean = nameCheck(value);
      if (!validName) {
        setNameErr("Your name cannot have any digits or special characters")
      } else { setNameErr("") }
    } else if (field === "email" && value !== "") {
      const validEmail:boolean = emailCheck(value);
      if (!validEmail) {
        setEmailErr("Invalid email");
      } else { setEmailErr("") }
    }
  }

  const chosenSessionType = sessionTypes.find((s) => s.name === chosenSession)
  const selectedTeamMember = teamMembers.find((m) => m.name === chosenMember)

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  
  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible)
  }

  const checkBooking = async () => {
    const code: string = (document.getElementById("code") as HTMLInputElement).value;

    if (!code) {
      setBookCheckErr("No entered code");
      setColor("text-red-400");
      setTimeout(() => { setBookCheckErr("")}, 2200 );
      return
    }

    if (code.length !== 10) {
      setBookCheckErr("The code must be 10 characters");
      setColor("text-orange-500");
      setTimeout(() => { setBookCheckErr("")}, 3300 )
      return
    }

    try {
      const response = await fetch(`http://localhost:5008/find-booking?code=${code}`);

      if (!response.ok) {
        toast.error("Booking not found", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: true,
          theme: "dark",
          transition: Bounce
        });
        setColor("text-red-400");
        setTimeout(() => { setBookCheckErr("") }, 3000);
        return;
      }
      localStorage.setItem('booked', code);
      setBooked(true);
      fetchBookingData(code);
    } catch (error) {
      console.error("Error occured while finding a booking: ", error);
      setBookCheckErr("Error finding booking");
      setColor("text-red-400");
      setTimeout(() => { setBookCheckErr("") }, 3000);
    }
  }

  const handleBooking = async () => {
    if (!formData.name || !formData.email || !chosenDate || !chosenTime || !chosenMember || !chosenSession) {
      toast.error("Enter all required fields", {
        position: "top-left",
        autoClose: 3200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return
    }

    if (!nameCheck(formData.name) || !emailCheck(formData.email)) {
      toast.error("Invalid name or email", {
        position: "top-left",
        autoClose: 3200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
      return
    }

    const bookingData = {
      name: formData.name,
      email: formData.email,
      session: chosenSession,
      member: chosenMember,
      date: chosenDate.toString().slice(0, 15),
      time: chosenTime,
    };

    try {
      const response = await fetch('http://localhost:5008/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      // I'm not gonna integrate paypal 'cause this is just for practice

      if (response.ok) {
        toast.success("Booking confirmed! Copy your booking code", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
        setBookingRes(result.bookingCode);
        localStorage.setItem('booked', result.bookingCode)
      } else {
        toast.error("Booking failed!", {
          position: "top-left",
          autoClose: 2800,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Error occured while booking: ", error);
      alert("Something went wrong. Please try again.");
    }
  }

  function copyCode(){
    navigator.clipboard.writeText(bookingRes);
    setBookingRes("");
    toast.info("Booking code copied📋", {
      position: "top-center",
      autoClose: 2700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    });
  }

  return (
    <>
    <ToastContainer className="mt-15"></ToastContainer>
    <Card className="border-gray-300">
      { !booked ? (
        <>
        <CardHeader>
          <CardTitle className="text-gray-300">Schedule Your Session</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          { /* Personal info */}
          <div>
            <Label htmlFor="name" className="text-gray-300">Full name <span className="text-accent-aqua">*</span></Label>
            <Input id="name" value={formData.name} maxLength={27} onChange={(e) => inputChange("name", e.target.value)} required className="bg-gray-300 border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
            <p className={`text-xs text-red-300 mt-2`}>{nameErr}</p>
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-300"> Email address <span className="text-accent-aqua">*</span></Label>
            <Input id="email" type="email" value={formData.email} maxLength={32} onChange={(e) => inputChange("email", e.target.value)} required className="bg-gray-300 border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
            <p className={`text-xs text-red-300 mt-2`}>{emailErr}</p>
          </div>

          {/* Session type selection */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Session Type <span className="text-accent-aqua">*</span></label>
            <Select value={chosenSession} onValueChange={setChosenSession}>
              <SelectTrigger className="focus-visible:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Choose a session type" />
              </SelectTrigger>
              <SelectContent className="bg-gray-300">
                {sessionTypes.map((session) => (
                  <SelectItem key={session.name} value={session.name}>
                    <div className="flex justify-between items-center w-full">
                      <span>{session.name}</span>
                      <span className="text-sm text-gray-500 ml-4">${session.price}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Team member selection */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Team Member <span className="text-accent-aqua">*</span></label>
            <Select value={chosenMember} onValueChange={setChosenMember}>
              <SelectTrigger className="focus-visible:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Choose a team member" />
              </SelectTrigger>
              <SelectContent className="bg-gray-300">
                {teamMembers.map((member) => (
                  <SelectItem key={member.id} value={member.name}>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-xs text-gray-500">{member.specialties.join(", ")}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date selection */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Select Date <span className="text-accent-aqua">*</span></label>
            <Calendar 
              mode="single" selected={chosenDate} onSelect={setChosenDate} 
              disabled={(date) => { 
                const today = new Date(); 
                today.setHours(0, 0, 0, 0); 
                return date < today || date.getDay() === 0} 
              } 
              className="rounded-md" />
          </div>

          {/* Time selection */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Select Time (GMT+2) <span className="text-accent-aqua">*</span></label>
            <div className="grid grid-cols-5 gap-2">
              {timeSlots.map((time) => {
              // Parse the current time in GMT+2
              const now = new Date();
              const gmtPlus2 = new Date(now.toLocaleString("en-US", { timeZone: "Africa/Johannesburg" })); // GMT+2 region
              const [hours, minutes] = time.split(":").map(Number);
      
              // Make a date for this time slot (on the chosen date)
              const slotDate = new Date(chosenDate || new Date());
              slotDate.setHours(hours, minutes, 0, 0);

              // Disable if the time slot is in the past AND the chosen date is today
              const isToday = chosenDate && new Date(chosenDate).toDateString() === gmtPlus2.toDateString();
              const isPast = isToday && slotDate.getTime() < gmtPlus2.getTime();

              return (
                <Button
                  key={time}
                  variant={chosenTime === time ? "default" : "times"}
                  size="sm"
                  disabled={isPast}
                  onClick={() => !isPast && setChosenTime(time)}
                  className={`cursor-pointer border-aqua-darker ${
                    chosenTime === time ? "bg-aqua-darker" : ""
                  } ${isPast ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {time}
                </Button>
              );
            })}
            </div>
          </div>

          {/* Already booked */}
          <div className="mb-6">
            <Card className="bg-[rgba(209,213,219,0.2)] p-4 shadow-sm text-center">
              <h2 className="text-gray-300 text-2xl mb-2">Already booked?</h2>
              <label className="block text-gray-300">Enter booking code:</label>
              <div className="relative max-w-[385px] m-auto">
              <Input id="code" type={passwordVisible ? "text" : "password"} maxLength={10} placeholder="fb8nf0G4j3" required className="inline w-full bg-gray-300 border-gray-400 text-center focus-visible:ring-0 focus-visible:ring-offset-0" />
              <button type="button" className="inline z-2 absolute top-3 right-5 text-deep-slate hover:text-aqua-darkest" onClick={togglePasswordVisibility}>
                  {passwordVisible ? <Eye className="w-4 h-4" /> : <EyeClosed className="w-4 h-4" />}
              </button>
              </div>
              <p className={`text-xs ${color} mt-2`}>{bookCheckErr}</p>
              <br />
              <button className="border-2 border-aqua-dark rounded-lg p-1 text-aqua-dark cursor-pointer hover:border-accent-aqua hover:text-accent-aqua" onClick={checkBooking}>
                Check booking
              </button>
            </Card>
          </div>

          {/* Booking summary */}
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
              
              <p className={`${bookingRes ? '' : 'hidden'} text-xs text-deep-slate mt-4`}> Booking complete! Here's your booking code: <span className="border border-textured-navy p-1 rounded-lg text-textured-navy cursor-pointer hover:bg-accent-aqua" onClick={copyCode}>{bookingRes}</span></p>
              <Button onClick={handleBooking} className="w-full mt-6 bg-aqua-dark text-textured-navy cursor-pointer hover:bg-aqua-darker" size="lg">
                <CreditCard className="mr-2 h-5 w-5" />
                Book & Pay with PayPal
              </Button>
            </div>
          )}
        </CardContent>
        </>
      ) : (
        <>
        <CardHeader>
          <CardTitle className="text-gray-300 text-center">Your booking</CardTitle>
        </CardHeader>

        <div className="mx-auto mb-7 bg-[rgba(209,213,219,0.2)] rounded-md p-6" style={{ maxWidth: "80%" }}>
          <div className="space-y-3">
            <span className={`${expired ? "inline rounded-lg bg-gray-200 p-2 float-right text-sm text-gray-800" : "hidden"}`}>Expired</span>
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-aqua-dark" />
              <span className="text-sm text-gray-300">
                <strong>{bookingInfo?.name}</strong>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Book className="h-4 w-4 text-aqua-dark" />
              <span className="text-sm text-gray-300">
                <strong>{bookingInfo?.session}</strong> with {bookingInfo?.member}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-aqua-dark" />
              <span className="text-sm text-gray-300">
                <strong>{bookingInfo?.date}</strong> at {bookingInfo?.time}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button onClick={() => setBooked(!booked)} className="w-[200px] mb-7 bg-aqua-dark text-textured-navy cursor-pointer hover:bg-aqua-darker">
            Book again
          </Button>
        </div>
        </>
      )}
    </Card>
    </>
  )
}