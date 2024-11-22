const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-950 text-gray-400 text-center py-4">
      <p className="text-sm">
        © 2024 SwiftUI Library. All rights reserved. |{' '}
        <a
          href="#"
          className="text-blue-500 hover:text-blue-400 transition"
        >
          Privacy Policy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
