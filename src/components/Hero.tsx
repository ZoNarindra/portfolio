
import { motion } from "framer-motion";
import { ArrowRight, BoxesLinkedIcon, Code2, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-xs text-purple-300">
              Disponible pour de nouvelles opportunités
            </span>
          </div>

          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-gray-400">
            BONJOUR, JE SUIS
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Zo Narindra Rakoto.
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Developer.
            </span>
          </h1>

          <div className="mt-6 flex items-center gap-3 text-gray-300">
            <Code2 className="text-purple-400" size={20} />
            <span>Full Stack Developer</span>
            <span className="text-gray-600">|</span>
            <span>DevOps</span>
          </div>

          <p className="mt-6 max-w-lg text-base leading-8 text-gray-400">
            Je conçois des applications web modernes, performantes et
            évolutives. Passionné par le développement, l'automatisation
            et les technologies cloud.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-4 text-sm font-semibold shadow-lg shadow-purple-500/20 transition hover:scale-105"
            >
              Voir mes projets
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>

            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-3 rounded-full border border-white/10 px-7 py-4 text-sm font-semibold text-gray-300 transition hover:border-purple-500/40 hover:bg-white/5"
            >
              <Download size={18} />
              Télécharger CV
            </a>
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 p-3 text-gray-400 transition hover:border-purple-500/40 hover:text-purple-400"
            >
              <BoxesLinkedIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 p-3 text-gray-400 transition hover:border-purple-500/40 hover:text-purple-400"
            >
              <BoxesLinkedIcon size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center"
        >
          <div className="absolute h-72 w-72 rounded-full border border-purple-500/20" />
          <div className="absolute h-96 w-96 rounded-full border border-purple-500/10" />

          <div className="absolute h-72 w-72 rounded-full bg-purple-600/20 blur-[90px]" />

          <div className="relative h-72 w-72 overflow-hidden rounded-full border border-blue-300/40 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 shadow-[0_0_80px_rgba(59,130,246,0.3)] sm:h-80 sm:w-80">
            <img
              src="/Mika%20Rakoto.jpg"
              alt="Portrait de Mika Rakoto"
              className="h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
          </div>

          <div className="absolute right-0 top-16 rounded-xl border border-white/10 bg-[#111322]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
            <p className="text-xs text-gray-400">Frontend</p>
            <p className="mt-1 font-semibold text-blue-400">React + TS</p>
          </div>

          <div className="absolute bottom-16 left-0 rounded-xl border border-white/10 bg-[#111322]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
            <p className="text-xs text-gray-400">Backend</p>
            <p className="mt-1 font-semibold text-purple-400">Laravel</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
