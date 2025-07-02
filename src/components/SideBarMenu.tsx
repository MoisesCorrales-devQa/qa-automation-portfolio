import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About me", href: "/about-me" },
  { label: "Contact", href: "/contact-info" },
];

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menú fijo lateral (desktop) */}
      <nav className="hidden md:fixed md:inset-y-0 md:left-0 md:flex md:flex-col md:w-56 md:bg-black/50 md:backdrop-blur-md md:py-12 md:px-2 md:items-center md:gap-8 z-30">
        <div className="text-2xl font-extrabold tracking-widest text-blue-400 mb-10 select-none">MC</div>
        <ul className="flex flex-col gap-6 w-full">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block w-full px-5 py-2 rounded-xl font-semibold text-lg text-blue-100 hover:text-white hover:bg-blue-600/80 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menú hamburguesa (móvil) */}
      <div className="fixed top-6 left-6 z-40 md:hidden">
        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="text-blue-400 text-3xl focus:outline-none"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Drawer lateral móvil */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#10162f] shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full py-10 px-8 gap-10">
          <div className="text-2xl font-extrabold tracking-widest text-blue-400 select-none">MC</div>
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block px-2 py-2 rounded-lg font-semibold text-lg text-blue-100 hover:text-white hover:bg-blue-600/80 transition"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fondo oscurecido al abrir menú móvil */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}