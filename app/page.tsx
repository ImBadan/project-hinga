"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-[#1f3261]">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6">

        <h1 className="text-4xl font-bold tracking-wide">
          PROJECT HINGA
        </h1>

        <div className="hidden md:flex gap-10 text-sm font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Mental Health</a>
          <a href="#">Resources</a>
        </div>

        <Link
          href="/community"
          className="bg-[#1f3261] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Join The Movement
        </Link>

      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-7xl font-bold leading-tight mb-6">
              Speak Freely.
              <br />
              Heal Deeply.
            </h2>

            <p className="text-2xl text-[#44557f] leading-relaxed mb-10 max-w-xl">
              Project HINGA is a safe space for every voice.
              Express yourself anonymously and receive support
              from a caring community.
            </p>

            <Link
              href="/community"
              className="inline-block bg-[#1f3261] text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition"
            >
              Share Your Voice
            </Link>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">

            <div
             className="w-full h-[700px] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/hero.png')",
              }}
            />

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-8 pb-20">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white/70 rounded-3xl p-6 shadow-sm">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">Speak</h3>
            <p className="text-[#44557f]">
              Share your thoughts without fear.
            </p>
          </div>

          <div className="bg-white/70 rounded-3xl p-6 shadow-sm">
            <div className="text-4xl mb-4">💛</div>
            <h3 className="text-xl font-bold mb-2">Heal</h3>
            <p className="text-[#44557f]">
              Expression is the first step to healing.
            </p>
          </div>

          <div className="bg-white/70 rounded-3xl p-6 shadow-sm">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-2">Connect</h3>
            <p className="text-[#44557f]">
              You are not alone. We’re in this together.
            </p>
          </div>

          <div className="bg-white/70 rounded-3xl p-6 shadow-sm">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-bold mb-2">Empower</h3>
            <p className="text-[#44557f]">
              Your story can inspire others.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}