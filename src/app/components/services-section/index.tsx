"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      title: "Vehicle Wraps",
      description: "Full color changes, custom designs, and partial wraps tailored to your vision.",
      href: "/vehicle-wraps",
      number: "01",
    },
    {
      title: "Paint Protection Film",
      description: "Premium PPF to shield your paint from chips, scratches, and road debris.",
      href: "/ppf",
      number: "02",
    },
    {
      title: "Paint Correction & Ceramic Coating",
      description: "Restore and protect your finish with professional-grade coatings.",
      href: "/ceramic-coating",
      number: "03",
    },
    {
      title: "Window Tint",
      description: "Premium window films for privacy, UV protection, and a refined look.",
      href: "/window-tint",
      number: "04",
    },
    {
      title: "Commercial Services",
      description: "Fleet wraps and commercial branding that turn vehicles into mobile billboards.",
      href: "/commercial",
      number: "05",
    },
  ];

  return (
    <div id="services" className="relative w-full layoutPadding py-20 sm:py-28">
      <div className="max-w-screen-format">
        <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
          What We Do
        </span>
        <h3 className="text-3xl sm:text-5xl font-bold mt-4 tracking-wide uppercase">
          Our Services
        </h3>
        <div className="w-12 h-[1px] bg-white/30 mt-6 mb-12" />

        <div className="space-y-0">
          {services.map(({ title, description, href, number }, index) => (
            <motion.div
              key={`service-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={href} className="group block">
                <div className="flex items-center justify-between py-8 border-b border-white/10 hover:border-white/30 transition-all">
                  <div className="flex items-start gap-6 sm:gap-10">
                    <span className="text-sm text-white/20 font-light tracking-wider mt-1">
                      {number}
                    </span>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-medium tracking-wider uppercase group-hover:text-white/80 transition-colors">
                        {title}
                      </h4>
                      <p className="text-white/40 text-sm sm:text-base font-light mt-2 max-w-md">
                        {description}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
