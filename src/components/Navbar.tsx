
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const links = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#080914]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">

        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/40 bg-purple-500/10 font-bold text-purple-400">
            ZN
          </div>
          <div>
            <p className="font-semibold">Zo Narindra</p>
            <p className="text-xs text-gray-500">Full Stack Developer</p>
          </div>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 transition hover:text-purple-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/cv.pdf"
          download
          className="hidden items-center gap-2 rounded-full border border-purple-500/40 px-5 py-2.5 text-sm text-purple-300 transition hover:bg-purple-500/10 lg:flex"
        >
          <Download size={16} />
          Télécharger CV
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-gray-300 lg:hidden"
          aria-label="Ouvrir le menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-[#0b0c19] p-6 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-gray-300 hover:text-purple-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download
            className="mt-4 flex items-center gap-2 text-purple-400"
          >
            <Download size={16} />
            Télécharger CV
          </a>
        </div>
      )}
    </header>
  );
}
