import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`
        relative p-3 rounded-full transition-all duration-300
        ${isDarkMode 
          ? 'bg-gray-800 text-yellow-400 border-2 border-yellow-400/30' 
          : 'bg-retro-beige text-retro-darkCyan border-2 border-retro-darkCyan/30'
        }
        hover:shadow-lg
      `}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDarkMode ? (
          <Sun size={20} className="animate-pulse" />
        ) : (
          <Moon size={20} />
        )}
      </motion.div>
      
      {/* Glow effect for dark mode */}
      {isDarkMode && (
        <motion.div
          className="absolute inset-0 rounded-full bg-yellow-400/20 blur-md"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
};

export default DarkModeToggle;