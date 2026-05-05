import { Shield, Users, BarChart3, Headphones, Award, Clock } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Dedicated Counsellor",
    desc: "Every student gets a personal counsellor who stays with them from Day 1 to final admission.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Shortlisting",
    desc: "We use real admission data and a proprietary scoring model to maximise your chances.",
  },
  {
    icon: Shield,
    title: "Proven Track Record",
    desc: "98% success rate across 2500+ students placed in top colleges across India.",
  },
  {
    icon: Headphones,
    title: "Continuous Support",
    desc: "Unlimited sessions, WhatsApp access and email support throughout the entire process.",
  },
  {
    icon: Award,
    title: "Expert Team",
    desc: "Our counsellors are alumni of top institutions with years of admission consulting experience.",
  },
  {
    icon: Clock,
    title: "Never Miss a Deadline",
    desc: "We track every application deadline so you never lose an opportunity due to late submission.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">Why SikshaMarg</span>
            <h2 className="section-title mt-2 mb-4">
              The Right Guidance Can Change Your Future
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Admission counselling is not just about filling forms — it&apos;s about helping you discover your strengths, match them with the right opportunities, and present your best self to colleges.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              With offices in Lucknow and Mumbai and a full online service, SikshaMarg is accessible to every ambitious student in India.
            </p>
            <div className="flex gap-4">
              <div className="text-center bg-primary-50 rounded-2xl px-8 py-5">
                <p className="font-bold text-3xl text-primary-700">12+</p>
                <p className="text-sm text-gray-500 mt-1">Years Experience</p>
              </div>
              <div className="text-center bg-accent/10 rounded-2xl px-8 py-5">
                <p className="font-bold text-3xl text-accent-dark">98%</p>
                <p className="text-sm text-gray-500 mt-1">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="bg-primary-50 text-primary-600 rounded-xl p-2.5 h-fit shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
