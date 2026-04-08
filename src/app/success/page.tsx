"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Success() {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black w-full h-screen relative overflow-hidden flex items-center justify-center">
      <div className="text-center border border-white/10 p-12 max-w-md mx-4">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-[0.2em] uppercase">
          Success
        </h1>
        <p className="text-white/50 font-light mt-4 text-sm tracking-wider">
          Your form has been submitted successfully.
        </p>
        <p className="text-white/30 font-light mt-6 text-xs tracking-wider">
          Redirecting in {seconds} seconds...
        </p>
        <Link
          href="/"
          className="inline-block mt-6 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors border-b border-white/20 pb-1"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
