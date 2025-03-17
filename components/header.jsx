"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, Calendar, Ticket, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-violet-900/20 bg-black/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              IP<span className="text-violet-500">DB</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 ml-6">
            <Link href="/" className="text-sm font-medium text-white/70 transition-colors hover:text-violet-500">
              Explore
            </Link>
            <Link
              href="/upcoming"
              className="text-sm font-medium text-white/70 transition-colors hover:text-violet-500"
            >
              Upcoming Events
            </Link>
            <Link href="/tickets" className="text-sm font-medium text-white/70 transition-colors hover:text-violet-500">
              My Tickets
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className={cn("items-center gap-4 transition-all duration-300", searchOpen ? "flex" : "hidden md:flex")}>
            {searchOpen && (
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSearchOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>
            )}
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search events..."
                className="w-[200px] md:w-[250px] pl-8 bg-muted text-white rounded-full border-violet-900/20 focus-visible:ring-violet-500"
              />
            </div>
          </div>

          <div className={cn("items-center gap-4", searchOpen ? "hidden" : "flex")}>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-violet-900/20">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-violet-600 hover:bg-violet-700 text-white">Sign up</Button>
              </Link>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-violet-900/20 bg-black">
          <div className="flex flex-col space-y-3 p-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-violet-500"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar className="h-4 w-4" />
              Explore
            </Link>
            <Link
              href="/upcoming"
              className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-violet-500"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar className="h-4 w-4" />
              Upcoming Events
            </Link>
            <Link
              href="/tickets"
              className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-violet-500"
              onClick={() => setIsMenuOpen(false)}
            >
              <Ticket className="h-4 w-4" />
              My Tickets
            </Link>
            <div className="pt-2 flex flex-col space-y-3">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-start text-white/70 border-violet-900/20">
                  <User className="mr-2 h-4 w-4" />
                  Log in
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full justify-start bg-violet-600 hover:bg-violet-700">
                  <User className="mr-2 h-4 w-4" />
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

