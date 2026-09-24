import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Zap,
  ChevronRight,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 group"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 shadow-md transition-all duration-300 group-hover:rotate-6 group-hover:shadow-yellow-200">
            <Zap
              size={25}
              strokeWidth={2.8}
              className="fill-black text-black"
            />
          </div>

          <div className="leading-none">
            <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
              Electric<span className="text-yellow-500">Pro</span>
            </h1>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[2px] text-gray-500">
              Electrical Services
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-yellow-400 text-black shadow-sm"
                    : "text-gray-600 hover:bg-yellow-50 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Call Button */}
        <a
          href="tel:+923001234567"
          className="hidden items-center gap-3 rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:shadow-yellow-200 md:flex"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-black">
            <Phone size={17} />
          </span>

          <span>
            <small className="block text-[10px] font-medium opacity-70">
              Need Help?
            </small>
            Call Now
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 shadow-sm transition hover:bg-yellow-400 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[450px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 py-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-yellow-400 text-black"
                      : "text-gray-600 hover:bg-yellow-50 hover:text-black"
                  }`}
                >
                  {link.name}

                  <ChevronRight size={18} />
                </Link>
              );
            })}

            {/* Mobile Call */}
            <a
              href="tel:+923001234567"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3.5 font-bold text-white transition hover:bg-yellow-400 hover:text-black"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;