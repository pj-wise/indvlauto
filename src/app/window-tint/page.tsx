import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Shield, Eye, Thermometer, Lock, Check } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Window Tint | INDVL Auto",
  description:
    "Premium window tinting services in Orlando, FL. UV protection, privacy, heat reduction, and a refined look with INDVL Auto's expert installation.",
};

export default function WindowTintPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/work/image7.jpeg')" }} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="max-w-7xl py-16 mx-auto text-center relative z-10">
          <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 tracking-wide uppercase">
            Window Tint
          </h1>
          <div className="w-12 h-[1px] bg-white/30 mt-6 mb-8 mx-auto" />
          <p className="text-base sm:text-lg text-white/50 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
            Elevate your vehicle&apos;s look and comfort with premium window
            tinting. From heat rejection to UV protection, our films deliver
            performance and aesthetics in equal measure.
          </p>
          <Link href="/#contact">
            <Button className="bg-white hover:bg-white/90 text-black font-medium px-8 py-6 text-sm tracking-[0.2em] uppercase rounded-none">
              Book Consultation
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
                About
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 tracking-wide uppercase">
                Why <span className="font-light">Window Tint?</span>
              </h2>
              <div className="w-12 h-[1px] bg-white/30 mb-6" />
              <p className="text-white/50 text-base leading-relaxed font-light mb-6">
                Window tinting is more than aesthetics. Premium window films
                block up to 99% of harmful UV rays, significantly reduce
                interior heat, and provide enhanced privacy — all while giving
                your vehicle a sleek, refined appearance.
              </p>
              <p className="text-white/50 text-base leading-relaxed font-light">
                We use only the highest quality ceramic and carbon window films
                that won&apos;t bubble, peel, or discolor over time, ensuring a
                lasting investment in your comfort and style.
              </p>
            </div>
            <div className="aspect-[4/3] bg-zinc-900 border border-white/10 relative overflow-hidden">
              <img
                src="/work/IMG_0345.jpeg"
                alt="Black BMW M4 with window tint"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-wide uppercase">
              Tint <span className="font-light">Benefits</span>
            </h2>
            <div className="w-12 h-[1px] bg-white/30 mt-6 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Sun, title: "UV Protection", desc: "Blocks up to 99% of harmful ultraviolet rays, protecting your skin and interior from sun damage." },
              { icon: Thermometer, title: "Heat Reduction", desc: "Significantly reduces interior temperature, keeping you cool and reducing AC strain in Florida heat." },
              { icon: Eye, title: "Enhanced Privacy", desc: "Prevents outsiders from seeing into your vehicle, protecting valuables and personal space." },
              { icon: Shield, title: "Glare Reduction", desc: "Reduces blinding glare from the sun and headlights for safer, more comfortable driving." },
              { icon: Lock, title: "Shatter Protection", desc: "In the event of an accident, tint film helps hold shattered glass together for added safety." },
              { icon: Check, title: "Interior Protection", desc: "Prevents fading, cracking, and aging of your dashboard, seats, and interior trim." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Card key={i} className="bg-black border-white/10 rounded-none">
                <CardContent className="pt-6 space-y-4">
                  <Icon className="w-8 h-8 text-white/60" strokeWidth={1} />
                  <h3 className="text-base font-medium text-white tracking-wider uppercase">{title}</h3>
                  <p className="text-white/40 leading-relaxed text-sm font-light">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-wide uppercase">FAQ</h2>
            <div className="w-12 h-[1px] bg-white/30 mt-6 mx-auto" />
          </div>
          <div className="space-y-4">
            {[
              { q: "Is window tinting legal in Florida?", a: "Yes, with regulations. Florida allows non-reflective tint above the AS-1 line on the windshield. Front side windows must allow more than 28% of light in. Back side and rear windows can have any darkness." },
              { q: "How long does window tint last?", a: "Our premium ceramic and carbon films are backed by manufacturer warranties and can last 10+ years without bubbling, peeling, or discoloring." },
              { q: "How long does installation take?", a: "Most vehicles can be completed in 2-4 hours depending on the number of windows and the complexity of the vehicle." },
              { q: "Can I roll down my windows after tinting?", a: "We recommend waiting 3-5 days before rolling down your windows to allow the adhesive to fully cure, especially in humid conditions." },
            ].map(({ q, a }, i) => (
              <div key={i} className="border border-white/10 p-6">
                <h3 className="text-sm font-medium text-white tracking-wider uppercase">{q}</h3>
                <p className="text-white/40 leading-relaxed text-sm font-light mt-3">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wide uppercase">
            Upgrade Your <span className="font-light">Comfort & Style</span>
          </h2>
          <p className="text-base text-white/50 leading-relaxed font-light max-w-lg mx-auto">
            Book a tint consultation and find the perfect shade for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/#contact">
              <Button className="bg-white hover:bg-white/90 text-black font-medium px-8 py-6 text-sm tracking-[0.2em] uppercase rounded-none">
                Book Consultation
              </Button>
            </Link>
            <Link href="/#services">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black font-medium px-8 py-6 text-sm tracking-[0.2em] uppercase bg-transparent rounded-none">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
