
import { motion } from "framer-motion";
import { UserRound, Target, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm tracking-[0.3em] text-purple-400">À PROPOS</p>
        <h2 className="mt-3 text-4xl font-bold">
          Qui suis-je<span className="text-purple-400"> ?</span>
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
          >
            <UserRound className="mb-5 text-purple-400" size={32} />
            <h3 className="text-xl font-semibold">Développeur passionné</h3>
            <p className="mt-4 leading-8 text-gray-400">
              Ingénieur en informatique, je développe des applications
              web et des solutions métier. J'aime transformer des idées
              en produits utiles, fiables et agréables à utiliser.
            </p>
            <p className="mt-4 leading-8 text-gray-400">
              Mon approche combine développement Full Stack,
              automatisation et bonnes pratiques DevOps.
            </p>
          </motion.div>

          <div className="grid gap-5">
            {[
              { icon: Target, title: "Mon objectif", text: "Créer des solutions efficaces qui répondent à de vrais besoins." },
              { icon: Rocket, title: "Ma vision", text: "Construire des applications évolutives et faciles à maintenir." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <Icon className="mb-3 text-purple-400" size={26} />
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
