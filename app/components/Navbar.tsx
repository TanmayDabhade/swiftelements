import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-950 text-gray-300 shadow-md sticky top-0 z-50">
      <div className="text-2xl font-bold text-white">SwiftUI Library</div>
      <ul className="flex space-x-6">
        <li>
          <Link legacyBehavior href="/">
            <a className="hover:text-white transition">Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/ui-elements">
            <a className="hover:text-white transition">Components</a>
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="disabled:opacity-100 hover:text-gray-600 transition"
          >
            Docs
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
