"use client"

import Link from "next/link"
import { Button } from "../../components/ui/button"
import { ArrowRight } from "lucide-react"
import { HeaderBase } from "./header-base"

export function Header() {
  const leftContent = (
    <Link href="/" className="flex items-center gap-3 text-white">
      {/* <Image src="/logo.svg" alt="Logo" width={32} height={32} /> */}
      <span className="text-xl font-medium hidden md:block">Viva</span>
    </Link>
  )

  const rightContent = (
    <nav className="flex items-center gap-3 text-white">
      <Link href="#">
        <Button variant="ghost" className="text-sm p-0 text-white">
          Projects
        </Button>
      </Link>
      <Link href="https://appt.link/meet-with-viiva-tech-OwUwCKG2" target="_blank">
        <Button size="sm" className="text-sm ml-4 text-white border border-white">
          Book a demo
          <ArrowRight className="h-4 w-4 text-white" />
        </Button>
      </Link>
    </nav>
  )

  return (
    <div className="mx-4 md:mx-0">
      <HeaderBase
        className="bg-black border rounded-2xl max-w-3xl mx-auto mt-4 pl-4 pr-[14px]"
        leftContent={leftContent}
        rightContent={rightContent}
      />
    </div>
  )
}

