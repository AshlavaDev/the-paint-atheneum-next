import Link from "next/link"

export default function SideNav () {
  return (
    <div className="max-w-1/5 h-screen sticky top-0 border-r-4 border-darkblue hidden md:block">
      <div className="px-2 py-6 flex flex-col justify-between text-darkblue font-sans">
        <span className="block w-32 h-10 rounded-lg" />
        <h4 className="text-lg md:text-xl">Menu</h4>
        <nav className="flex flex-col mt-6 space-y-1">
          <Link href="/" className="side-nav-link">Home</Link>
          <Link href="/about" className="side-nav-link"
            >About</Link>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex items-center rounded-md cursor-pointer hover:bg-darkblue hover:text-offwhite"
            >
              <span className="ml-2 text-sm md:text-lg py-2">Paints</span>
            </summary>
            <ul className="my-1 ml-6 flex flex-col gap-1">
              <li>
                <Link href="/companies" className="text-sm hover:bg-darkblue hover:text-offwhite">By Company</Link>
              </li>
              <li>
                <Link href="/paintcolours" className="text-sm hover:bg-darkblue hover:text-offwhite">By Colour</Link>
              </li>
              <li>
                <Link href="/painttypes" className="text-sm hover:bg-darkblue hover:text-offwhite">By Type</Link>
              </li>
            </ul>
          </details>
          <Link href="/news" className="side-nav-link">News</Link>
          <Link href="/contact" className="side-nav-link">Contact</Link>
        </nav>
      </div>
    </div>
  )
}