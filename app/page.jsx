import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Music, Dumbbell, ImageIcon, Briefcase, Camera, Heart } from "lucide-react"
import EventCard from "@/components/event-card"
import CategoryCard from "@/components/category-card"
import SectionHeader from "@/components/section-header"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b border-violet-900/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Pick up your <span className="gradient-text">wonderful</span> plans
                </h1>
                <p className="max-w-[600px] text-white/70 md:text-xl">
                  Find the event you&apos;re interested in and make unforgettable memories
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Find the event you're interested in"
                    className="pl-9 bg-muted text-white border-violet-900/20 focus-visible:ring-violet-500"
                  />
                </div>
                <div className="relative flex-1 sm:max-w-[200px]">
                  <Input
                    placeholder="New York, NY"
                    className="bg-muted text-white border-violet-900/20 focus-visible:ring-violet-500"
                  />
                </div>
                <Button className="bg-violet-600 hover:bg-violet-700 text-white">Search</Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="https://images.pexels.com/photos/2078076/pexels-photo-2078076.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Events" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Events Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <SectionHeader title="New events in NYC" viewMoreHref="/events" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <EventCard
              id="1"
              title="Urban Marathon"
              date="Monday, June 06"
              time="06:00 AM"
              location="New York, NY"
              price="From $20"
              image="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <EventCard
              id="2"
              title="Melody Mania"
              date="Wednesday, June 24"
              time="07:00 PM"
              location="New York, NY"
              price="Free ticket"
              image="https://images.pexels.com/photos/1540343/pexels-photo-1540343.jpeg?auto=compress&cs=tinysrgb&w=600"
              badge="Free"
            />
            <EventCard
              id="3"
              title="Rockin' the Stage"
              date="Monday, March 14"
              time="04:00 PM"
              location="New York, NY"
              price="From $120.00"
              image="https://images.pexels.com/photos/167591/pexels-photo-167591.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <EventCard
              id="4"
              title="Musical Fusion Festival"
              date="Monday, June 06"
              time="06:00 AM"
              location="New York, NY"
              price="From $8"
              image="https://images.pexels.com/photos/1537637/pexels-photo-1537637.jpeg?auto=compress&cs=tinysrgb&w=600"
              badge="SALE 20% OFF"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-b from-black to-violet-950/20">
        <div className="container px-4 md:px-6">
          <SectionHeader title="Explore by categories" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <CategoryCard icon={Music} title="Music" href="/category/music" />
            <CategoryCard icon={Dumbbell} title="Sport" href="/category/sport" />
            <CategoryCard icon={ImageIcon} title="Exhibition" href="/category/exhibition" />
            <CategoryCard icon={Briefcase} title="Business" href="/category/business" />
            <CategoryCard icon={Camera} title="Photography" href="/category/photography" />
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <SectionHeader title="Upcoming in 24h" viewMoreHref="/upcoming" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-card rounded-lg border border-violet-900/20 p-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/1306791/pexels-photo-1306791.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Brushstrokes & Beyond: An Oil Painting Odyssey"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70"
                  >
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-white/70">Tuesday, June 7 | 06:00 PM</p>
                    <h3 className="text-xl font-bold mt-1">Brushstrokes & Beyond: An Oil Painting Odyssey</h3>
                    <p className="text-sm text-white/70 mt-1">2678 Forest Avenue, San Jose, CA 95111</p>
                  </div>
                  <Link href="/events/5">
                    <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">Purchase Ticket</Button>
                  </Link>
                </div>
              </div>
            </div>
            <EventCard
              id="6"
              title="Marathon"
              date="Monday, June 06"
              time="06:00 AM"
              location="New York, NY"
              price="From $10"
              image="https://images.pexels.com/photos/1578317/pexels-photo-1578317.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <EventCard
              id="7"
              title="Creating a Thriving Business in the United States"
              date="Tuesday, June 7"
              time="06:00 AM"
              location="Atlanta"
              price="From $50"
              image="https://images.pexels.com/photos/1776151/pexels-photo-1776151.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-b from-black to-violet-950/20">
        <div className="container px-4 md:px-6">
          <SectionHeader title="Highlights this week" viewMoreHref="/highlights" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <EventCard
              id="8"
              title="Rock Festival"
              date="Monday, March 14"
              time="04:00 PM"
              location="New York, NY"
              price="From $100"
              image="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600"
              badge="SALE 10% OFF"
            />
            <EventCard
              id="9"
              title="Creating a Thriving Business in the United States"
              date="Tuesday, June 7"
              time="06:00 AM"
              location="Atlanta"
              price="From $50"
              image="https://images.pexels.com/photos/1763068/pexels-photo-1763068.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <EventCard
              id="10"
              title="Rock Festival"
              date="Monday, March 14"
              time="04:00 PM"
              location="New York, NY"
              price="From $100"
              image="https://images.pexels.com/photos/1494666/pexels-photo-1494666.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </section>

      {/* More Events Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <SectionHeader title="More events" viewMoreHref="/events" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <EventCard
              id="11"
              title="Harmony of Melodies Concert"
              date="Wednesday, June 24"
              time="07:00 PM"
              location="New York, NY"
              price="Free ticket"
              image="https://images.pexels.com/photos/167478/pexels-photo-167478.jpeg?auto=compress&cs=tinysrgb&w=600"
              badge="Free"
            />
            <EventCard
              id="12"
              title="Urban Marathon"
              date="Monday, June 06"
              time="06:00 AM"
              location="New York, NY"
              price="From $20"
              image="https://images.pexels.com/photos/2417726/pexels-photo-2417726.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <EventCard
              id="13"
              title="Melody Mania"
              date="Wednesday, June 24"
              time="07:00 PM"
              location="New York, NY"
              price="From $100"
              image="https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <EventCard
              id="14"
              title="Rockin' the Stage"
              date="Monday, March 14"
              time="04:00 PM"
              location="New York, NY"
              price="From $120.00"
              image="https://images.pexels.com/photos/1928131/pexels-photo-1928131.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-violet-950/20 to-black">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Experience the best events in your city
            </h2>
            <p className="mx-auto max-w-[600px] text-white/70 md:text-xl/relaxed">
              Join thousands of event-goers and discover new experiences
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1 bg-muted text-white border-violet-900/20 focus-visible:ring-violet-500"
              />
              <Button type="submit" className="bg-violet-600 hover:bg-violet-700 text-white">
                Sign Up
              </Button>
            </form>
            <p className="text-xs text-white/70">
              Sign up to get notified when we launch new events.{" "}
              <Link href="/terms" className="underline underline-offset-2 hover:text-violet-500">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

