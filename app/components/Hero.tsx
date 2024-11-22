// src/components/Hero.tsx
import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full bg-gradient-to-br bg-gray-950 text-white"
    style={{
      backgroundImage: `
        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px',
    }}>
      <h1 className="text-5xl font-bold mb-6">SwiftUI Library</h1>
      <p className="text-lg mb-6 max-w-xl text-center">
        Discover beautifully designed, reusable SwiftUI components tailored for iOS developers. Simplify your development process with our curated library.
      </p>
      <div className="flex space-x-4">
        <Link legacyBehavior href="/ui-elements">
        <a
          className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium shadow-md hover:shadow-lg transition"
        >
          Explore Components
        </a>
        </Link>
        
        <a
          href="#"
          className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
