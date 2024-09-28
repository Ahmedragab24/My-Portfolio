import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import SoftSkills from "@/components/sections/SoftSkills";
import TechSkills from "@/components/sections/TechSkills";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <TechSkills />
      <SoftSkills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
