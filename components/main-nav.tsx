"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
      <Link href="/" className="text-xl font-semibold">
        Martha White
      </Link>
      <div className="flex gap-4 sm:gap-6">
        <Link
          href="/"
          className={`text-sm ${pathname === "/" ? "font-medium text-primary" : "text-muted-foreground"}`}
        >
          Home
        </Link>
        <Link
          href="/research"
          className={`text-sm ${pathname === "/research" ? "font-medium text-primary" : "text-muted-foreground"}`}
        >
          Research
        </Link>
        <Link
          href="/teaching"
          className={`text-sm ${pathname === "/teaching" ? "font-medium text-primary" : "text-muted-foreground"}`}
        >
          Teaching
        </Link>
        <Link
          href="/code"
          className={`text-sm ${pathname === "/code" ? "font-medium text-primary" : "text-muted-foreground"}`}
        >
          Code
        </Link>
        <Link
          href="/calendar"
          className={`text-sm ${pathname === "/calendar" ? "font-medium text-primary" : "text-muted-foreground"}`}
        >
          Calendar
        </Link>
      </div>
    </nav>
  )
}