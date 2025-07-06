import { BookingCalendar } from "../../components/booking-calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { FaPaypal } from 'react-icons/fa';

export default function BookingPage() {

  return (
    <div className="min-h-screen bg-gradient-to-r from-deep-slate via-steel-blue to-textured-navy py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-200 mb-4">Book Your Session</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto"> Choose your preferred service, team member, and time slot. Secure your booking with our integrated payment system.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BookingCalendar />
          </div>

          <div className="space-y-6">
            <Card className="border-gray-400">
              <CardHeader>
                <CardTitle className="text-gray-300">Session types</CardTitle>
                <CardDescription className="text-gray-300">Choose the service that fits your needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 border rounded-lg hover:bg-accent-aqua/10 cursor-pointer border-gray-400 transition-colors">
                  <h4 className="font-semibold text-gray-300">Mastering</h4>
                  <p className="text-sm text-gray-400">$150/hour</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent-aqua/10 cursor-pointer border-gray-400 transition-colors">
                  <h4 className="font-semibold text-gray-300">Mixing</h4>
                  <p className="text-sm text-gray-400">$120/hour</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent-aqua/10 cursor-pointer border-gray-400 transition-colors">
                  <h4 className="font-semibold text-gray-300">Vocal Coaching</h4>
                  <p className="text-sm text-gray-400">$100/hour</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent-aqua/10 cursor-pointer border-gray-400 transition-colors">
                  <h4 className="font-semibold text-gray-300">Consultation</h4>
                  <p className="text-sm text-gray-400">$80/hour</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent-aqua/10 cursor-pointer border-gray-400 transition-colors">
                  <h4 className="font-semibold text-gray-300">Toplining</h4>
                  <p className="text-sm text-gray-400">$200/session</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-accent-aqua/10 cursor-pointer border-gray-400 transition-colors">
                  <h4 className="font-semibold text-gray-300">Artist Direction</h4>
                  <p className="text-sm text-gray-400">$90/hour</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-400">
              <CardHeader>
                <CardTitle className="text-gray-300">Payment</CardTitle>
                <CardDescription className="text-aqua-dark">Secure payment through PayPal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 mb-4">
                  All payments are processed securely through PayPal. You'll be redirected to complete your payment
                  after selecting your session.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-14 h-5 bg-aqua-darker rounded text-white text-xs flex items-center justify-center font-bold">
                    <FaPaypal className="w-4 h-4" />ayPal
                  </div>
                  <span className="text-sm text-aqua-darker">Secure Payment</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
