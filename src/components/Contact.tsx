
import { ArrowUpRight, Mail, Phone, Send } from "lucide-react";

function SocialIcon({ name }: { name: "github" | "linkedin" | "gitlab" }) {
  const paths = {
    github: <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.6 1.2 15 3a13.4 13.4 0 0 0-7 0C5.4 1.2 4.2 1.5 4.2 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7A3.4 3.4 0 0 0 8 18v4" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    gitlab: <><path d="m12 22 8.8-6.4L18 3.5a.8.8 0 0 0-1.5 0l-1.9 5.8H9.4L7.5 3.5a.8.8 0 0 0-1.5 0l-2.8 12.1L12 22Z" /><path d="M3.2 15.6h17.6M9.4 9.3 12 22l2.6-12.7" /></>,
  };

  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-purple-400">{paths[name]}</svg>;
}

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-[#111322] p-8 md:p-14">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm tracking-[0.3em] text-purple-400">CONTACT</p>
            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Un projet en tête ?
              <br />
              <span className="text-purple-400">Parlons-en.</span>
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-gray-400">
              Une opportunité professionnelle, une collaboration ou
              simplement envie d'échanger ? N'hésite pas à me contacter.
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:zonarindramika@gmail.com" className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-purple-500/40">
              <Mail className="text-purple-400" />
              <span className="flex-1 text-sm">zonarindramika@gmail.com</span>
              <ArrowUpRight size={17} />
            </a>
            <a href="tel:+384945533" className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-purple-500/40">
              <Phone className="text-purple-400" />
              <span className="flex-1 text-sm">+38 49 455 33</span>
              <ArrowUpRight size={17} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-purple-500/40">
              <SocialIcon name="github" />
              <span className="flex-1 text-sm">GitHub</span>
              <ArrowUpRight size={17} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-purple-500/40">
              <SocialIcon name="linkedin" />
              <span className="flex-1 text-sm">LinkedIn</span>
              <ArrowUpRight size={17} />
            </a>
            <a href="https://gitlab.com/" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-purple-500/40">
              <SocialIcon name="gitlab" />
              <span className="flex-1 text-sm">GitLab</span>
              <ArrowUpRight size={17} />
            </a>
            <a href="mailto:zonarindramika@gmail.com" className="flex items-center justify-center gap-3 rounded-xl bg-purple-600 p-4 font-semibold transition hover:bg-purple-500">
              <Send size={17} /> Envoyer un message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
