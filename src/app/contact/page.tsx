import { ContactForm } from "../../components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-deep-slate via-steel-blue to-textured-navy py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-200 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Ready to take your music to the next level? Contact us today to discuss your project and see how we can help
            you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <Card className="border-gray-400">
              <CardHeader>
                <CardTitle className="text-gray-300">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-aqua-dark" />
                  <div>
                    <p className="font-medium text-aqua-dark">Email</p>
                    <p className="text-sm text-gray-400">info@222nuve.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-aqua-dark" />
                  <div>
                    <p className="font-medium text-aqua-dark">Phone</p>
                    <p className="text-sm text-gray-400">+1 (555) 222-NUVE</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-aqua-dark" />
                  <div>
                    <p className="font-medium text-aqua-dark">Locations</p>
                    <p className="text-sm text-gray-400">Durban, Bloemfontein, Vereeniging, Johannesburg</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-400">
              <CardHeader>
                <CardTitle className="text-gray-300">Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="font-medium text-gray-300">Studio Hours </p>
                <p className="text-sm text-gray-400">Mon-Fri: 9:00 AM &ndash; 5:00 PM</p>
                <div className="mt-4 p-3 bg-accent-aqua/30 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>24/7 Support:</strong> We offer round-the-clock support for urgent projects and technical
                    assistance.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-400">
              <CardHeader>
                <CardTitle className="text-gray-300">Quick Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm"> We typically respond to all inquiries within 2-4 hours during business hours. For urgent matters, please call us directly. </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
