import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Zap, Eye, Droplets, Sun } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paint Protection Film (PPF) | INDVL Auto",
  description:
    "Premium paint protection film services in Orlando, FL. Shield your vehicle from chips, scratches, and road debris with INDVL Auto's expert PPF installation.",
};

export default function PPFPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/work/image21.jpeg')" }} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="max-w-7xl py-16 mx-auto text-center relative z-10">
          <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 tracking-wide uppercase">
            Paint Protection Film
          </h1>
          <div className="w-12 h-[1px] bg-white/30 mt-6 mb-8 mx-auto" />
          <p className="text-base sm:text-lg text-white/50 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
            Safeguard your vehicle&apos;s finish with our premium paint
            protection film. Virtually invisible, incredibly durable — PPF is
            the ultimate shield against chips, scratches, and environmental
            damage.
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
                About PPF
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 tracking-wide uppercase">
                What Is <span className="font-light">PPF?</span>
              </h2>
              <div className="w-12 h-[1px] bg-white/30 mb-6" />
              <p className="text-white/50 text-base leading-relaxed font-light mb-6">
                Paint Protection Film is a clear, thermoplastic urethane film
                applied to painted surfaces of your vehicle. It provides an
                invisible barrier against rock chips, bug splatter, bird
                droppings, minor abrasions, and UV exposure.
              </p>
              <p className="text-white/50 text-base leading-relaxed font-light">
                Our PPF features self-healing technology — minor scratches and
                swirl marks disappear with heat, keeping your vehicle looking
                pristine for years.
              </p>
            </div>
            <div className="aspect-[4/3] bg-zinc-900 border border-white/10 relative overflow-hidden">
              <img
                src="/work/image4.jpeg"
                alt="Blue BMW with PPF installation"
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
              Why Choose <span className="font-light">PPF?</span>
            </h2>
            <div className="w-12 h-[1px] bg-white/30 mt-6 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Impact Protection", desc: "Shields paint from rock chips, road debris, and minor impacts that cause permanent damage." },
              { icon: Zap, title: "Self-Healing", desc: "Advanced film technology that heals minor scratches and swirl marks with heat exposure." },
              { icon: Eye, title: "Virtually Invisible", desc: "Crystal-clear film that maintains your vehicle's original appearance and paint color." },
              { icon: Sun, title: "UV Resistance", desc: "Blocks harmful UV rays that cause paint fading and oxidation over time." },
              { icon: Droplets, title: "Hydrophobic", desc: "Water-repellent surface that makes cleaning easier and keeps your car looking fresh." },
              { icon: Check, title: "Preserves Value", desc: "Protects your investment by keeping the original paint in showroom condition." },
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
              { q: "How long does PPF last?", a: "Our premium PPF lasts 7-10 years with proper care and maintenance, making it a long-term investment in your vehicle's protection." },
              { q: "Will PPF change the look of my car?", a: "No. Our PPF is virtually invisible once applied. It maintains your vehicle's original color and finish while adding a layer of protection." },
              { q: "Can PPF be applied to any vehicle?", a: "Yes, PPF can be custom-cut and applied to any vehicle regardless of make, model, or year. We use precision cutting software for a perfect fit." },
              { q: "Does PPF require special maintenance?", a: "PPF is low-maintenance. Regular washing is all that's needed. Avoid abrasive cleaners and automatic car washes with harsh brushes." },
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
            Protect Your <span className="font-light">Investment</span>
          </h2>
          <p className="text-base text-white/50 leading-relaxed font-light max-w-lg mx-auto">
            Don&apos;t let daily driving take a toll on your paint. Book a PPF consultation today.
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
