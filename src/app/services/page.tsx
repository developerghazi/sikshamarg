import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Globe, FileText, Search, CheckSquare, MessageCircle, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore SikshaMarg's complete range of admission counselling services — from college shortlisting to SOP writing and interview prep.",
};

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Globe,
  FileText,
  Search,
  CheckSquare,
  MessageCircle,
};

const packages = [
  {
    name: "Essential",
    price: "₹9,999",
    desc: "Perfect for students who need targeted help with a specific part of the process.",
    features: ["Profile Assessment", "College Shortlisting (5 colleges)", "Application Assistance", "1 SOP Review"],
    highlight: false,
  },
  {
    name: "Complete",
    price: "₹24,999",
    desc: "Our most popular package — end-to-end support from shortlisting to admission.",
    features: ["Everything in Essential", "Unlimited College Shortlisting", "SOP + LOR Writing", "Interview Preparation", "Dedicated Counsellor", "WhatsApp Support"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹39,999",
    desc: "For students targeting top-tier institutions who want the very best support.",
    features: ["Everything in Complete", "Priority Counsellor Access", "5 Mock Interviews", "Application Management", "Post-Admission Support", "1-Year Follow-up"],
    highlight: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern py-20">
        <div className="container-custom text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Our Services</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Comprehensive, personalised admission counselling services for every student&apos;s unique journey.
          </p>
          <nav className="flex justify-center gap-2 mt-6 text-sm text-blue-200">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
            <h2 className="section-title mt-2">Everything You Need to Get Admitted</h2>
          </div>

          <div className="space-y-10">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || GraduationCap;
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className={`grid md:grid-cols-2 gap-10 items-center ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={idx % 2 !== 0 ? "md:order-2" : ""}>
                    <div className="bg-primary-50 text-primary-600 rounded-2xl p-4 w-fit mb-4">
                      <Icon size={32} />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-500 leading-relaxed mb-5">{service.longDesc}</p>
                    <Link href="/contact" className="btn-primary">
                      Get Started <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className={`bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-10 flex items-center justify-center min-h-[200px] ${idx % 2 !== 0 ? "md:order-1" : ""}`}>
                    <div className="text-center">
                      <div className="bg-primary-100 text-primary-700 rounded-full p-6 w-fit mx-auto mb-3">
                        <Icon size={48} />
                      </div>
                      <p className="font-semibold text-primary-800">{service.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">Pricing</span>
            <h2 className="section-title mt-2">Choose Your Package</h2>
            <p className="section-subtitle mx-auto">
              Transparent pricing. No hidden fees. Contact us for customised packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  pkg.highlight
                    ? "bg-primary-700 text-white shadow-xl scale-105"
                    : "bg-white border border-gray-200 shadow-md"
                }`}
              >
                {pkg.highlight && (
                  <span className="text-xs font-bold bg-accent text-white rounded-full px-3 py-1 w-fit mb-4">Most Popular</span>
                )}
                <h3 className={`font-heading font-bold text-2xl mb-1 ${pkg.highlight ? "text-white" : "text-gray-900"}`}>
                  {pkg.name}
                </h3>
                <p className={`font-bold text-4xl mb-3 ${pkg.highlight ? "text-accent-light" : "text-primary-700"}`}>
                  {pkg.price}
                </p>
                <p className={`text-sm mb-6 ${pkg.highlight ? "text-blue-200" : "text-gray-500"}`}>{pkg.desc}</p>
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${pkg.highlight ? "text-blue-100" : "text-gray-600"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${pkg.highlight ? "bg-accent-light" : "bg-primary-400"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={pkg.highlight ? "btn-accent justify-center" : "btn-primary justify-center"}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
