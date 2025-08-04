export default function About() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-16 bg-white text-gray-900 overflow-hidden">
      {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#686997] via-[#a8a6c4] to-[#e4e2f2] opacity-30 blur-2xl mix-blend-multiply z-0" />

      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="text-5xl md:text-5xl font-extrabold leading-tight">
          Hello, I'm Bindu Vijayan.
          <br />
          <span className="text-gray-800 text-2xl">I'm a Back-end developer.</span>
        </h1>

        <p className="mt-6 text-sm md:text-base font-medium text-gray-700 leading-relaxed">
          I specialize in building modern, responsive web applications using React, Laravel, and Tailwind CSS.
          <br />
          With a passion for clean design and efficient code, I focus on creating seamless user experiences that balance both aesthetics and performance.
          <br />
          I believe in constant learning, clear communication, and solving real-world problems through technology.
        </p>
      </div>
    </section>
  );
}
