// src/pages/index.tsx
import React from "react";
import Navbar from "../app/components/Navbar";
import Hero from "../app/components/Hero";
import Footer from "../app/components/Footer";
// import ComponentCard from "../app/components/ComponentCard";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow">
        <Hero />
      </div>
      {/* <div className="container  mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ComponentCard
            title="Button"
            description="A simple button component."
            link="/components/button"
          />
          <ComponentCard
            title="Input"
            description="A simple input component."
            link="/components/input"
          />
          <ComponentCard
            title="Card"
            description="A simple card component."
            link="/components/card"
          />
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
