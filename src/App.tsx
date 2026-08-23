import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(): React.JSX.Element {
  return (
    <div className="font-sans text-on-surface antialiased min-h-screen flex flex-col selection:bg-robotic-cyan/30">
      <Header />

      <main className="flex-grow flex flex-col gap-16 px-6 md:px-12 py-12">
        <Hero />
        <FeaturedWork />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
