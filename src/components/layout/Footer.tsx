import Link from "next/link";
import { GraduationCap, Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { siteConfig, navLinks, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary-600 text-white rounded-lg p-2">
                <GraduationCap size={20} />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Siksha<span className="text-accent">Marg</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              Expert college admission counselling for students in Lucknow, Mumbai and across India. Your dream college is one step away.
            </p>
            <div className="flex gap-3">
              {[
                { href: siteConfig.socials.instagram, Icon: Instagram },
                { href: siteConfig.socials.facebook,  Icon: Facebook },
                { href: siteConfig.socials.linkedin,  Icon: Linkedin },
                { href: siteConfig.socials.youtube,   Icon: Youtube },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary-800 hover:bg-primary-600 text-white rounded-lg p-2 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-accent transition-colors">
                  Book Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="text-sm text-gray-400 hover:text-accent transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <div className="text-sm text-gray-400">
                  <p className="text-white font-medium text-xs mb-0.5">Lucknow</p>
                  {siteConfig.address.lucknow}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <div className="text-sm text-gray-400">
                  <p className="text-white font-medium text-xs mb-0.5">Mumbai</p>
                  {siteConfig.address.mumbai}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-gray-400 hover:text-accent transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-gray-400 hover:text-accent transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="container-custom py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SikshaMarg. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms"          className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
