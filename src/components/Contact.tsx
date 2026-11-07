
import { ArrowUpRight, BoxesLinkedIcon, Mail, Send } from "lucide-react";

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
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-purple-500/40">
              <BoxesLinkedIcon className="text-purple-400" />
              <span className="flex-1 text-sm">GitHub</span>
              <ArrowUpRight size={17} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-purple-500/40">
              <BoxesLinkedIcon className="text-purple-400" />
              <span className="flex-1 text-sm">LinkedIn</span>
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
