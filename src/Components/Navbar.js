import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-blue-400 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          Ganesh Karri
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-20">
          <a href="#about" className="text-white font-medium hover:underline">About</a>
          <a href="#skills" className="text-white font-medium hover:underline">Skills</a>
          <a href="#experience" className="text-white font-medium hover:underline">Experience</a>
          <a href="#projects" className="text-white font-medium hover:underline">Projects</a>
          <a href="#contact" className="text-white font-medium hover:underline">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-5 px-6 pb-4">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-white">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-white">Skills</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="text-white">Experience</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-white">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-white">Contact</a>
        </div>
      )}
    </nav>
  );
}
