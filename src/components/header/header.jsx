import { useState } from "react";

import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white">
      {/* 🔵 Barra superior */}
      <div className="bg-[#002E6D] text-sm py-2 px-6 flex justify-between items-center">
        <span className="font-medium">
         Mobile Diesel Mechanic LLC. Contact Number: +17204994345
        </span>
        <div className="flex items-center space-x-4">
          
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="hover:text-gray-300">Blog</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
            <a href="#" className="hover:text-gray-300">Follow:</a>
            <div className="flex space-x-2">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔴 Barra principal */}
      <div className="backdrop-blur-sm bg-black/40 px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          
        </div>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-[#E41E26] transition">Transmission Services</a>
          <a href="#" className="hover:text-[#E41E26] transition">Auto Care & Repair</a>
          <a href="#" className="hover:text-[#E41E26] transition">Fleet</a>
          <a href="#" className="hover:text-[#E41E26] transition">Warranty</a>
          <a href="#" className="hover:text-[#E41E26] transition">Careers</a>
        </nav>

        {/* Botón */}
        <button className="hidden md:block bg-white text-[#E41E26] hover:bg-[#E41E26] hover:text-white px-5 py-2 rounded-lg font-semibold shadow-md transition">
          Find My Mechanic
        </button>

        {/* Botón móvil */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-black/80 backdrop-blur-md text-white space-y-4 py-6">
          <a href="#" className="hover:text-[#E41E26]">Transmission Services</a>
          <a href="#" className="hover:text-[#E41E26]">Auto Care & Repair</a>
          <a href="#" className="hover:text-[#E41E26]">Fleet</a>
          <a href="#" className="hover:text-[#E41E26]">Warranty</a>
          <a href="#" className="hover:text-[#E41E26]">Careers</a>
          <button className="bg-[#E41E26] px-6 py-2 rounded-lg hover:bg-[#c11a1e] transition">
            Find My Mechanic
          </button>
        </div>
      )}
    </header>
  );
}
