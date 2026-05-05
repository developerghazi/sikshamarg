import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Target, Eye, Heart } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SikshaMarg — our story, mission, and the expert team behind 2500+ successful admissions.",
};

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  /** Tailwind object-position for circular crop (lower % = more headroom). */
  objectPositionClass?: string;
};

const team: TeamMember[] = [
  {
    name: "Tahshin Khan",
    role: "Founder & Head Counsellor",
    bio: "Integral University Lucknow alumna with 4+ years of admission counselling experience. Has helped 1000+ students secure seats in top institutions.",
    photo: "/team/tahshin-khan.jpeg",
    objectPositionClass: "object-[center_10%]",
  },
  {
    name: "Waqar Khan",
    role: "Co-Founder & CTO",
    bio: "B.Tech from WBUT Kolkata with 4+ years of experience in web development and software engineering. Expert in B.tech, BBA, B.Com and MBA applications.",
    photo: "/team/waqar-khan.jpeg",
    objectPositionClass: "object-[center_4%]",
  },
];

const values = [
  { icon: Target, title: "Our Mission",  desc: "To make quality college admission guidance accessible to every ambitious student in India, regardless of geography." },
  { icon: Eye,    title: "Our Vision",   desc: "A future where no deserving student misses their dream college due to lack of proper guidance." },
  { icon: Heart,  title: "Our Values",   desc: "Integrity, personalisation, and genuine care for each student's long-term success — not just admission numbers." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-hero-pattern py-20">
        <div className="container-custom text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">About SikshaMarg</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            We&apos;re a team of passionate educators and counsellors dedicated to helping students find their right path.
          </p>
          <nav className="flex justify-center gap-2 mt-6 text-sm text-blue-200">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">About</span>
          </nav>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="section-title mt-2 mb-5">5 Years of Shaping Student Futures</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              SikshaMarg was founded in 2012 in Lucknow with a simple belief: every student deserves personalised, honest admission guidance — not a one-size-fits-all approach.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              What started as a small counselling centre has grown into a full-service admission consulting firm with offices in Lucknow and Mumbai, and an online platform serving students across India.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Over 2,500 students later, our commitment remains the same: understand each student deeply, match them with the right opportunities, and support them every step of the way.
            </p>
            <ul className="space-y-3">
              {["Founded in 2012 in Lucknow", "Expanded to Mumbai in 2018", "Launched Online Counselling in 2020", "2500+ students placed across India"].map((point) => (
                <li key={point} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-primary-600 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
              alt="SikshaMarg team"
              width={600}
              height={450}
              className="rounded-2xl shadow-xl object-cover w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white rounded-2xl p-5 shadow-lg hidden md:block">
              <p className="font-bold text-3xl">2500+</p>
              <p className="text-blue-100 text-sm">Students Placed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card text-center border border-gray-100">
                <div className="bg-primary-50 text-primary-600 rounded-full p-4 w-fit mx-auto mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">Meet the Team</span>
            <h2 className="section-title mt-2">The Experts Behind Your Success</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="card border border-gray-100 text-center group">
                <div className="mx-auto mb-5 size-44 sm:size-52 aspect-square overflow-hidden rounded-full border-4 border-primary-50 shadow-sm transition-colors group-hover:border-primary-200">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={208}
                    height={208}
                    className={`h-full w-full object-cover ${member.objectPositionClass ?? "object-center"}`}
                  />
                </div>
                <h4 className="font-heading font-semibold text-gray-900">{member.name}</h4>
                <p className="text-primary-600 text-xs font-medium mt-1 mb-3">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
