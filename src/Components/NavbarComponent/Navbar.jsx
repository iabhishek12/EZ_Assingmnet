
import React, { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import logo from '../../assets/logo/VFilms Logo.png'

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-transparent  ">
      <nav className="w-full flex justify-between items-center px-6 py-4 ">
        {/* Left Logo */}
        <div className="flex items-center justify-center">
          <img src={logo} alt="VFilms Logo" className="h-[40px]" />
        </div>

        {/* Right Side: Menu (conditionally visible) + Toggle */}
        <div className="flex items-center gap-6">
          {/* Menu Items - show horizontally left of toggle */}
          {isOpen && (
            <ul className="flex flex-row items-center gap-8 text-gray-800 text-lg font-medium">
              <li>
                <a href="#services" className="hover:text-[#db4c1d] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-[#db4c1d] transition">
                  Their Stories
                </a>
              </li>
              <li>
                <a href="#ourstory" className="hover:text-[#db4c1d] transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#varnan" className="hover:text-[#db4c1d] transition">
                  Varnan
                </a>
              </li>
              {/* Let’s Talk Button */}
              <li>
                <button className="flex items-center gap-2 bg-[#db4c1d] text-white px-5 py-2 rounded-full hover:bg-[#c73f10] transition">
                  Let’s Talk <Mail size={18} />
                </button>
              </li>
            </ul>
          )}

          {/* Toggle Button - Always visible */}
          <button
            className="text-[#1f2a37] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
    </header>
)}

export default Navbar