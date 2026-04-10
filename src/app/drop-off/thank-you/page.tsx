"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

const FIELD_LABELS: Record<string, string> = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  phone: "Phone",
  companyName: "Company",
  month: "Month",
  day: "Day",
  year: "Year",
  time: "Time",
  ampm: "AM/PM",
  vehicleYear: "Vehicle Year",
  vehicleMake: "Vehicle Make",
  vehicleModel: "Vehicle Model",
  vin: "VIN",
  services: "Services",
  previousWork: "Previous Work / Modifications",
  signature: "Signature",
  policyAgreement: "Policy Agreement",
};

const GROUPS = [
  { title: "Contact Information", fields: ["firstName", "lastName", "email", "phone", "companyName"] },
  { title: "Appointment", fields: ["month", "day", "year", "time", "ampm"] },
  { title: "Vehicle Information", fields: ["vehicleYear", "vehicleMake", "vehicleModel", "vin"] },
  { title: "Service Details", fields: ["services", "previousWork"] },
  { title: "Authorization", fields: ["signature", "policyAgreement"] },
];

function ThankYouContent() {
  const searchParams = useSearchParams();

  const data: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    data[key] = value;
  });

  const hasData = Object.keys(data).length > 0;

  return (
    <div className="min-h-screen layoutPadding pt-32 pb-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 border border-white/20 mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="block text-xs tracking-[0.4em] uppercase text-white/40 font-light">
            Drop-Off Confirmed
          </span>
          <h1 className="text-3xl font-bold sm:text-5xl mt-4 tracking-wide uppercase">
            Thank You
          </h1>
          <div className="w-12 h-[1px] bg-white/30 mt-6 mx-auto" />
          <p className="text-sm text-white/50 font-light mt-6 max-w-md mx-auto leading-relaxed">
            Your vehicle drop-off form has been submitted successfully. We&apos;ll be in touch with you shortly.
          </p>
        </div>

        {/* Submitted data */}
        {hasData ? (
          <div className="bg-zinc-950 border border-white/10 p-6 sm:p-8 mb-8">
            <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-white/60 mb-6">
              Submission Summary
            </h2>
            <div className="flex flex-col gap-6">
              {GROUPS.map((group) => {
                const visibleFields = group.fields.filter((f) => data[f]);
                if (visibleFields.length === 0) return null;
                return (
                  <div key={group.title}>
                    <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-3">
                      {group.title}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                      {visibleFields.map((field) => (
                        <div key={field} className="flex flex-col py-1.5 border-b border-white/5">
                          <span className="text-[11px] text-white/40 uppercase tracking-wider">
                            {FIELD_LABELS[field] || field}
                          </span>
                          <span className="text-sm text-white/80 font-light mt-0.5 break-words">
                            {data[field] === "true" ? "Yes" : data[field]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="bg-zinc-950 border border-white/10 p-8 text-center mb-8">
            <p className="text-sm text-white/40 font-light">
              No submission data found.
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="bg-white text-black py-3 px-8 text-sm tracking-[0.2em] uppercase font-medium hover:bg-white/90 transition-colors text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DropOffThankYouPage() {
  return (
    <Suspense>
      <ThankYouContent />
    </Suspense>
  );
}
