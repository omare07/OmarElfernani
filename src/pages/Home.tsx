import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Github, Linkedin, Mail, Camera, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
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
    <section className="min-h-screen retro-bg flex items-center justify-center relative overflow-hidden pt-20">
      {/* Retro background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-retro-skyBlue/10 rounded-full blur-xl animate-float"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-retro-lightYellow/8 rounded-full blur-xl animate-float"
        />
        
        {/* Retro grid lines */}
        <div className="absolute inset-0 opacity-15">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="absolute h-px bg-retro-darkCyan"
              style={{
                top: `${10 + i * 10}%`,
                left: '10%',
                right: '10%'
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center retro-text z-10 max-w-6xl mx-auto px-4"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Professional Photo */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Photo placeholder with retro styling */}
              <div className="w-full h-full retro-card retro-border rounded-2xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-retro-skyBlue/20 to-retro-lightYellow/20 animate-pulse"></div>
                <div className="text-center z-10">
                  <Camera className="w-16 h-16 retro-accent mx-auto mb-4 animate-float" />
                  <p className="retro-text opacity-80 font-retro text-sm">
                    PROFESSIONAL PHOTO
                  </p>
                  <p className="retro-text opacity-60 text-xs mt-2">
                    [PLACEHOLDER - AWAITING UPLOAD]
                  </p>
                </div>
                
                {/* Retro scan lines effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-retro-skyBlue/5 to-transparent animate-pulse opacity-50"></div>
              </div>
              
              {/* Floating decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-retro-skyBlue rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-retro-accent rounded-full animate-pulse"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <div className="text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 retro-card retro-border rounded-full text-sm font-retro text-retro-gold">
                <Sparkles className="w-4 h-4 inline mr-2" />
                CLASS OF 2026 // BPI SENIOR
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-retro font-bold mb-6 leading-tight retro-heading"
            >
              <span className="accent-text animate-glow">OMAR</span>
              <br />
              <span className="text-retro-orange">ELFERNANI</span>
            </motion.h1>

            <motion.div 
              variants={itemVariants}
              className="mb-6"
            >
              <p className="text-xl lg:text-2xl mb-2 font-retro text-retro-orange">
                Finance Professional
              </p>
              <p className="text-lg lg:text-xl font-retro retro-text">
                AI Researcher &amp; Tech Innovator
              </p>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg mb-8 retro-text opacity-80 max-w-2xl leading-relaxed font-serif"
            >
              First generation high school senior passionate about financial markets,
              artificial intelligence, and creating positive environmental impact.
              Ready to innovate the future.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-3 retro-border bg-retro-skyBlue text-white rounded-lg font-retro font-semibold hover:bg-retro-darkCyan transition-all duration-300"
                >
                  INITIALIZE_CONTACT.exe
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about"
                  className="inline-block px-8 py-3 retro-border border-retro-pastelGreen retro-highlight rounded-lg font-retro font-semibold hover:bg-retro-pastelGreen/10 transition-all duration-300"
                >
                  LOAD_PROFILE.dat
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex space-x-6"
            >
              <motion.a
                href="https://github.com/omarelfernani"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="retro-text opacity-80 hover:text-retro-darkCyan transition-colors"
              >
                <Github size={28} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/omarelfernani"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="retro-text opacity-80 hover:text-retro-skyBlue transition-colors"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                href="mailto:omar.elfernani@example.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="retro-text opacity-80 hover:text-retro-pastelGreen transition-colors"
              >
                <Mail size={28} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 retro-accent"
      >
        <ChevronDown size={32} className="animate-pulse" />
      </motion.div>

      {/* Retro corner decorations */}
      <div className="absolute top-20 left-4 w-16 h-16 border-l-2 border-t-2 border-retro-skyBlue opacity-30"></div>
      <div className="absolute top-20 right-4 w-16 h-16 border-r-2 border-t-2 border-retro-pastelGreen opacity-30"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-retro-lightYellow opacity-30"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-retro-darkCyan opacity-30"></div>
    </section>
  );
};

export default Home;
