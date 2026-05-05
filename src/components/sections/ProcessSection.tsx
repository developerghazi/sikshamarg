const steps = [
  { step: "01", title: "Free Consultation",     desc: "Book a free 30-minute session with our counsellor to discuss your profile and goals." },
  { step: "02", title: "Profile Assessment",    desc: "We evaluate your academics, interests and aspirations to create a personalised strategy." },
  { step: "03", title: "College Shortlisting",  desc: "We prepare a balanced list of reach, match and safety colleges best suited to you." },
  { step: "04", title: "Application Support",   desc: "Full assistance with forms, SOP, LOR and document preparation." },
  { step: "05", title: "Interview Prep",         desc: "Mock sessions and coaching to make sure you ace every admission interview." },
  { step: "06", title: "Admission Secured! 🎉", desc: "We celebrate with you and assist with post-admission formalities." },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="section-title mt-2">Our Simple 6-Step Process</h2>
          <p className="section-subtitle mx-auto">
            From first call to final admission — a clear, stress-free journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={s.step} className="relative card border border-gray-100">
              <span className="absolute -top-4 left-6 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Step {s.step}
              </span>
              <div className="mt-4">
                <h3 className="font-heading font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary-300 text-xl z-10">›</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
