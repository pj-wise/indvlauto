"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  dropOffSchema,
  pickUpSchema,
  type DropOffFormData,
  type PickUpFormData,
} from "@/types/drop-off";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const DROPOFF_SUBMIT_URL = "https://formspree.io/f/xqegrzyz";
const PICKUP_SUBMIT_URL = "https://formspree.io/f/mdapqnlr";

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const TIMES = [
  "12:00","12:30","1:00","1:30","2:00","2:30","3:00","3:30",
  "4:00","4:30","5:00","5:30","6:00","6:30","7:00","7:30",
  "8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30",
];

const PRIVACY_POLICY = `INDVL Auto LLC ("we," "us," or "our") respects your privacy. Personal information collected through this form — including your name, contact details, and vehicle information — is used solely to facilitate vehicle drop-off and pick-up services, communicate with you regarding your vehicle, and maintain internal records.

We do not sell, rent, or share your personal information with third parties except as required by law or as necessary to fulfill the services you have requested. Your data is stored securely and retained only as long as necessary for business and legal purposes.

By submitting this form, you consent to the collection and use of your information as described above. If you have questions about our privacy practices, please contact us directly.`;

const DROP_OFF_AUTHORIZATION = `By signing below, I authorize INDVL Auto LLC to perform the agreed-upon services on my vehicle. I acknowledge the following:

1. I am the legal owner or authorized representative of the vehicle described above.

2. I have disclosed all known previous work, modifications, wraps, coatings, or repairs that may affect the services being performed.

3. I understand that INDVL Auto LLC is not responsible for pre-existing damage, paint defects, mechanical issues, or conditions not caused by our services.

4. I understand that removal of previous wraps, coatings, or aftermarket modifications may reveal underlying damage including but not limited to paint lifting, discoloration, adhesive residue, or clear coat failure — and that INDVL Auto LLC is not liable for such conditions.

5. I agree to pick up my vehicle within 3 business days of being notified that services are complete. Storage fees may apply for vehicles left beyond this period.

6. I acknowledge that final pricing may vary from initial estimates based on the actual condition of the vehicle and scope of work required.

7. I release INDVL Auto LLC, its owners, employees, and agents from any liability for loss or damage not directly caused by negligence during the service process.`;

// ── Shared input components ──────────────────────────────────────────

const inputClass =
  "w-full p-2.5 px-3 bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-white/30 transition-colors";
const labelClass =
  "text-xs font-medium uppercase tracking-wider text-white/60";
const errorClass = "text-[11px] text-red-400 mt-0.5";

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-y-1 w-full", className)}>
      <label className={labelClass}>{label}</label>
      {children}
      {error && <p className={errorClass}>{error}</p>}
    </div>
  );
}

// ── Collapsible policy section ───────────────────────────────────────

function PolicySection({ title, text }: { title: string; text: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 bg-white/[0.02]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full p-4 text-left"
      >
        <span className="text-xs font-medium uppercase tracking-wider text-white/70">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-white/40 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="px-4 pb-4">
          <p className="text-[11px] text-white/40 font-light leading-relaxed whitespace-pre-line">
            {text}
          </p>
        </div>
      )}
    </div>
  );
}

// ── Drop Off form ────────────────────────────────────────────────────

function DropOffTab() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DropOffFormData>({
    resolver: zodResolver(dropOffSchema),
    defaultValues: {
      month: String(new Date().getMonth() + 1),
      day: String(new Date().getDate()),
      year: String(new Date().getFullYear()),
      time: "9:00",
      ampm: "AM",
    },
  });

  const [submitError, setSubmitError] = useState("");

  async function onSubmit(data: DropOffFormData) {
    setSubmitError("");
    try {
      const res = await fetch(DROPOFF_SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "drop-off", ...data }),
      });
      if (!res.ok) throw new Error("Submission failed");
      const params = new URLSearchParams();
      Object.entries(data).forEach(([k, v]) => {
        if (v !== undefined && v !== "" && v !== false) params.set(k, String(v));
      });
      window.location.href = `/drop-off/thank-you?${params.toString()}`;
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="First Name *" error={errors.firstName?.message}>
          <input {...register("firstName")} placeholder="First name" className={inputClass} />
        </Field>
        <Field label="Last Name *" error={errors.lastName?.message}>
          <input {...register("lastName")} placeholder="Last name" className={inputClass} />
        </Field>
      </div>

      {/* Contact row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Email *" error={errors.email?.message}>
          <input {...register("email")} type="email" placeholder="Email address" className={inputClass} />
        </Field>
        <Field label="Phone *" error={errors.phone?.message}>
          <input {...register("phone")} type="tel" placeholder="Phone number" className={inputClass} />
        </Field>
      </div>

      {/* Company */}
      <Field label="Company Name">
        <input {...register("companyName")} placeholder="Company (optional)" className={inputClass} />
      </Field>

      {/* Date & time */}
      <div>
        <p className={cn(labelClass, "mb-1.5")}>Date &amp; Time *</p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          <Field label="" error={errors.month?.message}>
            <select {...register("month")} className={inputClass}>
              {MONTHS.map((m, i) => (
                <option key={m} value={String(i + 1)}>{m}</option>
              ))}
            </select>
          </Field>
          <Field label="" error={errors.day?.message}>
            <select {...register("day")} className={inputClass}>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={String(i + 1)}>{i + 1}</option>
              ))}
            </select>
          </Field>
          <Field label="" error={errors.year?.message}>
            <select {...register("year")} className={inputClass}>
              {[2025, 2026, 2027].map((y) => (
                <option key={y} value={String(y)}>{y}</option>
              ))}
            </select>
          </Field>
          <Field label="" error={errors.time?.message}>
            <select {...register("time")} className={inputClass}>
              {TIMES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </Field>
          <Field label="" error={errors.ampm?.message}>
            <select {...register("ampm")} className={inputClass}>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </Field>
        </div>
      </div>

      {/* Vehicle info */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Field label="Year *" error={errors.vehicleYear?.message}>
          <input {...register("vehicleYear")} placeholder="2024" className={inputClass} />
        </Field>
        <Field label="Make *" error={errors.vehicleMake?.message}>
          <input {...register("vehicleMake")} placeholder="BMW" className={inputClass} />
        </Field>
        <Field label="Model *" error={errors.vehicleModel?.message}>
          <input {...register("vehicleModel")} placeholder="M4" className={inputClass} />
        </Field>
        <Field label="VIN *" error={errors.vin?.message}>
          <input {...register("vin")} placeholder="Vehicle VIN" className={inputClass} />
        </Field>
      </div>

      {/* Services */}
      <Field label="Services Being Performed *" error={errors.services?.message}>
        <textarea
          {...register("services")}
          rows={3}
          placeholder="Describe the services to be performed"
          className={cn(inputClass, "resize-none")}
        />
      </Field>

      {/* Previous work */}
      <Field label="Previous Work / Modifications Disclosure *" error={errors.previousWork?.message}>
        <textarea
          {...register("previousWork")}
          rows={3}
          placeholder="Disclose any previous wraps, coatings, paint work, or modifications"
          className={cn(inputClass, "resize-none")}
        />
      </Field>

      {/* Policy sections */}
      <div className="flex flex-col gap-3">
        <PolicySection title="Privacy Policy" text={PRIVACY_POLICY} />
        <PolicySection title="Drop-Off Authorization / Vehicle Disclosure" text={DROP_OFF_AUTHORIZATION} />
      </div>

      {/* Agreement checkbox */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          {...register("policyAgreement")}
          className="mt-0.5 h-4 w-4 accent-white bg-white/5 border border-white/10"
        />
        <span className="text-[11px] text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors">
          I have read and agree to the Privacy Policy and Drop-Off Authorization / Vehicle Disclosure above. *
        </span>
      </label>
      {errors.policyAgreement && (
        <p className={errorClass}>{errors.policyAgreement.message}</p>
      )}

      {/* Signature */}
      <Field label="Signature (Type Full Name) *" error={errors.signature?.message}>
        <input
          {...register("signature")}
          placeholder="Type your full legal name"
          className={cn(inputClass, "italic font-serif text-base")}
        />
      </Field>

      {submitError && (
        <p className="text-sm text-red-400 text-center">{submitError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-white text-black w-full mt-2 py-3 text-sm tracking-[0.2em] uppercase font-medium hover:bg-white/90 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit Drop-Off"}
      </button>
    </form>
  );
}

// ── Pick Up form ─────────────────────────────────────────────────────

function PickUpTab() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PickUpFormData>({
    resolver: zodResolver(pickUpSchema),
  });

  const [submitError, setSubmitError] = useState("");

  async function onSubmit(data: PickUpFormData) {
    setSubmitError("");
    try {
      const res = await fetch(PICKUP_SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "pick-up", ...data }),
      });
      if (!res.ok) throw new Error("Submission failed");
      const params = new URLSearchParams();
      Object.entries(data).forEach(([k, v]) => {
        if (v !== undefined && v !== "" && v !== false) params.set(k, String(v));
      });
      window.location.href = `/pick-up/thank-you?${params.toString()}`;
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <p className="text-sm text-white/50 font-light leading-relaxed">
        By signing below, I confirm that I have inspected and received my vehicle
        following the completion of services by INDVL Auto LLC. I acknowledge
        that the vehicle is in acceptable condition upon pick-up.
      </p>

      {/* Signature */}
      <Field label="Signature (Type Full Name) *" error={errors.signature?.message}>
        <input
          {...register("signature")}
          placeholder="Type your full legal name"
          className={cn(inputClass, "italic font-serif text-base")}
        />
      </Field>

      {/* Vehicle acceptance */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          {...register("vehicleAcceptance")}
          className="mt-0.5 h-4 w-4 accent-white bg-white/5 border border-white/10"
        />
        <span className="text-[11px] text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors">
          I confirm that I have inspected and accept the condition of my vehicle upon pick-up. *
        </span>
      </label>
      {errors.vehicleAcceptance && (
        <p className={errorClass}>{errors.vehicleAcceptance.message}</p>
      )}

      {/* Notes */}
      <Field label="Additional Notes">
        <textarea
          {...register("notes")}
          rows={4}
          placeholder="Any additional notes or comments (optional)"
          className={cn(inputClass, "resize-none")}
        />
      </Field>

      {submitError && (
        <p className="text-sm text-red-400 text-center">{submitError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-white text-black w-full mt-2 py-3 text-sm tracking-[0.2em] uppercase font-medium hover:bg-white/90 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit Pick-Up"}
      </button>
    </form>
  );
}

// ── Main page ────────────────────────────────────────────────────────

export default function DropOffPage() {
  const [tab, setTab] = useState<"drop-off" | "pick-up">("drop-off");

  return (
    <div className="min-h-screen layoutPadding pt-32 pb-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-light">
            Vehicle
          </span>
          <h1 className="text-3xl font-bold sm:text-5xl mt-4 tracking-wide uppercase">
            Drop-Off / Pick-Up
          </h1>
          <div className="w-12 h-[1px] bg-white/30 mt-6 mx-auto" />
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 mb-8">
          <button
            type="button"
            onClick={() => setTab("drop-off")}
            className={cn(
              "flex-1 py-3 text-sm tracking-[0.2em] uppercase font-medium transition-colors",
              tab === "drop-off"
                ? "text-white border-b-2 border-white"
                : "text-white/40 hover:text-white/60"
            )}
          >
            Drop Off
          </button>
          <button
            type="button"
            onClick={() => setTab("pick-up")}
            className={cn(
              "flex-1 py-3 text-sm tracking-[0.2em] uppercase font-medium transition-colors",
              tab === "pick-up"
                ? "text-white border-b-2 border-white"
                : "text-white/40 hover:text-white/60"
            )}
          >
            Pick Up
          </button>
        </div>

        {/* Form card */}
        <div className="bg-zinc-950 border border-white/10 p-6 sm:p-8">
          {tab === "drop-off" ? <DropOffTab /> : <PickUpTab />}
        </div>
      </div>
    </div>
  );
}
