import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Immersive Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 border border-brand/20 rounded-full text-brand-light text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-brand rounded-full animate-ping" />
            Available for new opportunities
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            ENGINEERING <br />
            <span className="text-gradient">THE FUTURE.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
            Hi, I'm <span className="text-white">Bindu V</span>. A Full Stack Developer crafting scalable backends and immersive mobile experiences with <span className="text-brand-light">PHP, React & AI.</span>
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
            <button className="group relative px-8 py-4 bg-brand text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                View My Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/Bindhu2001" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/bindu-vijayan/" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin size={22} />
              </a>
              <a href="mailto:binduvijayan513@gmail.com" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Visual Element */}
       
      </div>
    </section>
  );
}
