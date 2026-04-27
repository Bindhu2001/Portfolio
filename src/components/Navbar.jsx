import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", to: "about" },
    { name: "EXPERIENCE", to: "experience" },
    { name: "STACK", to: "techstack" },
    { name: "CONTACT", to: "contact" },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-6 pointer-events-none">
      <div className={`w-full glass-card rounded-full px-8 py-4 flex justify-between items-center pointer-events-auto transition-all duration-500 ${isScrolled ? 'shadow-brand/20 shadow-2xl scale-95' : ''}`}>
        <div className="text-xl font-black text-white tracking-tighter flex items-center gap-2">
          <div className="w-6 h-6 bg-brand rounded-full animate-pulse shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
          BINDU<span className="text-brand-light">.</span>V
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-100}
              className="text-[10px] font-black tracking-[0.2em] text-slate-400 hover:text-white cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="flex items-center gap-2 bg-white text-bg-deep px-5 py-2 rounded-full text-xs font-black hover:bg-brand hover:text-white transition-all">
            CV <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card absolute top-20 left-6 right-6 p-8 rounded-[40px] flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4 pointer-events-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-black text-white tracking-tight"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
