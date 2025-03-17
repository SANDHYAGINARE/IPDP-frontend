"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Mail, Heart, Share2 } from "lucide-react";
import EventCard from "@/components/event-card";
import SectionHeader from "@/components/section-header";
import { useParams } from "next/navigation";

export default function EventPage() {
  const params = useParams();

  // In a real app, you would fetch event data based on the ID
  const eventData = {
    id: params?.id,
    title: "Rock Revolt: A Fusion of Power and Passion",
    date: "Saturday, February 20",
    time: "08:00 PM",
    location: "Central Park, New York, NY 10022",
    country: "United States",
    price: "$90/Ticket",
    duration: "5 hours",
    ticketType: "Email eTicket",
    description:
      'Rock Revolt: A Fusion of Power and Passion" is an electrifying rock music event that brings together a diverse lineup of talented rock bands and artists. The event aims to showcase the raw energy, intense power, and passionate performances that define the rock genre. Attendees can expect an unforgettable night filled with iconic rock anthems, headbanging moments, and the electric atmosphere that only a live rock concert can deliver.',
    likes: 345,
    shares: 124,
    image: "https://images.pexels.com/photos/1267317/pexels-photo-1267317.jpeg?auto=compress&cs=tinysrgb&w=600",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container px-4 py-8 md:px-6">
        <Link
          href="/"
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
          Back to events
        </Link>

        <div className="grid gap-10 md:grid-cols-3 lg:gap-16">
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-violet-900/20 px-3 py-1 text-sm text-violet-500">
                FEBRUARY 20
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {eventData.title}
              </h1>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1 border-violet-900/20 hover:bg-violet-900/20 hover:text-white"
                >
                  <Heart className="h-4 w-4" />
                  <span>{eventData.likes}</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1 border-violet-900/20 hover:bg-violet-900/20 hover:text-white"
                >
                  <Share2 className="h-4 w-4" />
                  <span>{eventData.shares}</span>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={eventData.image || "/placeholder.svg"}
                alt={eventData.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">About event</h2>
              <p className="text-white/70">{eventData.description}</p>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white">
                Purchase ticket
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-lg border border-violet-900/20 bg-card overflow-hidden">
              <div className="bg-violet-900/20 p-4">
                <h3 className="font-bold">Timing and location</h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex gap-3">
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
                <div className="flex gap-3">
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
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-violet-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-sm">DURATION</h4>
                    <p className="text-white/70">{eventData.duration}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="h-5 w-5 text-violet-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-sm">TICKET</h4>
                    <p className="text-white/70">{eventData.ticketType}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-violet-900/20 bg-card overflow-hidden">
              <div className="bg-violet-900/20 p-4">
                <h3 className="font-bold">Price</h3>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-violet-500">
                  {eventData.price}
                </p>
                <Button className="w-full mt-4 bg-violet-600 hover:bg-violet-700 text-white">
                  Purchase ticket
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Events */}
        <div className="mt-16">
          <SectionHeader title="Similar Events" viewMoreHref="/events" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <EventCard
              id="15"
              title="Fuel Your Passion for Rock Music"
              date="Tuesday, August 18"
              time="06:00 PM"
              location="New York, NY"
              price="From $100"
              image="https://images.pexels.com/photos/416831/pexels-photo-416831.jpeg?auto=compress&cs=tinysrgb&w=600"
              badge="SALE 20% OFF"
            />
            <EventCard
              id="16"
              title="Musical Fusion Festival"
              date="Monday, June 06"
              time="06:00 PM"
              location="New York, NY"
              price="From $90"
              image="https://images.pexels.com/photos/3469692/pexels-photo-3469692.jpeg?auto=compress&cs=tinysrgb&w=600"
              badge="SALE 10% OFF"
            />
            <EventCard
              id="17"
              title="Rock Festival"
              date="Monday, March 14"
              time="04:00 PM"
              location="New York, NY"
              price="From $100"
              image="https://images.pexels.com/photos/2513611/pexels-photo-2513611.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <EventCard
              id="18"
              title="Harmony of Melodies Concert"
              date="Wednesday, June 24"
              time="07:00 PM"
              location="New York, NY"
              price="Free ticket"
              image="https://images.pexels.com/photos/3778702/pexels-photo-3778702.jpeg?auto=compress&cs=tinysrgb&w=600"
              badge="Free"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
