import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactLegalSection from "@/components/contact/ContactLegalSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactCtaSection from "@/components/contact/ContactCtaSection";
import SectionWrapper from "@/components/SectionWrapper";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <SectionWrapper>
      <ContactHeroSection />
      </SectionWrapper>
      <ContactInfoSection />
      <ContactLegalSection />
      <ContactFormSection />
      <ContactCtaSection />
    </main>
  );
}