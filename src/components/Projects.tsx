
import { motion } from "framer-motion";
import { ArrowUpRight, Layers } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm tracking-[0.3em] text-purple-400">PORTFOLIO</p>
        <h2 className="mt-3 text-4xl font-bold">Mes projets</h2>
        <p className="mt-4 text-gray-400">
          Quelques réalisations et expériences techniques.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111322] transition hover:border-purple-500/40"
            >
              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-purple-900/30 via-[#111322] to-blue-900/20">
                <Layers size={65} className="text-purple-400/60 transition group-hover:scale-110 group-hover:text-purple-400" />
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-400">{project.category}</span>
                  <ArrowUpRight size={18} className="text-gray-500" />
                </div>

                <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>
                <p className="mt-3 min-h-14 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-purple-500/20 bg-purple-500/5 px-3 py-1.5 text-xs text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
