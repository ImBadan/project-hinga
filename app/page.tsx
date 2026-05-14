import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-[#f8f5ef]">

      {/* BACKGROUND IMAGE */}
      <img
        src="/hero.png"
        alt="Project Hinga"
        className="
          absolute inset-0
          w-full h-full
          object-contain
          object-top
          bg-[#f8f5ef]
          pointer-events-none
        "
      />

      {/* ========================= */}
      {/* MOBILE NAVBAR */}
      {/* ========================= */}

      <div className="flex md:hidden justify-between items-center px-4 py-4 relative z-20">

        <img
          src="/logo.png"
          alt="Project Hinga"
          className="w-24"
        />

        <Link
          href="/community"
          className="
            bg-[#1f3261]
            text-white
            px-4 py-2
            rounded-full
            text-sm
            font-semibold
          "
        >
          Join
        </Link>

      </div>

      {/* ========================= */}
      {/* DESKTOP NAVBAR */}
      {/* ========================= */}

      <div
        className="
          hidden md:flex
          absolute
          top-[3%]
          left-1/2
          -translate-x-1/2
          gap-10
          text-[#1f3261]
          font-medium
          z-20
        "
      >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Mental Health</a>
        <a href="#">Resources</a>
      </div>

      {/* DESKTOP JOIN BUTTON */}

      <Link
        href="/community"
        className="
          hidden md:flex
          absolute
          top-[2%]
          right-[3%]
          z-20

          bg-[#1f3261]
          text-white
          px-8 py-4
          rounded-full
          font-semibold
          hover:opacity-90
          transition
        "
      >
        Join The Movement
      </Link>

      {/* SHARE YOUR VOICE BUTTON */}

      <Link
        href="/community"
        className="
          absolute
          z-20

          bottom-[16%]
          left-[8%]

          md:bottom-[13%]
          md:left-[5%]

          bg-[#1f3261]
          text-white

          px-6 py-3
          md:px-8 md:py-4

          rounded-full
          font-semibold

          text-sm
          md:text-lg

          hover:opacity-90
          transition
        "
      >
        Share Your Voice
      </Link>

    </main>
  );
}