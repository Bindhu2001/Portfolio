import { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['About', 'Experience', 'Tech Stack', 'Contact'];

  return (
    <nav className="bg-[#686997] text-white px-4 py-3 fixed w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img
            src="/images/mypic.jpg"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-xl font-bold">Portfolio</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 font-medium">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase().replace(/\s+/g, '')}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-2 text-sm px-4">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase().replace(/\s+/g, '')}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
