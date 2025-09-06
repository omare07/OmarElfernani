import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
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
              className="text-2xl font-retro font-bold text-retro-gold hover:animate-glow"
            >
              OMAR ELFERNANI
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.1 }}>
                <Link
                  to={item.href}
                  className={`px-4 py-2 rounded-lg font-retro text-sm transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-retro-gold retro-border bg-retro-beige/50'
                      : 'retro-text hover:text-retro-orange hover:bg-retro-beige/30'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <div className="ml-4">
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile Menu Button and Dark Mode Toggle */}
          <div className="md:hidden flex items-center space-x-2">
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
            className="md:hidden retro-card rounded-lg p-4 mb-4"
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
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;