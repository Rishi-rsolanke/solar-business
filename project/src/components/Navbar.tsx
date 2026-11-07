import { useState, useEffect } from 'react';
import { Sun, Menu, X, Calculator, FileText, Home, Award } from 'lucide-react';
import { BUSINESS } from '@/lib/businessInfo';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'Benefits', href: '#benefits', icon: Award },
    { label: 'Cost Calculator', href: '#calculator', icon: Calculator },
    { label: 'Apply Now', href: '#apply', icon: FileText },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy-900/10'
          : 'bg-navy-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-solar-400 to-solar-600 flex items-center justify-center shadow-lg shadow-solar-500/30 group-hover:scale-110 transition-transform">
              <Sun className="w-6 h-6 text-navy-900" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-display font-extrabold text-lg md:text-xl tracking-tight ${
                  scrolled ? 'text-navy-900' : 'text-white'
                }`}
              >
                {BUSINESS.shortName}
              </span>
              <span
                className={`font-display font-semibold text-[10px] md:text-xs tracking-wider uppercase ${
                  scrolled ? 'text-energy-600' : 'text-solar-400'
                }`}
              >
                Dynamic System
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-solar-500/10 ${
                  scrolled
                    ? 'text-navy-700 hover:text-energy-600'
                    : 'text-white/90 hover:text-solar-400'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              className="ml-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-solar-400 to-solar-600 text-navy-900 font-semibold text-sm shadow-lg shadow-solar-500/30 hover:shadow-xl hover:shadow-solar-500/40 hover:scale-105 transition-all"
            >
              Get Free Report
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-navy-900' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Language Indicator */}
        <div
          className={`hidden md:flex items-center justify-center pb-2 -mt-1 text-xs font-medium ${
            scrolled ? 'text-energy-600' : 'text-solar-400/80'
          }`}
        >
          Serving All Maharashtra ☀️
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-navy-700 font-medium hover:bg-energy-50 hover:text-energy-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </a>
              );
            })}
            <a
              href="#apply"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-xl bg-gradient-to-r from-solar-400 to-solar-600 text-navy-900 font-semibold text-center shadow-lg"
            >
              Get Free Report
            </a>
            <div className="text-center text-xs text-energy-600 font-medium pt-2">
              Serving All Maharashtra ☀️
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
