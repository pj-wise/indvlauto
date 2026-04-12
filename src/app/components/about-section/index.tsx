"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div id="about" className="py-20 sm:py-28 relative layoutPadding">
      <div className="max-w-screen-format">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-wide uppercase">
              A New Era of
              <br />
              <span className="font-light">Automotive Luxury</span>
            </h2>
            <div className="w-12 h-[1px] bg-white/30 mt-6 mb-8" />
            <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light">
              At INDVL, individuality drives design. Stepping into a new era of
              automotive luxury where craftsmanship meets innovation, and every
              detail is tailored to perfection. From our Orlando studio, we
              redefine auto restyling, paint protection, and custom finishes with
              an unwavering commitment to excellence.
            </p>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light mt-4">
              Using only the finest professional films and coatings, we deliver
              results that don&apos;t just look good... but protects. With
              precision and passion an unrivaled eye for detail, INDVL transforms
              every ride into a truly one-of-one experience.
            </p>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light mt-4">
              But we&apos;re more than automotive. We produce our own film and
              extend our vision into lifestyle with a signature line of INDVL
              merch, so you can carry the culture wherever you go.{" "}
              <Link
                href="#contact"
                className="text-white underline underline-offset-4 hover:text-white/70 transition-colors"
              >
                Schedule a consultation
              </Link>{" "}
              today to see what sets us apart.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-zinc-900 relative overflow-hidden">
              <Image
                src="/work/image0.jpeg"
                fill
                className="object-cover"
                alt="INDVL Auto studio with Lamborghini"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Offset border accent */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-white/10 -z-10" />
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-16 sm:mt-24 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-2xl sm:text-4xl font-bold tracking-wider">
              100%
            </p>
            <p className="text-xs sm:text-sm text-white/40 tracking-wider uppercase mt-2 font-light">
              Custom Work
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-4xl font-bold tracking-wider">
              Premium
            </p>
            <p className="text-xs sm:text-sm text-white/40 tracking-wider uppercase mt-2 font-light">
              Materials Only
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-4xl font-bold tracking-wider">
              Orlando
            </p>
            <p className="text-xs sm:text-sm text-white/40 tracking-wider uppercase mt-2 font-light">
              FL Studio
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
