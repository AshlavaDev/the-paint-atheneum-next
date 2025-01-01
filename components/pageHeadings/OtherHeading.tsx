import { useEffect, useState } from "react";

interface HeadingData {
  heading: string;
  subHeading: string;
}

const headingData: HeadingData = {
  heading: "Test Heading",
  subHeading: "Test Subheading",
};

export default function OtherHeading (){
  return (
    <div className='text-center bg-darkhero bg-center text-offwhite border-b-2 border-darkblue py-20 px-6 lg:top-0' style="top: {topValuePx};">
      <h1 className="text-6xl lg:text-8xl font-bold mt-0 mb-6 font-display">{headingData.heading}</h1>
      <p className="text-xl md:text-3xl font-serif">{headingData.subHeading}</p>
    </div>
  )
}