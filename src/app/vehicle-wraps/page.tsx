import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Palette, Clock, DollarSign, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vehicle Wraps | INDVL Auto",
  description:
    "Premium vehicle wrap services in Orlando, FL. Custom designs, full color changes, and partial wraps. Transform your ride into a one-of-one experience with INDVL Auto.",
};

export default function VehicleWrapsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/work/image12.jpeg')" }} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="max-w-7xl py-16 mx-auto text-center relative z-10">
          <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 tracking-wide uppercase">
            Vehicle Wraps
          </h1>
          <div className="w-12 h-[1px] bg-white/30 mt-6 mb-8 mx-auto" />
          <p className="text-base sm:text-lg text-white/50 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
            Transform your vehicle with premium vinyl wraps. Whether you&apos;re
            looking for a complete color change or a custom design that turns
            heads, our team delivers precision craftsmanship on every project.
          </p>
          <Link href="/#contact">
            <Button className="bg-white hover:bg-white/90 text-black font-medium px-8 py-6 text-sm tracking-[0.2em] uppercase rounded-none">
              Book Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* What is Vinyl Wrap Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
                The Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 tracking-wide uppercase">
                What Is a <span className="font-light">Vehicle Wrap?</span>
              </h2>
              <div className="w-12 h-[1px] bg-white/30 mb-6" />
              <p className="text-white/50 text-base leading-relaxed font-light mb-6">
                Vehicle wrapping is the process of applying a thin, durable
                vinyl film to your vehicle&apos;s exterior. Unlike traditional
                paint, vinyl wraps are completely reversible and provide
                excellent protection for your original paint while allowing for
                unlimited customization.
              </p>
              <p className="text-white/50 text-base leading-relaxed font-light">
                Whether you want a full color change, custom graphics, or
                commercial branding, vinyl wraps offer a cost-effective and
                flexible solution that can be removed or changed whenever you
                want a new look.
              </p>
            </div>
            <div className="aspect-[4/3] bg-zinc-900 border border-white/10 relative overflow-hidden">
              <img
                src="/work/image1.jpeg"
                alt="Custom teal vinyl wrap on BMW"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-wide uppercase">
              Why Choose <span className="font-light">Vehicle Wraps?</span>
            </h2>
            <div className="w-12 h-[1px] bg-white/30 mt-6 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Paint Protection", desc: "Protects your original paintwork from scratches, chips, and UV damage while maintaining resale value." },
              { icon: Palette, title: "Unlimited Customization", desc: "Choose from thousands of colors, finishes, and custom designs to make your vehicle truly unique." },
              { icon: Clock, title: "Fully Reversible", desc: "Unlike paint, wraps can be removed without damaging your original finish, giving you flexibility." },
              { icon: DollarSign, title: "Cost-Effective", desc: "More affordable than a custom paint job with faster installation and minimal downtime." },
              { icon: Check, title: "Long-Lasting", desc: "High-quality vinyl wraps last 5-7 years with proper care and maintenance." },
              { icon: Sparkles, title: "Premium Materials", desc: "We use only the finest professional films for results that look stunning and last." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Card key={i} className="bg-black border-white/10 rounded-none">
                <CardContent className="pt-6 space-y-4">
                  <Icon className="w-8 h-8 text-white/60" strokeWidth={1} />
                  <h3 className="text-base font-medium text-white tracking-wider uppercase">
                    {title}
                  </h3>
                  <p className="text-white/40 leading-relaxed text-sm font-light">
                    {desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-wide uppercase">
              Our <span className="font-light">Process</span>
            </h2>
            <div className="w-12 h-[1px] bg-white/30 mt-6 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your vision, show material options, and create a plan tailored to your goals." },
              { step: "02", title: "Preparation", desc: "Thorough cleaning and decontamination to ensure a flawless, lasting application." },
              { step: "03", title: "Application", desc: "Expert installation using professional techniques for a seamless, bubble-free finish." },
              { step: "04", title: "Inspection", desc: "Final quality check ensuring every edge is perfect before delivery." },
            ].map(({ step, title, desc }, i) => (
              <div key={i} className="border border-white/10 p-8">
                <span className="text-3xl font-bold text-white/10">{step}</span>
                <h3 className="text-base font-medium text-white tracking-wider uppercase mt-4">
                  {title}
                </h3>
                <p className="text-white/40 leading-relaxed text-sm font-light mt-3">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-wide uppercase">
              FAQ
            </h2>
            <div className="w-12 h-[1px] bg-white/30 mt-6 mx-auto" />
          </div>
          <div className="space-y-4">
            {[
              { q: "What is the difference between a full wrap and a partial wrap?", a: "A full wrap covers the entire vehicle, while a partial wrap only covers certain areas like doors, hood, or roof. Partial wraps are a cost-effective option for adding accents or commercial branding." },
              { q: "Can I choose any color or design?", a: "We offer a wide range of colors and finishes including matte, gloss, satin, metallic, and chrome. We can also create custom designs tailored specifically to your vision." },
              { q: "How long do vehicle wraps last?", a: "With proper care, our high-quality vinyl wraps can last 5-7 years, making them a durable and long-lasting investment for your vehicle." },
              { q: "Will a wrap damage my original paint?", a: "No. When professionally installed and removed, vinyl wraps actually protect your original paint and can be removed without causing any damage." },
            ].map(({ q, a }, i) => (
              <div key={i} className="border border-white/10 p-6">
                <h3 className="text-sm font-medium text-white tracking-wider uppercase">
                  {q}
                </h3>
                <p className="text-white/40 leading-relaxed text-sm font-light mt-3">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wide uppercase">
            Ready to Transform Your <span className="font-light">Vehicle?</span>
          </h2>
          <p className="text-base text-white/50 leading-relaxed font-light max-w-lg mx-auto">
            Book a consultation today and let&apos;s bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/#contact">
              <Button className="bg-white hover:bg-white/90 text-black font-medium px-8 py-6 text-sm tracking-[0.2em] uppercase rounded-none">
                Book Consultation
              </Button>
            </Link>
            <Link href="/#services">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white hover:text-black font-medium px-8 py-6 text-sm tracking-[0.2em] uppercase bg-transparent rounded-none"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
