import Link from "next/link"
import { cn } from "@/lib/utils"

export default function SectionHeader({ title, description, viewMoreHref, className }) {
  return (
    <div className={cn("flex flex-col space-y-1 mb-6", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        {viewMoreHref && (
          <Link href={viewMoreHref} className="text-sm font-medium text-violet-500 hover:text-violet-400">
            View more
          </Link>
        )}
      </div>
      {description && <p className="text-sm text-white/70">{description}</p>}
    </div>
  )
}

