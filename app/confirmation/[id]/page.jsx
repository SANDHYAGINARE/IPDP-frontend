"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, CheckCircle } from "lucide-react";
import EventCard from "@/components/event-card";
import SectionHeader from "@/components/section-header";
import { useParams } from "next/navigation";

export default function ConfirmationPage() {
  const params = useParams();

  const eventData = {
    id: params?.id,
    title: "Rock Revolt: A Fusion of Power and Passion",
    date: "Saturday, February 20",
    time: "08:00 PM",
    location: "Central Park, New York, NY",
    country: "United States",
    duration: "5 hours",
    ticketType: "Email eTicket",
    image: "https://images.pexels.com/photos/1267317/pexels-photo-1267317.jpeg?auto=compress&cs=tinysrgb&w=600",
  };

  const purchaseData = {
    code: "#238920483",
    date: "Jun 01, 2023",
    total: "$162",
    paymentMethod: "Master Card - **** 5987",
    contactInfo: {
      firstName: "Amanda",
      lastName: "Smith",
      email: "Amanda@email.com",
      phone: "(724) 651-7073",
    },
    tickets: [
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
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-violet-900/20 mb-4">
            <CheckCircle className="h-8 w-8 text-violet-500" />
          </div>
          <h1 className="text-3xl font-bold">Successful payment!</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="p-6 rounded-lg border border-violet-900/20 bg-card">
              <h2 className="text-xl font-bold mb-4">{eventData.title}</h2>
              <div className="grid gap-6 sm:grid-cols-3">
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
                    <p className="text-sm text-white/70">
                      {eventData.duration}
                    </p>
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
              <div className="mt-4 pt-4 border-t border-violet-900/20">
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    {purchaseData.tickets.length} TICKETS
                  </span>
                  <span className="text-violet-500">
                    {eventData.ticketType}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-violet-900/20 bg-card space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4">Purchase information</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-xs">Code</h4>
                    <p className="text-white/70">{purchaseData.code}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-xs">Date</h4>
                    <p className="text-white/70">{purchaseData.date}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-xs">Total</h4>
                    <p className="text-white/70">{purchaseData.total}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-xs">Payment method</h4>
                    <p className="text-white/70">
                      {purchaseData.paymentMethod}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Contact information</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-xs">First name</h4>
                    <p className="text-white/70">
                      {purchaseData.contactInfo.firstName}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-xs">Last name</h4>
                    <p className="text-white/70">
                      {purchaseData.contactInfo.lastName}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-xs">Email</h4>
                    <p className="text-white/70">
                      {purchaseData.contactInfo.email}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-xs">Phone number</h4>
                    <p className="text-white/70">
                      {purchaseData.contactInfo.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-violet-900/20">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">
                    Ticket ({purchaseData.tickets.length}) total:{" "}
                    {purchaseData.total}
                  </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {purchaseData.tickets.map((ticket, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-violet-900/20 bg-muted space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-2">
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
                      <div className="flex flex-col items-center space-y-2">
                        <h4 className="font-medium text-xs">Code</h4>
                        <p className="text-violet-500 font-medium">
                          {ticket.code}
                        </p>
                        <div className="w-32 h-32 bg-white p-2 rounded-lg">
                          <div className="w-full h-full bg-black flex items-center justify-center">
                            <span className="text-xs text-white">QR Code</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/tickets">
                <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                  Go to my ticket
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <div className="sticky top-20 space-y-6">
              <div>
                <SectionHeader title="Other events you may like" />
                <div className="space-y-4">
                  <EventCard
                    id="21"
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
                    id="22"
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
  );
}
