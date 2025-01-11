'use client'

import { useEffect } from 'react'
import Image from 'next/image'

import { setHeadingData } from "@/lib/headings/headingSlice"
import { useAppDispatch } from '@/lib/hooks'

export default function GamesWorkshop () {
 const dispatch = useAppDispatch()

  useEffect(() => {
    // Set dynamic heading data for this page
    dispatch(
      setHeadingData({
        heading: 'Citadel - Games Workshop',
        subHeading: 'The Biggest Company in Miniatures'
      })
    )
  }, [dispatch])

  const pageData = {
		name: 'Citadel - Games Workshop',
		brand: 'citadel',
		ranges: ['Air', 'Base', 'Contrast', 'Dry', 'Layer', 'Shade', 'Spray']
	};

  return (
    <section class="flex-grow flex flex-col items-center">
      <h2 class="font-serif text-3xl md:text-6xl text-darkblue text-center py-3">Games Workshop</h2>
      <Image src="/assets/logos/gwlogo.png" width="150" height="85" alt="Games Workshop Logo" />
      <ChooseRange brand={pageData.brand} ranges={pageData.ranges} />
      <div class="w-[80%]">
        {$paintByRange.length > 0 ?
          <PaintList paints={$paintByRange} isCompanyPage={true} />
        :
          <RangeSelectText />
        }
      </div>
    </section>
  )
}