export default function Techstack() {
  const techs = [
    "HTML5", "CSS3", "JavaScript","React.js", "PHP", "Bootstrap", "CodeIgniter", "Yii2", "jQuery",
    "Laravel", "TailwindCSS", "Apache", "MySQL", "Postgres", "Canva", "Git",
    "GitHub", "Jira", "Postman", "SCSS", "AJAX"
  ];

 
  return (
    <section id="stack" className="py-20 px-6 bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#686997] mb-12">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech, index) => (
            <span
              key={index}
              className={"text-sm bg-[#686997] font-semibold text-white px-4 py-2 rounded-full shadow-md"}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
