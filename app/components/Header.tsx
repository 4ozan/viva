"use client"

import Link from "next/link"
import { Button } from "../../components/ui/button"
import { ArrowRight } from "lucide-react"
import { HeaderBase } from "./header-base"

export function Header() {
  const leftContent = (
    <Link href="/" className="flex items-center gap-3">
      {/* <Image src="/logo.svg" alt="Logo" width={32} height={32} /> */}
      <span className="text-xl font-medium hidden md:block text-white">Viva</span>
    </Link>
  )

  const rightContent = (
    <nav className="flex items-center gap-3">
      <Link href="#">
        <Button variant="ghost" className="text-sm px-4 py-2 text-white rounded-full hover:bg-white hover:text-black transition-colors duration-200">
          Projects
        </Button>
      </Link>
      <Link href="https://appt.link/meet-with-viiva-tech-OwUwCKG2" target="_blank">
        <Button size="sm" className="text-sm ml-4 bg-white text-black border border-white hover:bg-gray-100 group">
          Book a demo
          <ArrowRight className="h-4 w-4 text-black transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </Link>
    </nav>
  )

  return (
    <div className="mx-4 md:mx-0 sticky top-4 z-50">
      <HeaderBase
        className="bg-black/80 shadow-lg border rounded-2xl max-w-3xl mx-auto mt-4 pl-4 pr-[14px]"
        leftContent={leftContent}
        rightContent={rightContent}
      />
    </div>
  )
}

