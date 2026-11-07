
import { motion } from "framer-motion";
import { Code2, Database, Server, Cloud } from "lucide-react";

const groups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Laravel", "PHP", "Symfony", "Python", "REST API"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQL", "PostGIS"],
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "GitLab CI/CD", "Linux", "Git"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-[#0b0c18] px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm tracking-[0.3em] text-purple-400">TECHNOLOGIES</p>
        <h2 className="mt-3 text-4xl font-bold">Mes compétences</h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map(({ title, icon: Icon, skills }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-[#111322] p-6 transition hover:border-purple-500/30"
            >
              <Icon size={28} className="text-purple-400" />
              <h3 className="mt-5 font-semibold">{title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-xs text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
