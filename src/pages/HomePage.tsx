import { Hero } from '../components/sections/Hero/Hero';
import { Services } from '../components/sections/Services/Services';
import { InsightsSection } from '../components/sections/Insights/InsightsSection';

import { Footer } from '../components/layout';

export const HomePage = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <Hero />
      <Services />
      <InsightsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
