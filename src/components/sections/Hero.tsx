"use client";

import Link from "next/link";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

const highlights = [
  "Free 30-minute consultation",
  "Dedicated personal counsellor",
  "Pan India & online support",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-pattern">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur">
            <Star size={14} className="text-accent fill-accent" />
            Trusted by 2500+ students across India
          </div>

          {/* Headline */}
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Get into Your{" "}
            <span className="text-accent">Dream College</span>
            <br />with Expert Guidance
          </h1>

          <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            SikshaMarg offers personalised college admission counselling for students in Lucknow, Mumbai and across India. Our experts guide you from shortlisting to securing your seat.
          </p>

          {/* Highlights */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-blue-100 text-sm">
                <CheckCircle size={16} className="text-accent shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-accent text-base px-8 py-4">
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-base px-8 py-4"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" className="w-full fill-white" preserveAspectRatio="none" height="60">
          <path d="M0,32L80,37.3C160,43,320,53,480,53.3C640,53,800,43,960,37.3C1120,32,1280,32,1360,32L1440,32L1440,64L1360,64C1280,64,1120,64,960,64C800,64,640,64,480,64C320,64,160,64,80,64L0,64Z" />
        </svg>
      </div>
    </section>
  );
}
