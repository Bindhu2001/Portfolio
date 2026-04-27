import { Cpu, Globe, Database, Terminal, Zap, Code, Layout, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "BACKEND",
    icon: <Database size={20} />,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    skills: ["PHP (Laravel, Yii2, CodeIgniter)", "Java", "RESTful APIs", "MVC Architecture"]
  },
  {
    title: "FRONTEND & MOBILE",
    icon: <Smartphone size={20} />,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    skills: ["React Native", "React.js", "JavaScript (ES6+)", "Tailwind CSS", "jQuery"]
  },
  {
    title: "DATABASES",
    icon: <Cpu size={20} />,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    skills: ["MySQL (Stored Procedures)", "PostgreSQL"]
  },
  {
    title: "AI & PRODUCTIVITY",
    icon: <Zap size={20} />,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    skills: ["ChatGPT", "Claude", "Antigravity", "Prompt Engineering"]
  },
  {
    title: "TOOLS",
    icon: <Terminal size={20} />,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    skills: ["Git", "Razorpay", "Postman", "FileZilla", "Adminer"]
  }
];

export default function Techstack() {
  return (
    <section id="techstack" className="section-padding relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
            TECH <span className="text-gradient">STACK.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-bold uppercase tracking-widest">
            Tools of the trade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-card p-10 rounded-[40px] glow-border group hover:bg-white/5 transition-all duration-500">
              <div className={`w-14 h-14 ${cat.bg} ${cat.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="text-xs font-black tracking-[0.3em] text-slate-500 mb-6">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-4 py-2 bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold rounded-xl hover:text-brand-light hover:border-brand/30 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
