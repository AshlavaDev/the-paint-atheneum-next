// TODO: App list: data caching, search functionality
export default function Home() {
  return (
    <section className="flex-grow flex flex-col items-center px-3">
      <h2 className="font-serif text-3xl md:text-6xl text-darkblue text-center py-5">The Paint Library</h2>
      <p className="font-sans text-lg md:text-xl text-darkblue text-center">
        Please feel free to look around. If you would like to support this site, please donate on this <a
          href="https://ko-fi.com/ashleymorganwbdv"
          target="_blank"
          className="text-deepred hover:text-black">Kofi.</a>
      </p>
      <h3 className="font-sans text-xl md:text-2xl text-darkblue text-center py-5 underline">
        Roadmap for the site
      </h3>
      <ul className="py-2 lg:py-4">
        <li className="text-lg py-1 text-darkblue line-through">Add Vallejo Game Colour</li>
        <li className="text-lg py-1 text-darkblue">Add Vallejo Model Air</li>
        <li className="text-lg py-1 text-darkblue">Add Vallejo Game Air</li>
        <li className="text-lg py-1 text-darkblue">Add Vallejo&apos;s new Xpress Colour</li>
        <li className="text-lg py-1 text-darkblue">Add Army Painter Speedpaint</li>
        <li className="text-lg py-1 text-darkblue">Add Army Painter Warpaint</li>
        <li className="text-lg py-1 text-darkblue">Add Army Painter Air paint and sprays</li>
        <li className="text-lg py-1 text-darkblue">Add Army Painter Fanatic</li>
        <li className="text-lg py-1 text-darkblue">
          Create relational databases to match colour of different ranges and brands
        </li>
        <li className="text-lg py-1 text-darkblue">Add search functionality</li>
        <li className="text-lg py-1 text-darkblue">Add Scale 75</li>
        <li className="text-lg py-1 text-darkblue">
          Add Greenstuff World, Two Thin Coats, and any other smaller brands
        </li>
      </ul>
    </section>
  );
}
