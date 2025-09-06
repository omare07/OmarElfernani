import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen retro-bg flex items-center justify-center relative overflow-hidden">
      {/* Retro background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Retro geometric shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-retro-skyBlue/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 0.9, 1.1]
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-retro-lightYellow/8 rounded-full blur-xl"
        />
        
        {/* Retro grid pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="absolute h-px bg-retro-darkCyan"
              style={{
                top: `${15 + i * 12}%`,
                left: '10%',
                right: '10%'
              }}
            />
          ))}
        </div>
        
        {/* Retro corner decorations */}
        <div className="absolute top-20 left-8 w-16 h-16 border-l-2 border-t-2 border-retro-skyBlue/30"></div>
        <div className="absolute top-20 right-8 w-16 h-16 border-r-2 border-t-2 border-retro-pastelGreen/30"></div>
        <div className="absolute bottom-20 left-8 w-16 h-16 border-l-2 border-b-2 border-retro-lightYellow/30"></div>
        <div className="absolute bottom-20 right-8 w-16 h-16 border-r-2 border-b-2 border-retro-darkCyan/30"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center retro-text z-10 max-w-4xl mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 retro-card retro-border rounded-full text-sm font-retro text-retro-gold">
            🎓 Senior at Baltimore Polytechnic Institute
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-retro font-bold mb-6 leading-tight retro-heading"
        >
          <span className="accent-text animate-glow">Omar</span> <span className="text-retro-orange">Elfernani</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl mb-4 font-retro text-retro-orange"
        >
          Aspiring Finance Professional & Tech Innovator
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-8 retro-text opacity-80 max-w-2xl mx-auto font-retro"
        >
          First-generation African American student from Baltimore, passionate about financial markets,
          AI research, environmental advocacy, and using technology to create positive change
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 retro-card retro-border text-retro-teal rounded-lg font-retro font-semibold hover:bg-retro-teal/10 transition-colors duration-200"
          >
            CONTACT.exe
          </motion.a>
          
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 retro-border text-retro-gold rounded-lg font-retro font-semibold hover:bg-retro-gold/10 transition-all duration-200"
          >
            ABOUT.dat
          </motion.a>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          <motion.a
            href="https://github.com/omarelfernani"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="retro-text opacity-80 hover:text-retro-teal transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/omarelfernani"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="retro-text opacity-80 hover:text-retro-gold transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="mailto:omar.elfernani@example.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="retro-text opacity-80 hover:text-retro-coral transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-retro-gold"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
