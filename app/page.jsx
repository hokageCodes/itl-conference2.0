import AboutSection from "@/components/about-us/About";
import FaqSection from "@/components/faqs/FAQsSection";
import Hero from "@/components/hero/Hero";
import PartnersSection from "@/components/partners/PartnersSection";
import SpeakerIntroSection from "@/components/speaker-intro/SpeakerIntroSection";
import WhyAttend from "@/components/why-attend/WhyAttend";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersSection />
      <AboutSection />
      <WhyAttend />
      <SpeakerIntroSection />
      <FaqSection />
    </>
  );
}
