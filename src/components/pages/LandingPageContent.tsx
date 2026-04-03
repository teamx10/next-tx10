import { CaseStudiesPreview } from '@/components/sections/landing/CaseStudiesPreview';
import { CTASection } from '@/components/sections/landing/CTASection';
import { HeroSection } from '@/components/sections/landing/HeroSection';
import { IndustryInsights } from '@/components/sections/landing/IndustryInsights';
import { PhasesOverview } from '@/components/sections/landing/PhasesOverview';
import { ProblemSection } from '@/components/sections/landing/ProblemSection';
import { ProofBar } from '@/components/sections/landing/ProofBar';
import { SpeedComparison } from '@/components/sections/landing/SpeedComparison';
import { TrustedBySection } from '@/components/sections/landing/TrustedBySection';

export function LandingPageContent() {
  return (
    <>
      <HeroSection />
      <ProofBar />
      <TrustedBySection />
      <ProblemSection />
      <IndustryInsights />
      <PhasesOverview />
      <CaseStudiesPreview />
      <SpeedComparison />
      <CTASection />
    </>
  );
}
