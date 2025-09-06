import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/academics', label: 'Academics' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/skills', label: 'Skills' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'retro-card retro-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="hidden xl:block py-4 w-full relative overflow-visible">
          {/* Left Section: Logo + Title - Absolutely positioned */}
          <motion.div
            className="absolute transform -translate-y-1/2 flex items-center space-x-4 z-10"
            style={{ left: '-80px', top: 'calc(50% + 3px)' }}
          >
            <img
              src="/islam(1).png"
              alt="Logo"
              className="w-12 h-12 object-contain animate-pulse"
              style={{
                filter: 'brightness(0) saturate(100%) invert(77%) sepia(58%) saturate(348%) hue-rotate(7deg) brightness(101%) contrast(101%)'
              }}
            />
            <Link
              to="/home"
              className="text-2xl font-retro font-bold text-retro-gold hover:animate-glow pixel-slide whitespace-nowrap"
            >
              OMAR ELFERNANI
            </Link>
          </motion.div>

          {/* Center Section: Navigation Items - Absolutely centered */}
          <div className="flex items-center justify-center space-x-1 w-full h-16">
            {navItems.map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.1 }}>
                <Link
                  to={item.href}
                  className={`px-3 py-2 rounded-lg font-retro text-sm transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-retro-gold retro-border bg-retro-beige/50'
                      : 'retro-text hover:text-retro-orange hover:bg-retro-beige/30'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Section: Resume Button + Theme Toggle - Absolutely positioned */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center space-x-4 z-10">
            <motion.div whileHover={{ scale: 1.02 }}>
              <a
                href="/Omar_Elfernani_Resume.pdf"
                download
                className="px-4 py-2 retro-button text-black font-retro text-sm font-bold
                         flex items-center space-x-2 pixel-glow rounded-none"
                style={{
                  textShadow: '1px 1px 0px rgba(0,0,0,0.5)',
                  fontFamily: 'monospace'
                }}
              >
                <Download size={16} />
                <span>RESUME</span>
              </a>
            </motion.div>
            
            <DarkModeToggle />
          </div>
        </div>

        {/* Mobile Layout - Unchanged */}
        <div className="flex xl:hidden items-center justify-between py-4 w-full">
          <motion.div
            className="flex items-center space-x-4"
          >
            <img
              src="/islam(1).png"
              alt="Logo"
              className="w-12 h-12 object-contain animate-pulse"
              style={{
                filter: 'brightness(0) saturate(100%) invert(77%) sepia(58%) saturate(348%) hue-rotate(7deg) brightness(101%) contrast(101%)'
              }}
            />
            <Link
              to="/home"
              className="text-2xl font-retro font-bold text-retro-gold hover:animate-glow pixel-slide whitespace-nowrap"
            >
              OMAR ELFERNANI
            </Link>
          </motion.div>

          {/* Mobile Menu Button and Dark Mode Toggle */}
          <div className="xl:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="retro-text hover:text-retro-gold transition-colors p-2 rounded-lg hover:bg-retro-beige/30"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden retro-card rounded-lg p-4 mb-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg font-retro text-sm transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-retro-gold bg-retro-beige/50'
                    : 'retro-text hover:text-retro-orange hover:bg-retro-beige/30'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Resume Download Button */}
            <a
              href="/Omar_Elfernani_Resume.pdf"
              download
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 block py-3 px-4 retro-button text-black font-retro text-sm font-bold
                       text-center flex items-center justify-center space-x-2 rounded-none"
              style={{
                textShadow: '1px 1px 0px rgba(0,0,0,0.5)',
                fontFamily: 'monospace'
              }}
            >
              <Download size={18} />
              <span>DOWNLOAD RESUME</span>
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;