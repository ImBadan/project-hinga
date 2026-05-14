import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#f8f5ef] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/hero.png"
        alt="Project Hinga"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* NAVIGATION */}
      {/* NAVIGATION */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-6">

      {/* CENTER MENU */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-6 md:gap-10 text-sm md:text-base font-medium text-[#24345A]">

        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Mental Health</a>
        <a href="#">Resources</a>

      </div>

      {/* RIGHT BUTTON */}
      <div className="ml-auto">

        <Link
          href="/community"
          className="bg-[#1f3261] text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:opacity-90 transition text-sm md:text-base"
        >
          Join The Movement
        </Link>

      </div>

      </nav>

      {/* SHARE BUTTON */}
      <div className="absolute left-[6%] bottom-[18%]">

      <Link
        href="/community"
        className="
          absolute
          bottom-[30%]
          left-[10%]

          bg-[#1f3261]
          text-white

          px-8 py-4
          rounded-full
          font-semibold

          hover:opacity-90
          transition

          whitespace-nowrap
          min-w-[220px]
          text-center
        "
      >
        Share Your Voice
      </Link>

      </div>

    </main>
  );
}