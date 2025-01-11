'use client'

import Link from "next/link"
import { useEffect } from 'react'

import { setHeadingData } from "@/lib/headings/headingSlice"
import { useAppDispatch } from "@/lib/hooks"

export default function Companies () {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // Set dynamic heading data for this page
    dispatch(
      setHeadingData({
        heading: 'Companies',
        subHeading: 'A list of companies that produce paints for miniatures'
      })
    )
  }, [dispatch])

  return (
    <section className="flex-grow px-3">
      <div className="flex gap-4 justify-center py-5">
        <Link
          href="/companies/gamesworkshop"
          className="font-sans text-xl md:text-3xl py-2 px-3 border border-darkblue rounded
        bg-darkblue text-offwhite hover:bg-offwhite hover:text-darkblue"      >Games Workshop</Link>
        <Link
          href="/companies/vallejo"
          className="font-sans text-xl md:text-3xl py-2 px-3 border border-darkblue rounded
        bg-darkblue text-offwhite hover:bg-offwhite hover:text-darkblue"      >Vallejo</Link>
      </div>
    </section>
  )
}