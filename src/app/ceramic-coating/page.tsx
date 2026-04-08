import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Shield, Droplets, Sun, Timer, Check } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paint Correction & Ceramic Coating | INDVL Auto",
  description:
    "Professional paint correction and ceramic coating services in Orlando, FL. Restore your paint to perfection and protect it with long-lasting ceramic coatings at INDVL Auto.",
};

export default function CeramicCoatingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/work/IMG_0589.jpeg')" }} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="max-w-7xl py-16 mx-auto text-center relative z-10">
          <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 tracking-wide uppercase">
            Paint Correction &<br />
            <span className="font-light">Ceramic Coating</span>
          </h1>
          <div className="w-12 h-[1px] bg-white/30 mt-6 mb-8 mx-auto" />
          <p className="text-base sm:text-lg text-white/50 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
            Restore your vehicle&apos;s finish to better than new and lock in
            that perfection with professional-grade ceramic coating. The
            ultimate combination for a flawless, protected finish.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
                Step One
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 tracking-wide uppercase">
                Paint <span className="font-light">Correction</span>
              </h2>
              <div className="w-12 h-[1px] bg-white/30 mb-6" />
              <p className="text-white/50 text-base leading-relaxed font-light mb-4">
                Paint correction is the process of removing surface
                imperfections such as swirl marks, scratches, oxidation, and
                water spots through careful machine polishing.
              </p>
              <p className="text-white/50 text-base leading-relaxed font-light">
                This step is essential before applying any coating, as it
                creates a perfectly smooth surface that maximizes the bond and
                clarity of the ceramic coating.
              </p>
            </div>
            <div>
              <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
                Step Two
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 tracking-wide uppercase">
                Ceramic <span className="font-light">Coating</span>
              </h2>
              <div className="w-12 h-[1px] bg-white/30 mb-6" />
              <p className="text-white/50 text-base leading-relaxed font-light mb-4">
                Ceramic coating is a liquid polymer applied by hand that
                chemically bonds with your vehicle&apos;s factory paint, creating
                a permanent or semi-permanent layer of protection.
              </p>
              <p className="text-white/50 text-base leading-relaxed font-light">
                The result is an incredibly glossy, hydrophobic surface that
                repels water, dirt, and contaminants while making your vehicle
                dramatically easier to maintain.
              </p>
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
              Why <span className="font-light">Ceramic Coating?</span>
            </h2>
            <div className="w-12 h-[1px] bg-white/30 mt-6 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: "Mirror-Like Gloss", desc: "Achieve an unmatched depth of shine that makes your paint look wet and flawless at all times." },
              { icon: Droplets, title: "Hydrophobic Surface", desc: "Water beads and rolls off effortlessly, carrying dirt and grime with it for easy maintenance." },
              { icon: Shield, title: "Chemical Resistance", desc: "Protects against bird droppings, tree sap, acid rain, and harsh chemicals that damage paint." },
              { icon: Sun, title: "UV Protection", desc: "Blocks harmful ultraviolet rays that cause paint fading and oxidation over time." },
              { icon: Timer, title: "Long-Lasting", desc: "Professional ceramic coatings last 2-5+ years depending on the package and maintenance." },
              { icon: Check, title: "Easy Maintenance", desc: "Dramatically reduces the time and effort needed to keep your vehicle clean and looking its best." },
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
              { q: "How long does ceramic coating last?", a: "Depending on the product and maintenance, professional ceramic coatings can last 2-5+ years. We offer various tiers to match your needs and budget." },
              { q: "Is paint correction necessary before coating?", a: "Yes. For the best results, we recommend paint correction to remove imperfections before applying the ceramic coating. This ensures a flawless finish." },
              { q: "Can ceramic coating prevent all scratches?", a: "Ceramic coating provides a hard protective layer that resists minor scratches and swirl marks, but it's not a substitute for paint protection film against rock chips." },
              { q: "How do I maintain my ceramic coating?", a: "Regular hand washing with pH-neutral car soap is recommended. Avoid automated car washes with abrasive brushes. We'll provide detailed care instructions." },
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
            Restore & Protect Your <span className="font-light">Finish</span>
          </h2>
          <p className="text-base text-white/50 leading-relaxed font-light max-w-lg mx-auto">
            Book a paint correction and ceramic coating consultation today.
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
