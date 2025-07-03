"use client"

import Link from "next/link"
import { Button } from "../../components/ui/button"
import { ArrowRight } from "lucide-react"
import { HeaderBase } from "./header-base"
import { getStars } from "../lib/fetchGhStars"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Header() {
  const [star, setStar] = useState<string>("")

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const data = await getStars()
        setStar(data)
      } catch (err) {
        console.error("Failed to fetch GitHub stars", err)
      }
    }

    fetchStars()
  }, [])

  const leftContent = (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/logo.svg" alt="Logo" width={32} height={32} />
      <span className="text-xl font-medium hidden md:block">Viva</span>
    </Link>
  )

  const rightContent = (
    <nav className="flex items-center gap-3">
      <Link href="/contributors">
        <Button variant="text" className="text-sm p-0">
          Contributors
        </Button>
      </Link>
      <Link href="https://appt.link/meet-with-viiva-tech-OwUwCKG2" target="_blank">
        <Button size="sm" className="text-sm ml-4">
          Book a demo
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </nav>
  )

  return (
    <div className="mx-4 md:mx-0">
      <HeaderBase
        className="bg-accent border rounded-2xl max-w-3xl mx-auto mt-4 pl-4 pr-[14px]"
        leftContent={leftContent}
        rightContent={rightContent}
      />
    </div>
  )
}

