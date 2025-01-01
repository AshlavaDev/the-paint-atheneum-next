import { useHeadingData } from "@/context/HeadingContext"

export default function OtherHeading (){
  const { headingData } = useHeadingData()

  return (
    <div className='text-center bg-darkhero bg-center text-offwhite border-b-2 border-darkblue py-20 px-6 lg:top-0' >
      <h1 className="text-6xl lg:text-8xl font-bold mt-0 mb-6 font-display">{headingData.heading}</h1>
      <p className="text-xl md:text-3xl font-serif">{headingData.subHeading}</p>
    </div>
  )
}