'use client'

import { usePathname } from "next/navigation"

import "./globals.css"
import TopNav from "@/components/navigation/TopNav"
import HomeHeading from "@/components/pageHeadings/HomeHeading"
import OtherHeading from "@/components/pageHeadings/OtherHeading"
import Footer from "@/components/navigation/Footer"
import SideNav from "@/components/navigation/SideNav"
import { HeadingProvider } from "@/context/HeadingContext"

//TODO: fix metadata issue
const metadata = {
  title: "The Paint Atheneum",
  description: "One place for all your mini paints",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  //Gets router to check if home page or not
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const title = metadata.title ?? ""
  const description = metadata.description ?? ""

  //TODO: fix issue where navigating back to home page results in home heading component being the focus
  return (
    <html lang="en">
      <head>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
      </head>
      <body
        className={`antialiased`}
      >
        <div className="bg-offwhite flex flex-col min-h-screen">
          <TopNav />
          <main className="relative flex-grow">
              {isHomePage ? 
                <>
                <HomeHeading />
                <div className="flex">
                  <SideNav />
                  {children}
                </div>
                </>
              : <HeadingProvider>
                  <OtherHeading />
                  <div className="flex">
                    <SideNav />
                    {children}
                  </div>
                </HeadingProvider>
              }
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
