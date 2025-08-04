export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-100 py-8 px-4 text-center border-t border-gray-300">
      <p className="text-[#686997] text-sm font-semibold mb-2">© 2025 Bindhu Vijayan. All rights reserved.</p>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-[#686997] text-sm">
        <a href="mailto:bindhuvijayan01@gmail.com.com" className="hover:underline" target="_blank">
          📧 binduvijayan01@gmail.com
        </a>
      <a
  href="https://www.linkedin.com/in/bindu-vijayan/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-1 text-[#686997] hover:underline"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#686997"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.75-2.2 3.6-2.2 3.85 0 4.55 2.55 4.55 5.9V24h-4V14.3c0-2.3-.05-5.3-3.25-5.3-3.25 0-3.75 2.5-3.75 5.1V24h-4V8z" />
  </svg>
  LinkedIn
</a>

      </div>
    </footer>
  );
}
