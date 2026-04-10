"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactSchema } from "@/types/contact";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useForm as useFormspreeForm } from "@formspree/react";

const CONTACT_SUBMIT_URL = "https://formspree.io/f/mpqovajl";
const SUBSCRIPTION_FORM_ID = "YOUR_FORMSPREE_ID";

export const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [subscriptionFormState, subscriptionSubmit] =
    useFormspreeForm(SUBSCRIPTION_FORM_ID);

  async function onContactSubmit(data: z.infer<typeof contactSchema>) {
    setSubmitError("");
    setIsSubmitting(true);
    try {
      const res = await fetch(CONTACT_SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      // @ts-ignore
      if (typeof gtag_report_conversion === "function") gtag_report_conversion();
      const params = new URLSearchParams();
      Object.entries(data).forEach(([k, v]) => {
        if (v !== undefined && v !== "") params.set(k, String(v));
      });
      window.location.href = `/contact/thank-you?${params.toString()}`;
    } catch {
      setSubmitError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <div id="contact" className="w-full layoutPadding py-10">
      <div className="max-w-screen-format mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
            Get In Touch
          </span>
          <h1 className="text-3xl font-bold sm:text-5xl mt-4 tracking-wide uppercase">
            Contact Us
          </h1>
          <div className="w-12 h-[1px] bg-white/30 mt-6 mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-between w-full tracking-wide">
          <form
            name="contact"
            onSubmit={handleSubmit(onContactSubmit)}
            className="flex flex-col gap-y-3 w-full md:max-w-[420px] bg-zinc-950 border border-white/10 p-8"
          >
            <h3 className="text-lg font-medium tracking-wider uppercase mb-2">
              Send a Message
            </h3>
            <Input
              label="Name"
              {...register("name")}
              placeholder="Your name"
            />
            <Input
              label="Email"
              {...register("email")}
              placeholder="Your email"
            />
            <Input
              label="Phone"
              {...register("phoneNumber")}
              placeholder="Your phone number"
            />
            <div className="flex flex-col gap-y-1">
              <label className="text-xs font-medium uppercase tracking-wider text-white/60">
                Service
              </label>
              <select
                {...register("service")}
                className="w-full p-2.5 px-3 bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
              >
                <option value="">Select a service</option>
                <option value="vehicle-wraps">Vehicle Wraps</option>
                <option value="ppf">Paint Protection Film (PPF)</option>
                <option value="ceramic-coating">Paint Correction & Ceramic Coating</option>
                <option value="window-tint">Window Tint</option>
                <option value="commercial">Commercial Services</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-xs font-medium uppercase tracking-wider text-white/60">
                Message
              </label>
              <textarea
                {...register("message")}
                placeholder="Tell us about your project"
                rows={4}
                className="w-full p-2.5 px-3 bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
              ></textarea>
            </div>
            {submitError && (
              <p className="text-[11px] text-red-400">{submitError}</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black w-full mt-3 py-3 text-sm tracking-[0.2em] uppercase font-medium hover:bg-white/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="w-full md:max-w-[420px] flex flex-col gap-6">
            <div className="bg-zinc-950 border border-white/10 p-8">
              <h3 className="text-lg font-medium tracking-wider uppercase mb-4">
                Location
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2!2d-81.4009!3d28.5565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77b5e5b4e5c3d%3A0x0!2s1428+W+Anderson+St%2C+Orlando%2C+FL+32805!5e0!3m2!1sen!2sus!4v1700000000000"
                className="h-[200px] w-full border border-white/10"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="text-center text-white/60 font-light text-sm mt-4">
                1428 W Anderson St
                <br />
                Orlando, FL 32805
              </p>
            </div>

            <div className="bg-zinc-950 border border-white/10 p-8">
              <h3 className="text-lg font-medium tracking-wider uppercase mb-4">
                Contact Info
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-white/60 font-light">
                  <span className="text-white/40 uppercase tracking-wider text-xs">Phone</span>
                  <br />
                  <a href="tel:4072573659" className="text-white hover:text-white/70 transition-colors">
                    (407) 257-3659
                  </a>
                </p>
                <p className="text-white/60 font-light">
                  <span className="text-white/40 uppercase tracking-wider text-xs">Instagram</span>
                  <br />
                  <a
                    href="https://instagram.com/indvl.auto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/70 transition-colors"
                  >
                    @indvl.auto
                  </a>
                </p>
              </div>
            </div>

            <form
              name="subscribe"
              onSubmit={subscriptionSubmit}
              className="bg-zinc-950 border border-white/10 p-8"
            >
              <h3 className="text-lg font-medium tracking-wider uppercase mb-2">
                Stay Updated
              </h3>
              <p className="text-xs text-white/40 mb-4 font-light">
                Get exclusive updates and offers from INDVL Auto.
              </p>
              <div className="flex border border-white/10">
                <input
                  name="subscription-email"
                  placeholder="Your email"
                  className="w-full p-2.5 px-3 bg-white/5 text-white placeholder:text-white/20 text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={subscriptionFormState.submitting}
                  className="text-sm px-5 py-2.5 font-medium bg-white text-black hover:bg-white/90 transition-colors tracking-wider uppercase whitespace-nowrap"
                >
                  {subscriptionFormState.submitting ? "..." : "Join"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Input = React.forwardRef<
  HTMLInputElement,
  { label?: string } & React.InputHTMLAttributes<HTMLInputElement>
>(({ label = "", name, className, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      {label ? (
        <label className="text-xs font-medium uppercase tracking-wider text-white/60">
          {label}
        </label>
      ) : null}
      <input
        ref={ref}
        name={name}
        {...props}
        className={cn(
          "w-full p-2.5 px-3 bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-white/30 transition-colors",
          className
        )}
      />
    </div>
  );
});

Input.displayName = "Input";
