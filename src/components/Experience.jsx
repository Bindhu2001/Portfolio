export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-20 bg-white text-gray-900 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#686997] via-[#a8a6c4] to-[#e4e2f2] opacity-30 blur-2xl mix-blend-multiply z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">


        <h2 className="text-4xl font-extrabold text-center text-[#686997] mb-12">
          Work Experience & Projects
        </h2>

        <div className="bg-white border-l-4 border-[#686997] shadow-lg p-6 rounded-lg space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-[#686997]">
              Nintriva Technologies
            </h1>
            <p className="text-sm text-gray-500 italic">
              July 2023 – Present
            </p>
          </div>
          {/* Kesher */}
          <div>
            <h3 className="text-xl font-semibold text-[#686997]">
              Kesher – Contact Management CRM
            </h3>
            <p className="text-gray-700 mt-1">
              A CRM system for efficient contact management, helping businesses
              organize and track customer interactions.
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Built backend architecture using Yii2 MVC.</li>
              <li>Implemented secure authentication & role-based access.</li>
              <li>Optimized database queries for faster response times.</li>
              <li>Integrated RESTful APIs for data exchange.</li>
            </ul>
          </div>

          {/* Trybond */}
          <div>
            <h3 className="text-xl font-semibold text-[#686997]">
              Trybond – Form Management System
            </h3>
            <p className="text-gray-700 mt-1">
              A dynamic form management platform for seamless data collection
              and validation.
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Developed custom form handling features using PHP & Yii2.</li>
              <li>Ensured secure data storage & validation.</li>
              <li>Optimized backend performance & security.</li>
            </ul>
          </div>

          {/* NMS */}
          <div>
            <h3 className="text-xl font-semibold text-[#686997]">
              NMS – Official Website
            </h3>
            <p className="text-gray-700 mt-1">
              The working website for NMS, built with modern frontend
              technologies.
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Developed backend logic for seamless functionality.</li>
              <li>
                Integrated frontend technologies (HTML, CSS, JavaScript,
                jQuery).
              </li>
              <li>Ensured high performance & security.</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="relative z-10 max-w-4xl mx-auto">


        <h2 className="text-4xl font-extrabold text-center text-[#686997] mb-12 mt-8">
          Internship & Course
        </h2>

        <div className="bg-white border-l-4 border-[#686997] shadow-lg p-6 rounded-lg space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-[#686997]">
              Nesote Technologies Pvt Ltd
            </h1>
            <p className="text-sm text-gray-500 italic">
              PHP Developer Intern &nbsp; | &nbsp; Dec 2023 – Jan 2024
            </p>
          </div>
          <div className="mb-6 text-[#686997] text-sm leading-relaxed space-y-2">
            <p>• Worked on real-time PHP projects, coding and debugging web applications.</p>
            <p>• Developed structured applications using the CodeIgniter MVC framework.</p>
            <p>• Assisted in implementing best PHP development practices.</p>
          </div>

          <div className="flex justify-between items-center mb-4">
  <h1 className="text-2xl font-bold text-[#686997]">
    Avodha Edutech
  </h1>
  <p className="text-sm text-gray-500 italic">
               Full Stack Development Course &nbsp; | &nbsp; March 2023 – August 2023
  </p>
</div>
<div className="mb-6 text-[#686997] text-sm leading-relaxed space-y-2">
  <p>• Completed an intensive full-stack web development course covering both frontend and backend technologies.</p>
  <p>• Gained hands-on experience with HTML, CSS, JavaScript, PHP, MySQL, and Laravel framework.</p>
  <p>• Built multiple mini-projects and learned industry best practices in software development.</p>
</div>

        </div>
      </div>

      
    </section>
  );
}
