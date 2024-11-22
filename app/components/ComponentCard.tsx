// src/components/ComponentCard.tsx
import React from 'react';

interface ComponentCardProps {
  title: string;
  description: string;
  link: string;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ title, description, link }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        className="text-blue-500 hover:text-blue-700 transition font-medium"
      >
        Learn More →
      </a>
    </div>
  );
};

export default ComponentCard;
