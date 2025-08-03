import React from "react";
import Hero from "./components/Hero";
import TalentCategories from "./components/TalentCategories";
import AIExpertMatching from "./components/AIExpertMatching";
import FeaturedTalent from "./components/FeaturedTalent";
import TechnologyStack from "./components/TechnologyStack";
import Solutions from "./components/Solutions";
import WhySection from "./components/WhySection";
import HowItWorks from "./components/HowItWorks";
import Development from "./components/Development";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import JobBoard from "./components/JobBoard";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";

function Home() {
  return (
    <div>
      <Hero />
      <TalentCategories />
      <AIExpertMatching />
      <FeaturedTalent />
      <TechnologyStack />
      <Solutions />
      <WhySection />
      <HowItWorks />
      <Development />
      <CaseStudies />
      <Testimonials />
      <JobBoard />
      <FAQ />
      <FinalCTA />
    </div>
  );
}

export default Home;
