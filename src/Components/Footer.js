// Footer.js
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Icons */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://github.com/ganeshk-git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ganesh-karri"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:ganeshkarri4168@gmail.com"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Right Side - Text */}
        <p className="text-sm">© 2025 Ganesh Karri. All rights reserved.</p>
      </div>
    </footer>
  );
}
