// CopyButton.tsx
import React, { useState } from 'react';

interface CopyButtonProps {
  code: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
    >
      {copied ? 'Copied!' : 'Copy Code'}
    </button>
  );
};

export default CopyButton;
