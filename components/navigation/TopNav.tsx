import Link from "next/link"
import { Icon } from "@iconify/react";

export default function TopNav (){
  return (
    <header className="flex items-center justify-around py-4 md:py-8 px-4 text-darkblue border-b-4 border-darkblue font-serif fixed top-0 w-full z-20 bg-offwhite lg:static">
      <Link href="/" className="hidden xl:block font-display text-4xl">The Paint Atheneum</Link>
      <Link href="/" className="xl:hidden text-2xl flex items-center gap-2">
        <span className="flex">
          <Icon icon="material-symbols:book-5-outline" />
          <Icon icon="mdi:paint-outline" />
        </span>
        The PA
      </Link>
      <nav>
        <div className="space-x-8 lg:flex hidden">
          {/* Desktop Section*/}
          <Link className="top-nav-link" href="/">
            Home
          </Link>
          <Link className="top-nav-link" href="/about">
            About
          </Link>
          <Link
            className="top-nav-link"
            href="/companies"
          >
            Companies
          </Link>
          <Link
            className="top-nav-link"
            href="/paintcolours"
          >
            Colours
          </Link>
          <Link
            className="top-nav-link"
            href="/painttypes"
          >
            Types
          </Link>
          <Link className="top-nav-link" href="/news">
            News
          </Link>
          <Link className="top-nav-link" href="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}