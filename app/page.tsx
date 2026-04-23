import { Hero } from "@/components/Hero";
import { LMSSection } from "@/components/LMSSection";
import { TrainingSections } from "@/components/TrainingSections";
import { ManagementDevelopment } from "@/components/ManagementDevelopment";
import { CEOSection } from "@/components/CEOSection";
import { ConsultantSection } from "@/components/ConsultantSection";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <LMSSection />
      <TrainingSections />
      <ManagementDevelopment />
      <CEOSection />
      <ConsultantSection />
      <CTASection />
      <Testimonials />
    </>
  );
}
