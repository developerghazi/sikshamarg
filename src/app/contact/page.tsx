"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { siteConfig } from "@/lib/data";
import { useState } from "react";

type FormData = {
  name:    string;
  email:   string;
  phone:   string;
  city:    string;
  service: string;
  message: string;
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    lines: [siteConfig.phone, "Mon–Sat, 9am–7pm"],
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    title: "Email",
    lines: [siteConfig.email, "We reply within 24 hours"],
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    title: "Lucknow Office",
    lines: [siteConfig.address.lucknow],
    href: "#",
  },
  {
    icon: MapPin,
    title: "Mumbai Office",
    lines: [siteConfig.address.mumbai],
    href: "#",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        setServerError(result.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      reset();
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern py-20">
        <div className="container-custom text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Book your free consultation or reach out with any questions. We&apos;re here to help.
          </p>
          <nav className="flex justify-center gap-2 mt-6 text-sm text-blue-200">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </nav>
        </div>
      </section>

      {/* Main */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom grid lg:grid-cols-3 gap-10">

          {/* Contact Info */}
          <div className="space-y-5">
            <div>
              <h2 className="font-heading font-bold text-2xl text-gray-900 mb-2">Get in Touch</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Reach us through any of the channels below, or fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {contactInfo.map(({ icon: Icon, title, lines, href }) => (
              <a
                key={title}
                href={href}
                className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all group"
              >
                <div className="bg-primary-50 text-primary-600 rounded-lg p-2.5 h-fit group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{title}</p>
                  {lines.map((line) => (
                    <p key={line} className="text-gray-500 text-xs mt-0.5">{line}</p>
                  ))}
                </div>
              </a>
            ))}

            <div className="p-4 bg-primary-700 rounded-xl text-white">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} className="text-accent" />
                <p className="font-semibold text-sm">Office Hours</p>
              </div>
              <p className="text-blue-200 text-xs">Monday – Saturday: 9:00 AM – 7:00 PM</p>
              <p className="text-blue-200 text-xs mt-1">Sunday: 10:00 AM – 2:00 PM (by appointment)</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="bg-green-50 text-green-600 rounded-full p-6 mb-4">
                  <Send size={40} />
                </div>
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-6">
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-primary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-6">
                  Book Your Free Consultation
                </h3>

                {/* Server error banner */}
                {serverError && (
                  <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-5 text-sm">
                    <AlertCircle size={18} className="shrink-0" />
                    {serverError}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                      })}
                      placeholder="you@email.com"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      {...register("phone", { required: "Phone number is required" })}
                      placeholder="+91920521907"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Your City</label>
                    <input
                      {...register("city")}
                      placeholder="e.g. Lucknow, Mumbai"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                    />
                  </div>

                  {/* Service */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Interested In</label>
                    <select
                      {...register("service")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option>College Admission Counselling</option>
                      <option>Online Admission Counselling</option>
                      <option>SOP &amp; LOR Assistance</option>
                      <option>University Shortlisting</option>
                      <option>Application Management</option>
                      <option>Interview Preparation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Tell us about your goals, target colleges, or any specific questions..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>Send Message & Book Consultation <Send size={16} /></>
                      )}
                    </button>
                    <p className="text-xs text-gray-400 text-center mt-3">
                      By submitting, you agree to be contacted by our team. We respect your privacy.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-64 bg-gray-200 relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTYnNDYuMyJF!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SikshaMarg Lucknow Office"
        />
      </section>
    </>
  );
}