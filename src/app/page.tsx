import Hero            from "@/components/sections/Hero";
import StatsBar        from "@/components/sections/StatsBar";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUs           from "@/components/sections/WhyUs";
import ProcessSection  from "@/components/sections/ProcessSection";
import Testimonials    from "@/components/sections/Testimonials";
import FaqSection      from "@/components/sections/FaqSection";
import CTABanner       from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <WhyUs />
      <ProcessSection />
      <Testimonials />
      <FaqSection />
      <CTABanner />
    </>
  );
}
