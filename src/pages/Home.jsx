import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import CareerSection from "../components/CareerSection";
import BusinessLines from "../components/BusinessLines";
import ManTechSection from "../components/ManTechSection";
import CtaBanner from "../components/CtaBanner";

const Home = () => {
  return (
   <>
    <Hero />
    <AboutSection/>
    <BusinessLines/>
    <CareerSection/>
    <ManTechSection />
    <CtaBanner />
   </>
    )
};
    export default Home;