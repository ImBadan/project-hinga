"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "hingaadmin123") {
      localStorage.setItem("hinga_admin", "true");
      router.push("/community");
    } else {
      alert("Wrong password");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f8f5ef] px-6">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-[#1f3261] text-center mb-8">
          Admin Login
        </h1>

        <input
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
            w-full
            p-4
            rounded-2xl
            border
            outline-none
            mb-6
          "
        />

        <button
          onClick={handleLogin}
          className="
            w-full
            bg-[#1f3261]
            text-white
            py-4
            rounded-2xl
            font-semibold
          "
        >
          Login
        </button>

      </div>

    </main>
  );
}