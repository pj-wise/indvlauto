import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Target, DollarSign, Clock, Users, Check } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Services | INDVL Auto",
  description:
    "Commercial vehicle wraps and fleet branding in Orlando, FL. Turn your fleet into mobile billboards with INDVL Auto's professional commercial wrap services.",
};

export default function CommercialPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/work/image15.jpeg')" }} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="max-w-7xl py-16 mx-auto text-center relative z-10">
          <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 tracking-wide uppercase">
            Commercial <span className="font-light">Services</span>
          </h1>
          <div className="w-12 h-[1px] bg-white/30 mt-6 mb-8 mx-auto" />
          <p className="text-base sm:text-lg text-white/50 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
            Turn your fleet into 24/7 mobile billboards. Our commercial wrap
            services help businesses stand out with professional branding that
            commands attention on every road.
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
                For Business
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 tracking-wide uppercase">
                Fleet <span className="font-light">Branding</span>
              </h2>
              <div className="w-12 h-[1px] bg-white/30 mb-6" />
              <p className="text-white/50 text-base leading-relaxed font-light mb-6">
                A wrapped vehicle generates 30,000-70,000 daily impressions.
                That&apos;s your brand in front of thousands of potential
                customers every single day — without recurring advertising
                costs.
              </p>
              <p className="text-white/50 text-base leading-relaxed font-light">
                From single vehicles to entire fleets, we handle design,
                production, and installation to ensure your brand looks
                professional and consistent across every vehicle.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Full and partial fleet wraps",
                  "Custom design with your branding",
                  "Consistent look across all vehicles",
                  "Durable materials built for daily use",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-white/60 flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <span className="text-white/50 text-sm font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] bg-zinc-900 border border-white/10 relative overflow-hidden">
              <img
                src="/work/image17.jpeg"
                alt="Commercial vehicle wrap with Bass Pro branding"
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
              Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-wide uppercase">
              Why <span className="font-light">Wrap Your Fleet?</span>
            </h2>
            <div className="w-12 h-[1px] bg-white/30 mt-6 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Maximum Exposure", desc: "Reach thousands of potential customers daily with a mobile advertisement that works 24/7." },
              { icon: DollarSign, title: "Cost-Effective", desc: "One-time investment with no recurring costs. The lowest cost-per-impression of any advertising medium." },
              { icon: Truck, title: "Fleet Consistency", desc: "Create a unified, professional look across your entire fleet that reinforces brand recognition." },
              { icon: Clock, title: "Long-Lasting", desc: "Commercial wraps are built to withstand daily wear, lasting 5-7 years even with heavy use." },
              { icon: Users, title: "Build Trust", desc: "Branded vehicles project professionalism and legitimacy, building trust with customers before you even meet." },
              { icon: Check, title: "Paint Protection", desc: "Wraps protect your fleet vehicles' paint, preserving resale value when it's time to upgrade." },
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

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wide uppercase">
            Elevate Your <span className="font-light">Brand</span>
          </h2>
          <p className="text-base text-white/50 leading-relaxed font-light max-w-lg mx-auto">
            Schedule a commercial consultation and let us design a wrap strategy for your business.
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
