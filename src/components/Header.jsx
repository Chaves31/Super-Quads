import { useState } from "react";
import {
  FaTiktok,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0c0c0ec4] text-white shadow-md px-4 sm:px-6 py-3 relative z-50">
      <div className="flex justify-between  ml-[100px]">
        <div>
          <div className="flex items-center gap-6">
            <h1 className="text-red-600 text-xl font-bold italic font-serif">
              SUPER QUADS
            </h1>
            <nav className="gap-4 text-sm font-medium hidden sm:flex">
              <a href="#tour" className="hover:text-red-500 transition-colors">
                Tour
              </a>
              <a
                href="#galeria"
                className="hover:text-red-500 transition-colors"
              >
                Galería de Aventuras
              </a>
              <a
                href="#acerca"
                className="hover:text-red-500 transition-colors"
              >
                Acerca de
              </a>
            </nav>
          </div>
        </div>

        <button
          className="sm:hidden text-white text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="hidden sm:flex items-center gap-6 mr-[210px]">
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/tuNumero"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 hover:scale-110 transition-transform text-black"
            >
              <FaWhatsapp size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@tuUsuario"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 hover:scale-110 transition-transform text-black"
            >
              <FaTiktok size={16} />
            </a>
            <a
              href="https://instagram.com/tuUsuario"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 hover:scale-110 transition-transform text-black"
            >
              <FaInstagram size={16} />
            </a>
          </div>

          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-800 text-white px-6 py-2.5 rounded-full font-semibold transition-all">
            Reservar
            <FaArrowRight />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col sm:hidden mt-3 gap-4 bg-[#0c0c0ec4] p-4 rounded-md shadow-md">
          <a href="#tour" className="hover:text-red-500">
            Tour
          </a>
          <a href="#galeria" className="hover:text-red-500">
            Galería de Aventuras
          </a>
          <a href="#acerca" className="hover:text-red-500">
            Acerca de
          </a>

          <div className="flex gap-4 mt-2">
            <a
              href="https://wa.me/tuNumero"
              className="bg-white rounded-full p-2 text-black"
            >
              <FaWhatsapp size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@tuUsuario"
              className="bg-white rounded-full p-2 text-black"
            >
              <FaTiktok size={16} />
            </a>
            <a
              href="https://instagram.com/tuUsuario"
              className="bg-white rounded-full p-2 text-black"
            >
              <FaInstagram size={16} />
            </a>
          </div>

          <button className="mt-3 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-800 text-white px-5 py-2 rounded-full font-semibold transition-all">
            Reservar
            <FaArrowRight />
          </button>
        </div>
      )}
    </header>
  );
}
