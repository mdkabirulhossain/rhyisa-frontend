import { CTA } from './_components/CTA';
import { Features } from './_components/Features';
import { Hero } from './_components/Hero';
import { HowItWorks } from './_components/HowItWorks';
import LogoMarquee from './_components/LogoMarquee';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LogoMarquee />
      <HowItWorks />
      <Features />
      <CTA />
    </div>
  );
};

export default HomePage;
