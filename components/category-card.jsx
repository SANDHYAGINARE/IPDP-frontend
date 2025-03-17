import Link from "next/link"
import { cn } from "@/lib/utils"

export default function CategoryCard({ icon: Icon, title, href, className }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center justify-center p-4 rounded-lg bg-card border border-violet-900/20 hover:border-violet-500/50 transition-all hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]",
        className,
      )}
    >
      <div className="h-12 w-12 rounded-full bg-violet-900/20 flex items-center justify-center mb-3">
        <Icon className="h-6 w-6 text-violet-500" />
      </div>
      <span className="text-sm font-medium">{title}</span>
    </Link>
  )
}

