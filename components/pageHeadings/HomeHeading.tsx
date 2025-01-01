import Link from "next/link";

export default function HomeHeading (){
  return (
    <section className="bg-waterhero bg-no-repeat bg-center bg-cover text-darkblue opacity-90">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center bg-golden py-8 px-5 rounded-3xl">
          <h1 className="text-4xl font-display sm:text-6xl">The Paint Atheneum</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg sm:text-2xl sm:leading-relaxed font-serif">
            A Library of Paints for Miniatures
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/paintcolours"
              className="block w-full rounded border border-darkblue bg-darkblue px-12 py-3 font-sans text-offwhite hover:bg-transparent hover:text-darkblue focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            >
              Find Colours
            </Link>

            <Link
              href="/companies"
              className="block w-full rounded border border-darkblue px-12 py-3 font-sans text-darkblue hover:bg-offwhite focus:outline-none focus:ring active:bg-darkblue sm:w-auto"
            >
              Find Companies
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}