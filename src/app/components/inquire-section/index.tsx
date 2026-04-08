import Link from "next/link";

export const InquireSection = () => {
  return (
    <div id="inquire" className="w-full layoutPadding py-10">
      <div className="flex flex-col gap-6 text-white max-w-screen-format w-full tracking-wide px-7 lg:px-14 py-10 lg:py-16 min-h-[280px] bg-zinc-950 border border-white/10 relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/work/IMG_0156.jpeg')" }}
        />
        <div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-white/5" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-r border-t border-white/5" />

        <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light relative z-10">
          Get Started
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-[500px] tracking-wide uppercase leading-tight relative z-10">
          Experience the{" "}
          <span className="font-light">INDVL Difference</span>
        </h3>
        <p className="font-light text-white/50 text-base sm:text-lg max-w-[400px] leading-relaxed relative z-10">
          Book a consultation and let us bring your vision to life. We&apos;ll
          get back to you within 24 hours.
        </p>
        <Link href="#contact" className="relative z-10">
          <button className="bg-white text-black w-fit px-8 py-3 text-sm tracking-[0.2em] uppercase font-medium hover:bg-white/90 transition-colors">
            Book Consultation
          </button>
        </Link>
      </div>
    </div>
  );
};
