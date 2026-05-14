import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#fdf2e2]"> 

      <img
        src="/hero.png"
        alt="Project Hinga"
        className="absolute inset-0 w-screen h-screen object-contain bg-[#f8f5ef] pointer-events-none"
      />

        {/* TOP NAVIGATION */}
        <div className="absolute top-8 left-0 w-full flex items-center justify-center gap-10 text-[#1f3261] font-medium z-50">

          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Mental Health</a>
          <a href="#">Resources</a>

        </div>

        {/* JOIN BUTTON */}
        <Link
          href="/community"
          className="absolute top-6 right-40 bg-[#1f3261] text-white px-8 py-4 rounded-full font-semibold z-50 hover:opacity-90 transition"
        >
          Join The Movement
        </Link>

        {/* SHARE YOUR VOICE BUTTON */}
        <Link
          href="/community"
          className="absolute bottom-52 left-60 bg-[#1f3261] text-white px-10 py-5 rounded-full text-xl font-semibold z-50 hover:opacity-90 transition"
        >
          Share Your Voice
        </Link>
    </main>
  );
}