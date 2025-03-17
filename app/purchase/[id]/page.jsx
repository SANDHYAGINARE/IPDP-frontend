"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, MapPin, CreditCard } from "lucide-react"
import EventCard from "@/components/event-card"
import SectionHeader from "@/components/section-header"
import { useParams } from "next/navigation"

export default function PurchasePage() {
  const params = useParams();
  const [tickets, setTickets] = useState([
    {
      id: 1,
      firstName: "Amanda",
      lastName: "Smith",
      email: "Amanda@email.com",
      phone: "(724) 651-7073",
    },
  ])

  const [contactInfo, setContactInfo] = useState({
    firstName: "Amanda",
    lastName: "Smith",
    email: "Amanda@email.com",
    phone: "(724) 651-7073",
    updates: true,
    terms: true,
  })

  const addTicket = () => {
    setTickets([
      ...tickets,
      {
        id: tickets.length + 1,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    ])
  }

  // In a real app, you would fetch event data based on the ID
  const eventData = {
    id: params?.id,
    title: "Rock Revolt: A Fusion of Power and Passion",
    date: "Saturday, February 20",
    time: "08:00 PM",
    location: "Central Park, New York, NY",
    country: "United States",
    price: 90,
    discount: 10,
    image: "/placeholder.svg?height=600&width=1200",
  }

  const subtotal = eventData.price * tickets.length
  const discountAmount = (subtotal * eventData.discount) / 100
  const total = subtotal - discountAmount

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container px-4 py-8 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <Link
            href={`/events/${params?.id}`}
            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-violet-500"
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
            Back to event
          </Link>
          <div className="text-sm text-white/70">
            Time left: <span className="text-violet-500 font-medium">25:00</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-6">{eventData.title}</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3 p-4 rounded-lg border border-violet-900/20 bg-card">
                <Calendar className="h-5 w-5 text-violet-500 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-sm">DATE AND TIME</h4>
                  <p className="text-white/70">
                    {eventData.date}
                    <br />
                    {eventData.time}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-lg border border-violet-900/20 bg-card">
                <MapPin className="h-5 w-5 text-violet-500 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-sm">PLACE</h4>
                  <p className="text-white/70">
                    {eventData.location}
                    <br />
                    {eventData.country}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Contact information</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First name
                    </label>
                    <Input
                      id="firstName"
                      value={contactInfo.firstName}
                      onChange={(e) => setContactInfo({ ...contactInfo, firstName: e.target.value })}
                      className="bg-muted text-white border-violet-900/20 focus-visible:ring-violet-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last name
                    </label>
                    <Input
                      id="lastName"
                      value={contactInfo.lastName}
                      onChange={(e) => setContactInfo({ ...contactInfo, lastName: e.target.value })}
                      className="bg-muted text-white border-violet-900/20 focus-visible:ring-violet-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      className="bg-muted text-white border-violet-900/20 focus-visible:ring-violet-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone number
                    </label>
                    <Input
                      id="phone"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      className="bg-muted text-white border-violet-900/20 focus-visible:ring-violet-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="updates"
                      checked={contactInfo.updates}
                      onCheckedChange={(checked) => setContactInfo({ ...contactInfo, updates: checked })}
                      className="border-violet-900/20 data-[state=checked]:bg-violet-600"
                    />
                    <label
                      htmlFor="updates"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Keep me updated on this event
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={contactInfo.terms}
                      onCheckedChange={(checked) => setContactInfo({ ...contactInfo, terms: checked })}
                      className="border-violet-900/20 data-[state=checked]:bg-violet-600"
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree with the Terms of Use & Privacy Policy
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Ticket</h2>
                  <p className="text-violet-500 font-medium">${eventData.price}/Ticket</p>
                </div>

                {tickets.map((ticket, index) => (
                  <div key={ticket.id} className="p-4 rounded-lg border border-violet-900/20 bg-card space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Ticket {index + 1}</h3>
                      {index === 0 && <div className="text-xs text-white/70">Same contact information</div>}
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor={`ticket-${index}-firstName`} className="text-sm font-medium">
                          First name
                        </label>
                        <Input
                          id={`ticket-${index}-firstName`}
                          value={ticket.firstName}
                          onChange={(e) => {
                            const newTickets = [...tickets]
                            newTickets[index].firstName = e.target.value
                            setTickets(newTickets)
                          }}
                          className="bg-muted text-white border-violet-900/20 focus-visible:ring-violet-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor={`ticket-${index}-lastName`} className="text-sm font-medium">
                          Last name
                        </label>
                        <Input
                          id={`ticket-${index}-lastName`}
                          value={ticket.lastName}
                          onChange={(e) => {
                            const newTickets = [...tickets]
                            newTickets[index].lastName = e.target.value
                            setTickets(newTickets)
                          }}
                          className="bg-muted text-white border-violet-900/20 focus-visible:ring-violet-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor={`ticket-${index}-email`} className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id={`ticket-${index}-email`}
                          type="email"
                          value={ticket.email}
                          onChange={(e) => {
                            const newTickets = [...tickets]
                            newTickets[index].email = e.target.value
                            setTickets(newTickets)
                          }}
                          className="bg-muted text-white border-violet-900/20 focus-visible:ring-violet-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor={`ticket-${index}-phone`} className="text-sm font-medium">
                          Phone number
                        </label>
                        <Input
                          id={`ticket-${index}-phone`}
                          value={ticket.phone}
                          onChange={(e) => {
                            const newTickets = [...tickets]
                            newTickets[index].phone = e.target.value
                            setTickets(newTickets)
                          }}
                          className="bg-muted text-white border-violet-900/20 focus-visible:ring-violet-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <Button
                  variant="outline"
                  onClick={addTicket}
                  className="w-full border-violet-900/20 hover:bg-violet-900/20 hover:text-white"
                >
                  + Add ticket
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-20 space-y-6">
              <div className="p-6 rounded-lg border border-violet-900/20 bg-card space-y-4">
                <h2 className="text-xl font-bold">Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/70">
                      {tickets.length} x ${eventData.price}/Ticket
                    </span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-violet-500">
                    <span>Discount {eventData.discount}%</span>
                    <span>-${discountAmount}</span>
                  </div>
                  <div className="pt-2 border-t border-violet-900/20 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Payment method</span>
                    <Button variant="link" className="p-0 h-auto text-violet-500 hover:text-violet-400">
                      Change
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-md bg-muted">
                    <CreditCard className="h-5 w-5 text-violet-500" />
                    <span>Mastercard ****5987</span>
                  </div>
                </div>
                <Link href={`/confirmation/${params?.id}`}>
                  <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">Pay now</Button>
                </Link>
              </div>

              <div>
                <SectionHeader title="Other events you may like" viewMoreHref="/events" />
                <div className="space-y-4">
                  <EventCard
                    id="19"
                    title="Musical Fusion Festival"
                    date="Monday, June 06"
                    time="06:00 PM"
                    location="New York, NY"
                    price="From $80"
                    image="/placeholder.svg?height=400&width=600"
                    badge="SALE 20% OFF"
                    className="w-full"
                  />
                  <EventCard
                    id="20"
                    title="Metropolis Marathon"
                    date="Tuesday, June 7"
                    time="06:00 AM"
                    location="Atlanta"
                    price="From $10"
                    image="/placeholder.svg?height=400&width=600"
                    badge="SALE Buy 2 get 1 free"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

