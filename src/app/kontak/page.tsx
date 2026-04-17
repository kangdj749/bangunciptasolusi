import ContactHeroSection from "@/components/contact/ContactHeroSection";

import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactCtaSection from "@/components/contact/ContactCtaSection";
import SectionWrapper from "@/components/SectionWrapper";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <SectionWrapper>
      <ContactHeroSection />
      </SectionWrapper>
      
      <ContactFormSection />
      <ContactCtaSection />
    </main>
  );
}