import Link from "next/link";
import { GraduationCap, Globe, FileText, Search, CheckSquare, MessageCircle, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Globe,
  FileText,
  Search,
  CheckSquare,
  MessageCircle,
};

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="section-title mt-2">Our Counselling Services</h2>
          <p className="section-subtitle mx-auto">
            End-to-end admission support so you can focus on preparing — we handle the rest.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || GraduationCap;
            return (
              <div key={service.slug} className="card group hover:border-primary-100 border border-transparent">
                <div className="bg-primary-50 text-primary-600 rounded-xl p-3 w-fit mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-primary-600 hover:text-primary-800 font-medium text-sm flex items-center gap-1 transition-colors"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
