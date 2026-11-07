
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <a href="#home" className="font-semibold">
          ZN <span className="text-purple-400">.</span>
        </a>

        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Zo Narindra. Tous droits réservés.
        </p>

        <a href="#home" className="flex items-center gap-2 text-xs text-gray-400 hover:text-purple-400">
          Retour en haut <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}
