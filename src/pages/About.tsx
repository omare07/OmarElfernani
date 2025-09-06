import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Globe, BookOpen, Target, Zap, Code } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const highlights = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multicultural_Background.dat",
      description: "First-generation African American student from a low-income family, fluent in Arabic and French",
      color: "neon-blue"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Academic_Excellence.exe",
      description: "4.6 weighted GPA with 12 AP courses, demonstrating consistent dedication to learning",
      color: "neon-green"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Finance_Passion.py",
      description: "Aspiring finance professional with hands-on experience in market analysis and trading strategies",
      color: "neon-purple"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Faith_Values.cfg",
      description: "Devoted Muslim who finds strength and guidance in faith while serving the community",
      color: "neon-pink"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-retro font-bold mb-6"
          >
            <span className="accent-text animate-glow">ABOUT</span>
            <span className="text-retro-orange">.EXE</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl retro-text opacity-80 max-w-3xl mx-auto font-retro"
          >
            &gt; LOADING_PROFILE.dat // A driven senior with a passion for innovation
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="retro-card rounded-xl p-6">
              <h3 className="text-2xl font-retro font-bold text-retro-orange mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2" />
                MY_JOURNEY.log
              </h3>
              <div className="space-y-4 retro-text opacity-80 leading-relaxed font-retro">
                <p>
                  <span className="text-retro-gold font-retro">&gt;</span> As a first-generation college student from a low-income, African American family,
                  I've learned the value of hard work and perseverance early in life. Growing up in 
                  a multilingual household where Arabic and French are spoken, I've developed a 
                  global perspective that shapes my worldview.
                </p>
                <p>
                  <span className="text-retro-teal font-retro">&gt;</span> My passion for finance began when I started exploring the intersection of
                  mathematics, economics, and technology. Through my work with trading algorithms 
                  and market analysis, I've discovered how financial markets can be both 
                  analytical and intuitive.
                </p>
                <p>
                  <span className="text-retro-coral font-retro">&gt;</span> Beyond academics, my faith as a Muslim provides me with a strong moral compass
                  and drives my commitment to community service and environmental stewardship 
                  through my organization, BMore Green.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="retro-card rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Zap className="w-6 h-6 text-retro-gold mr-2 animate-pulse" />
                <h4 className="text-xl font-retro font-semibold text-retro-orange">SYSTEM_SPECS.txt</h4>
              </div>
              <ul className="space-y-4 font-retro text-sm">
                <li className="flex items-center justify-between">
                  <span className="retro-text opacity-80">LOCATION:</span>
                  <span className="text-retro-orange">Baltimore Polytechnic Institute</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="retro-text opacity-80">GPA_WEIGHTED:</span>
                  <span className="text-retro-gold">4.6</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="retro-text opacity-80">GPA_UNWEIGHTED:</span>
                  <span className="text-retro-gold">3.7</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="retro-text opacity-80">SAT_SCORE:</span>
                  <span className="text-retro-coral">1380</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="retro-text opacity-80">AP_COURSES:</span>
                  <span className="text-retro-orange">12</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="retro-text opacity-80">LANGUAGES:</span>
                  <span className="text-retro-teal">English, Arabic, French</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="retro-text opacity-80">WORK_EXPERIENCE:</span>
                  <span className="text-retro-gold">4+ Years</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="retro-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-lg mb-4 text-retro-gold bg-retro-gold/10 group-hover:animate-pulse`}>
                {highlight.icon}
              </div>
              <h4 className={`text-lg font-retro font-semibold text-retro-orange mb-2 break-words`}>
                {highlight.title}
              </h4>
              <p className="retro-text opacity-80 text-sm leading-relaxed break-words font-retro">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Terminal-style quote */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 retro-card rounded-xl p-8 text-center"
        >
          <div className="font-retro text-retro-gold text-sm mb-4">
            $ cat personal_philosophy.txt
          </div>
          <blockquote className="text-xl lg:text-2xl font-retro retro-text leading-relaxed">
            "Innovation happens at the intersection of<br />
            <span className="text-retro-orange">technology</span>,
            <span className="text-retro-teal"> finance</span>, and
            <span className="text-retro-sage"> community impact</span>."
          </blockquote>
          <div className="mt-4 retro-text opacity-60 font-retro text-sm">
            - Omar Elfernani, 2025
          </div>
        </motion.div>
      </div>

      {/* Floating retro elements */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="fixed top-1/4 right-8 w-4 h-4 border-2 border-retro-orange opacity-30"
      />
      <motion.div
        animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="fixed bottom-1/4 left-8 w-6 h-6 bg-retro-teal/30 rounded-full"
      />
    </section>
  );
};

export default About;
