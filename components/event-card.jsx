import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function EventCard({
  id,
  title,
  date,
  time,
  location,
  price,
  image,
  isFeatured = false,
  badge,
  className,
}) {
  return (
    <div className={cn("event-card group", className)}>
      <Link href={`/events/${id}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="event-card-image object-cover" />
          {badge && <div className="event-badge">{badge}</div>}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 left-2 h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70"
          >
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to favorites</span>
          </Button>
        </div>
        <div className="bg-card p-4 rounded-b-lg border-t-0 border border-violet-900/20">
          <div className="space-y-2">
            <p className="text-xs text-white/70">
              {date} | {time}
            </p>
            <h3 className="font-bold line-clamp-1 group-hover:text-violet-500 transition-colors">{title}</h3>
            <p className="text-sm text-white/70 line-clamp-1">{location}</p>
            <p className="text-sm font-medium text-violet-500">{price}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

