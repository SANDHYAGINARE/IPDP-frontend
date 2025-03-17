import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-violet-900/20 bg-black py-8">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              IP<span className="text-violet-500">DB</span>
            </span>
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium text-white">Resources</h3>
          <nav className="flex flex-col gap-2">
            <Link href="#" className="text-sm text-white/70 hover:text-violet-500">
              Help Center
            </Link>
            <Link href="#" className="text-sm text-white/70 hover:text-violet-500">
              Partners
            </Link>
            <Link href="#" className="text-sm text-white/70 hover:text-violet-500">
              Taxes
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium text-white">Company</h3>
          <nav className="flex flex-col gap-2">
            <Link href="#" className="text-sm text-white/70 hover:text-violet-500">
              About
            </Link>
            <Link href="#" className="text-sm text-white/70 hover:text-violet-500">
              Join us
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium text-white">Stay in the loop</h3>
          <p className="text-sm text-white/70">For product announcements and exclusive insights</p>
          <div className="flex gap-2">
            <Input
              placeholder="Input your email"
              className="bg-muted text-white border-violet-900/20 focus-visible:ring-violet-500"
            />
            <Button className="bg-violet-600 hover:bg-violet-700 text-white">Subscribe</Button>
          </div>
          <div className="flex gap-4 pt-2">
            <Link href="#" className="text-white/70 hover:text-violet-500">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-white/70 hover:text-violet-500">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-white/70 hover:text-violet-500">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-2 border-t border-violet-900/20 pt-4 mt-8 px-4 md:px-6">
        <p className="text-xs text-white/70">
          &copy; {new Date().getFullYear()} IPDB, Inc. Privacy Terms & Conditions
        </p>
      </div>
    </footer>
  )
}

