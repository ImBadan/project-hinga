"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f5ef]">

      {/* BACKGROUND IMAGE */}
      <img
        src="/hero.png"
        alt="Project Hinga"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/5" />

      {/* CONTENT */}
      <div className="relative z-20 min-h-screen flex flex-col">

        {/* NAVBAR */}
        <nav className="
        flex
        items-center
        justify-between
        px-6
        md:px-12
        py-6
      ">

        {/* LOGO */}
        <img
          src="/logo.png"
          alt="Project Hinga"
          className="w-28 md:w-40"
        />

        {/* DESKTOP NAV */}
        <div className="
          hidden md:flex
          gap-10
          text-[#1f3261]
          font-medium
        ">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Mental Health</a>
          <a href="#">Resources</a>
        </div>

        {/* DESKTOP BUTTON */}
        <Link
          href="/community"
          className="
            hidden md:block
            bg-[#1f3261]
            text-white
            px-5
            py-3
            rounded-full
            font-semibold
            hover:opacity-90
            transition
          "
        >
          Join The Movement
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-[#1f3261]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

      </nav>
        {/* MOBILE MENU */}
        {menuOpen && (
          <div>
            ...
          </div>
        )}
        {/* HERO CONTENT */}
        <section className="
          flex-1
          flex
          items-center
          px-6
          md:px-12
          lg:px-20
        ">

          <div className="max-w-2xl">

            <h1 className="
              text-[#1f3261]
              font-bold
              leading-tight

              text-5xl
              md:text-7xl
            ">
              Speak Freely.
              <br />
              Heal Deeply.
            </h1>

            <h2 className="
              text-[#e7a07a]
              italic
              mt-4

              text-4xl
              md:text-6xl
            ">
              Be You.
            </h2>

            <p className="
              mt-8
              text-[#24345A]
              text-lg
              md:text-xl
              leading-relaxed
              max-w-xl
            ">
              Project HINGA is a safe space for every voice.
              We believe freedom of expression is a powerful
              step towards better mental health for all.
            </p>

            <Link
              href="/community"
              className="
                inline-block
                mt-10
                bg-[#1f3261]
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Share Your Voice
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}