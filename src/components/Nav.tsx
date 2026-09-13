import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="relative container mx-auto h-16 px-4 flex items-center justify-between">

        {/* Logo */}
        <img
          src={Logo}
          alt="DevStack"
          className="w-28"
        />

        {/* Center Menu - Desktop */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm text-gray-700">
          <li>
            <a
              href="#"
              className="text-pink-600 hover:text-pink-700 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-pink-600 transition"
            >
              Technologies
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-pink-600 transition"
            >
              Project
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-pink-600 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-pink-600 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right Buttons - Desktop */}
        <div className="hidden md:flex ml-auto items-center gap-5">
          <button
            type="button"
            className="text-sm text-gray-700 hover:text-pink-600 transition"
          >
            Sign In
          </button>

          <button
            type="button"
            className="bg-pink-600 hover:bg-pink-700 text-white text-sm rounded-full px-5 py-2 transition"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl text-gray-700"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4">
          <ul className="flex flex-col gap-4 text-sm">

            <li>
              <a
                href="#"
                className="block text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block text-gray-700 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block text-gray-700 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Project
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block text-gray-700 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block text-gray-700 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>

            {/* Mobile Buttons */}
            <li className="flex items-center gap-5 border-t border-gray-100 pt-4">
              <button
                type="button"
                className="text-sm text-gray-700 hover:text-pink-600"
              >
                Sign In
              </button>

              <button
                type="button"
                className="rounded-full bg-pink-600 px-5 py-2 text-sm text-white hover:bg-pink-700"
              >
                Sign Up
              </button>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;