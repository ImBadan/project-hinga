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
          <a href="#">About Us</a>
          <a href="#">Our Mission</a>
          <a href="#">Mental Health</a>
          <a href="#">Get Involved</a>
          <a href="#">Resources</a>
          <a href="#">Contact Us</a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <a
          href="/community"
          className="
            ml-12
            bg-[#24345A]
            text-white
            px-2
            py-2
            rounded-full
            font-semibold
            hover:opacity-90
            transition
          "
        >
          Share Your Voice
        </a>
        <button
          className="md:hidden text-[#1f3261]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        
      </nav>
        {/* MOBILE MENU */}
        {menuOpen && (

        <div
          className="
            fixed
            top-0
            right-0
            h-full
            w-[260px]

            bg-white/80
            backdrop-blur-xl

            shadow-2xl

            z-50

            flex
            flex-col

            p-6

            animate-slideIn
          "
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setMenuOpen(false)}
            className="
              self-end
              text-[#24345A]
              text-4xl
              mb-8
            "
          >
            ×
          </button>

          {/* MENU LINKS */}
          <div className="
            flex
            flex-col
            gap-6

            text-[#24345A]
            font-semibold
            text-xl
          ">

            <a href="/">Home</a>

            <a href="#">About Us</a>

            <a href="#">Our Mission</a>

            <a href="#">Mental Health</a>

            <a href="#">Get Involved</a>

            <a href="#">Resources</a>

            <a href="#">Contact Us</a>

          </div>

        </div>

        )}
        {/* HERO CONTENT */}
        <section className="
            flex-1
            flex
            items-start
            px-6
            md:px-12
            lg:px-20
            pt-10
            md:pt-20
          ">

          <div className="max-w-[250px] md:max-w-xl">

            <h1 className="
              text-[#1f3261]
              font-bold
              leading-tight

              text-4xl
              md:text-6xl
            ">
              Speak Freely.
              <br />
              Heal Deeply.
            </h1>

            <h2 className="
              text-[#e7a07a]
              italic
              mt-4

              text-3xl
              md:text-5xl
            ">
              Be You.
            </h2>

            <p className="
              mt-12
              text-[#24345A]
              text-lg
              md:text-xl
              leading-relaxed
              max-w-xl
            ">
              Project HINGA is a safe space 
              for every voice. We believe 
              freedom of expression is a 
              powerful step towards better
               mental health for all.
            </p>

          </div>

        </section>

      </div>

    </main>
  );
}