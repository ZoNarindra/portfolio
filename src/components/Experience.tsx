
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const experiences = [
  {
    date: "2023 — Aujourd'hui",
    title: "Développeur informatique",
    company: "Dirickx Guard",
    description: "Développement et maintenance d'applications internes, notamment GRH/Admin et TLS. Amélioration des processus métier et développement de nouvelles fonctionnalités.",
    icon: BriefcaseBusiness,
  },
  {
    date: "2022 — 2023",
    title: "Master professionnel en informatique",
    company: "ENI",
    description: "Formation supérieure en informatique et développement logiciel.",
    icon: GraduationCap,
  },
  {
    date: "2018 — 2021",
    title: "Licence professionnelle",
    company: "École Nationale d’Informatique (ENI)",
    description: "Formation en informatique générale.",
    icon: GraduationCap,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-[#0b0c18] px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm tracking-[0.3em] text-purple-400">PARCOURS</p>
        <h2 className="mt-3 text-4xl font-bold">Mon expérience</h2>

        <div className="mt-12 space-y-8 border-l border-purple-500/30 pl-8">
          {experiences.map(({ date, title, company, description, icon: Icon }) => (
            <article key={title} className="relative rounded-2xl border border-white/10 bg-[#111322] p-7">
              <span className="absolute -left-[38px] top-8 h-3 w-3 rounded-full bg-purple-400 ring-4 ring-[#0b0c18]" />
              <div className="flex items-center gap-3 text-purple-400">
                <Icon size={20} />
                <span className="text-xs">{date}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-purple-300">{company}</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
