import Link from "next/link"
import { useState } from "react"
import { Icon } from "@iconify/react"

export default function TopNav (){
  //Mobile menu boolean
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
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
      <button className="lg:hidden h-8 w-8" onClick={() => setIsOpen(!isOpen)}>
        <Icon icon="material-symbols:menu-rounded" className="w-full h-full" />
      </button>
    </header>
    {isOpen && 
      <nav
        className="flex flex-col text-darkblue font-serif z-20 w-full fixed bg-offwhite border-b-2 border-darkblue"
      >
        {/* Mobile Section */}
        <Link
          className="top-nav-link"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          className="top-nav-link"
          href="/about"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          className="top-nav-link"
          href="/companies"
          onClick={() => setIsOpen(false)}
        >
          Companies
        </Link>
        <Link
          className="top-nav-link"
          href="/paintcolours"
          onClick={() => setIsOpen(false)}
        >
          Colours
        </Link>
        <Link
          className="top-nav-link"
          href="/painttypes"
          onClick={() => setIsOpen(false)}
        >
          Types
        </Link>
        <Link
          className="top-nav-link"
          href="/news"
          onClick={() => setIsOpen(false)}
        >
          News
        </Link>
        <Link
          className="top-nav-link"
          href="/contact"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </nav>
    }
    </>
  )
}