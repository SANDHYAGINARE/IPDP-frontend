import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Calendar, Search, Edit } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function TicketsPage() {
  // In a real app, you would fetch user data and tickets from an API
  const userData = {
    name: "Amanda Smith",
    email: "Amanda@email.com",
    purchases: 24,
    following: 4,
    likes: 10,
  }

  const tickets = [
    {
      id: "1",
      title: "Rock Revolt: Power and Passion Unite",
      date: "Saturday, February 20",
      time: "08:00 PM",
      location: "New York, NY",
      tickets: 2,
      total: "$162",
    },
    {
      id: "2",
      title: "Melody Mania",
      date: "Wednesday, June 7",
      time: "07:00 PM",
      location: "New York, NY",
      tickets: 1,
      total: "Free ticket",
    },
    {
      id: "3",
      title: "Painting Odyssey: Brushstrokes & Beyond",
      date: "Tuesday, June 24",
      time: "06:00 PM",
      location: "2678 Forest Avenue, San Jose, CA 95111",
      tickets: 1,
      total: "$20",
    },
    {
      id: "4",
      title: "Metropolis Marathon",
      date: "Tuesday, June 3",
      time: "06:00 AM",
      location: "Atlanta",
      tickets: 1,
      total: "$10",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container px-4 py-8 md:px-6">
        <h1 className="text-2xl font-bold mb-6">My Tickets</h1>

        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <div className="p-6 rounded-lg border border-violet-900/20 bg-card space-y-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-violet-900/20 flex items-center justify-center mb-4">
                    <User className="h-10 w-10 text-violet-500" />
                  </div>
                  <h2 className="text-xl font-bold">{userData.name}</h2>
                  <p className="text-white/70">{userData.email}</p>
                </div>
                <div className="flex justify-center gap-4 text-center">
                  <div>
                    <p className="font-bold">{userData.purchases}</p>
                    <p className="text-xs text-white/70">Purchase</p>
                  </div>
                  <div>
                    <p className="font-bold">{userData.following}</p>
                    <p className="text-xs text-white/70">Following</p>
                  </div>
                  <div>
                    <p className="font-bold">{userData.likes}</p>
                    <p className="text-xs text-white/70">likes</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-violet-900/20 hover:bg-violet-900/20 hover:text-white"
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Edit profile
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between">
              <Tabs defaultValue="upcoming" className="w-full">
                <TabsList className="bg-muted border border-violet-900/20">
                  <TabsTrigger
                    value="upcoming"
                    className="data-[state=active]:bg-violet-600 data-[state=active]:text-white"
                  >
                    Upcoming
                  </TabsTrigger>
                  <TabsTrigger
                    value="used"
                    className="data-[state=active]:bg-violet-600 data-[state=active]:text-white"
                  >
                    Used
                  </TabsTrigger>
                </TabsList>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-white/70">{tickets.length} events</p>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search"
                      className="pl-9 w-[200px] bg-muted text-white border-violet-900/20 focus-visible:ring-violet-500"
                    />
                  </div>
                </div>
                <TabsContent value="upcoming" className="mt-4 space-y-4">
                  {tickets.map((ticket) => (
                    <Link key={ticket.id} href={`/ticket/${ticket.id}`}>
                      <div className="p-4 rounded-lg border border-violet-900/20 bg-card hover:border-violet-500/50 transition-all hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                        <div className="flex items-center gap-4">
                          <div className="hidden sm:block flex-shrink-0 w-16 h-16 rounded-lg bg-violet-900/20 flex items-center justify-center">
                            <Calendar className="h-8 w-8 text-violet-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <div className="text-xs text-white/70">
                                {ticket.date.split(", ")[0].toUpperCase()} | {ticket.time}
                              </div>
                              <div className="text-xs font-medium text-violet-500">
                                {ticket.tickets} {ticket.tickets > 1 ? "Tickets" : "Ticket"} total {ticket.total}
                              </div>
                            </div>
                            <h3 className="font-bold mt-1 truncate">{ticket.title}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1">
                              <div className="text-sm text-white/70">
                                {ticket.date} | {ticket.time}
                              </div>
                              <div className="text-sm text-white/70 truncate">{ticket.location}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </TabsContent>
                <TabsContent value="used" className="mt-4">
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-violet-900/20 flex items-center justify-center mb-4">
                      <Calendar className="h-8 w-8 text-violet-500" />
                    </div>
                    <h3 className="text-xl font-bold">No used tickets</h3>
                    <p className="text-white/70 mt-2 max-w-md">
                      You don't have any used tickets yet. After attending events, your tickets will appear here.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

