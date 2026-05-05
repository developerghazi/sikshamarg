import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function CTABanner() {
  return (
    <section className="bg-hero-pattern py-16">
      <div className="container-custom text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Book a free 30-minute consultation today. No obligation, just clarity about your college admission path.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-accent text-base px-8 py-4">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
          <a href={`tel:${siteConfig.phone}`} className="btn-secondary text-base px-8 py-4">
            <Phone size={18} /> Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
