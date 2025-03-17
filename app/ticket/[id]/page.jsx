import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import { useParams } from "next/navigation";

export default function TicketPage() {
  const params = useParams();
  // In a real app, you would fetch ticket data based on the ID
  const eventData = {
    id: params.id,
    title: "Rock Revolt: Power and Passion Unite",
    date: "Saturday, February 20",
    time: "08:00 PM",
    location: "Central Park, New York, NY",
    country: "United States",
    duration: "5 hours",
    ticketType: "Email eTicket",
    image: "/placeholder.svg?height=600&width=1200",
  }

  const tickets = [
    {
      firstName: "Amanda",
      lastName: "Smith",
      email: "Amanda@email.com",
      phone: "(724) 651-7073",
      code: "MRCE-934912",
    },
    {
      firstName: "Charles",
      lastName: "Sanchez",
      email: "Charles@email.com",
      phone: "(310) 714-9922",
      code: "MRCE-934913",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container px-4 py-8 md:px-6">
        <Link
          href="/tickets"
          className="inline-flex items-center text-sm font-medium text-white/70 hover:text-violet-500 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1 h-4 w-4"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to my tickets
        </Link>

        <div className="space-y-8">
          <div className="p-6 rounded-lg border border-violet-900/20 bg-card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <div className="text-sm text-white/70">
                  {eventData.date.split(", ")[0].toUpperCase()} | {eventData.time}
                </div>
                <h1 className="text-2xl font-bold mt-1">{eventData.title}</h1>
              </div>
              <div className="text-sm font-medium text-violet-500">Ticket ({tickets.length}) total: $162</div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-6">
              <div className="flex gap-3">
                <Calendar className="h-5 w-5 text-violet-500 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-xs">DATE AND TIME</h4>
                  <p className="text-sm text-white/70">
                    {eventData.date}
                    <br />
                    {eventData.time}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="h-5 w-5 text-violet-500 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-xs">DURATION</h4>
                  <p className="text-sm text-white/70">{eventData.duration}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-violet-500 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-xs">PLACE</h4>
                  <p className="text-sm text-white/70">
                    {eventData.location},<br />
                    {eventData.country}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-violet-900/20">
              <span className="font-medium">{tickets.length} TICKETS</span>
              <span className="text-violet-500">{eventData.ticketType}</span>
            </div>

            <div className="pt-4">
              <Link href={`/events/${params?.id}`}>
                <Button
                  variant="outline"
                  className="w-full border-violet-900/20 hover:bg-violet-900/20 hover:text-white"
                >
                  View event details
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tickets.map((ticket, index) => (
              <div key={index} className="p-6 rounded-lg border border-violet-900/20 bg-card space-y-6">
                <h2 className="text-xl font-bold">Ticket {index + 1}</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-xs">First name</h4>
                    <p className="text-white/70">{ticket.firstName}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-xs">Last name</h4>
                    <p className="text-white/70">{ticket.lastName}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-xs">Email</h4>
                    <p className="text-white/70">{ticket.email}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-xs">Phone number</h4>
                    <p className="text-white/70">{ticket.phone}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2 pt-4">
                  <h4 className="font-medium text-xs">Code</h4>
                  <p className="text-violet-500 font-medium">{ticket.code}</p>
                  <div className="w-48 h-48 bg-white p-2 rounded-lg">
                    <div className="w-full h-full bg-black flex items-center justify-center">
                      <span className="text-xs text-white">QR Code</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-violet-900/20 hover:bg-violet-900/20 hover:text-white"
                >
                  Return ticket
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

