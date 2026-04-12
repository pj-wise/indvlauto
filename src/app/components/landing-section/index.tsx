"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const LandingSection = () => {
  return (
    <div
      id="hero"
      className="min-h-screen flex items-center justify-center w-full bg-black relative layoutPadding overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/work/IMG_0140.jpeg')" }}
      />
      <div className="absolute inset-0 z-[1] bg-black/70" />

      <div className="z-[2] text-center pt-20 max-w-screen-lg">
        <motion.div
          className="mb-6"
          variants={{
            hidden: { opacity: 0, y: -30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <span className="text-xs sm:text-sm tracking-[0.5em] uppercase text-white/40 font-light">
            Orlando&apos;s Premier Auto Restyling Studio
          </span>
        </motion.div>

        <motion.h1
          className="font-bold text-6xl sm:text-8xl lg:text-9xl tracking-[0.15em] uppercase"
          variants={{
            hidden: { opacity: 0, y: -50 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <Image
            src="/img/logo.png"
            alt="INDVL Auto Logo"
            width={800}
            height={800}
            priority
            className="w-48 sm:w-72 lg:w-96 h-auto mx-auto"
          />
        </motion.h1>

        <motion.div
          className="py-10"
          variants={{
            hidden: { opacity: 0, y: -30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <p className="font-light text-lg sm:text-xl tracking-[0.2em] uppercase text-white/70">
            Individuality Drives Design
          </p>
          <p className="font-light text-sm sm:text-base tracking-wider text-white/40 mt-3 max-w-lg mx-auto">
            Where craftsmanship meets innovation, and every detail is tailored
            to perfection.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6"
          variants={{
            hidden: { opacity: 0, y: -30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <Link href="#contact">
            <button className="hover:bg-white hover:text-black transition-all border border-white/30 py-2.5 px-8 text-sm tracking-[0.2em] uppercase font-light">
              Book Consultation
            </button>
          </Link>
          <Link href="#services">
            <button className="hover:bg-white/10 transition-all border border-white/10 py-2.5 px-8 text-sm tracking-[0.2em] uppercase font-light text-white/60">
              Our Services
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};
