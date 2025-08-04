export default function Navbar() {
  return (
    <nav className="bg-[#686997] bg-opacity-80 text-white backdrop-blur px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold flex items-center gap-3">
  <img
    src="images/mypic.jpg"
    alt="Bindhu"
    className="w-10 h-10 rounded-full border border-white object-cover"
  />
  Portfolio
</h1>
      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <a href="#about" className="hover:text-gray-100 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-gray-100 transition-colors">
            Experience
          </a>
        </li>
        <li>
          <a href="#stack" className="hover:text-gray-100 transition-colors">
            Tech Stack
          </a>
        </li>
        <li>
          <a href="#footer" className="hover:text-gray-100 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
