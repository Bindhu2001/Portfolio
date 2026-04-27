import { Briefcase, Calendar, MapPin, ChevronRight, Zap } from "lucide-react";

const experiences = [
  {
    company: "Great Leap",
    location: "Pipeline, Ernakulam",
    period: "Aug 2025 – Present",
    role: "Full Stack Developer",
    color: "from-brand to-purple-600",
    projects: [
      {
        name: "HRMS (MyPayrollMaster)",
        details: [
          "Engineered a MySQL Exception Engine to automate complex attendance validation via Stored Procedures.",
          "Built secure Role-Based Access Control (RBAC) with dynamic menu permissions.",
          "Implemented automated leave deduction and asset tracking modules."
        ]
      },
      {
        name: "Rizo Mobile App",
        details: ["Architected a cross-platform React Native app for field force management with real-time dashboards."]
      }
    ]
  },
  {
    company: "Nintriva Technologies",
    location: "Kakkanad, Ernakulam",
    period: "June 2024 – Aug 2025",
    role: "Backend Developer",
    color: "from-accent to-blue-600",
    projects: [
      {
        name: "Kesher CRM",
        details: ["Developed high-performance backend architecture using Yii2 MVC for global contact tracking."]
      },
      {
        name: "Trybond Form System",
        details: ["Built a dynamic data collection engine with advanced server-side validation and secure PHP storage."]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
            EXPERIENCE<span className="text-brand">.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide uppercase">
            Building robust enterprise solutions
          </p>
        </div>

        <div className="space-y-32">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -top-12 -left-4 text-9xl font-black text-white/5 select-none -z-10 tracking-tighter">
                0{idx + 1}
              </div>
              
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/3 sticky top-32">
                   <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${exp.color} mb-6 shadow-lg shadow-brand/20`}>
                      <Briefcase size={24} className="text-white" />
                   </div>
                   <h3 className="text-4xl font-bold text-white mb-2">{exp.company}</h3>
                   <p className="text-brand-light font-bold text-lg mb-6">{exp.role}</p>
                   <div className="space-y-3 text-slate-400 font-medium">
                      <div className="flex items-center gap-3">
                         <Calendar size={18} className="text-brand" /> {exp.period}
                      </div>
                      <div className="flex items-center gap-3">
                         <MapPin size={18} className="text-brand" /> {exp.location}
                      </div>
                   </div>
                </div>

                <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                  {exp.projects.map((project, pIdx) => (
                    <div key={pIdx} className="glass-card p-8 rounded-3xl glow-border group hover:-translate-y-2 transition-all duration-500">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-xl font-bold text-white">{project.name}</h4>
                        <Zap size={18} className="text-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <ul className="space-y-4">
                        {project.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex gap-3 text-slate-400 text-sm leading-relaxed font-medium">
                            <ChevronRight size={16} className="mt-1 flex-shrink-0 text-brand" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
