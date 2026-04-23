import { CTA } from './_components/CTA';
import { Features } from './_components/Features';
import { Hero } from './_components/Hero';
import { HowItWorks } from './_components/HowItWorks';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <Features />
      <CTA />
    </div>
  );
};

export default HomePage;
