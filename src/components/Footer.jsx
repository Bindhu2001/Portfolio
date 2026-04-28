import { Github, Linkedin, Mail, Heart, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-bg-deep text-white section-padding relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-24">
          <div className="space-y-10 text-center lg:text-left">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              READY TO <br />
              <span className="text-gradient">CONNECT?</span>
            </h2>
            <p className="text-slate-400 text-xl font-medium max-w-md mx-auto lg:mx-0">
              I'm always looking for ambitious projects and clever collaborations.
            </p>
            <div className="flex justify-center lg:justify-start items-center gap-10">
              <a href="https://github.com/Bindhu2001" className="text-slate-400 hover:text-brand transition-all scale-125">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/bindu-vijayan/" className="text-slate-400 hover:text-white transition-all scale-125">
                <Linkedin size={28} />
              </a>
              <a href="mailto:binduvijayan513@gmail.com" className="text-slate-400 hover:text-brand transition-all scale-125">
                <Mail size={28} />
              </a>
            </div>
          </div>

          <div className="glass-card rounded-[50px] p-12 glow-border relative group">
            <div className="absolute top-8 right-8 text-brand animate-bounce">
              <ArrowUpRight size={32} />
            </div>
            <div className="space-y-10">
              <div>
                <p className="text-xs font-black tracking-[0.3em] text-slate-500 mb-4 uppercase">Direct Line</p>
                <a href="mailto:binduvijayan513@gmail.com" className="text-3xl md:text-4xl font-bold hover:text-brand transition-colors break-words">
                  binduvijayan513<span className="text-brand">@</span>gmail.com
                </a>
              </div>
              <div>
                {/* <p className="text-xs font-black tracking-[0.3em] text-slate-500 mb-4 uppercase">Base</p> */}
                <p className="text-3xl font-bold">Palakkad, India</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
}

