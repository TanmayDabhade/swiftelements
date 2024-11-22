// src/pages/index.tsx
import React from 'react';
import Navbar from '../app/components/Navbar';
import Hero from '../app/components/Hero';
import Footer from '../app/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
