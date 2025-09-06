import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Globe, BookOpen, Target } from 'lucide-react';

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
      title: "Multicultural Background",
      description: "First-generation African American student from a low-income family, fluent in Arabic and French"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "4.6 weighted GPA with 11 AP courses, demonstrating consistent dedication to learning"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Finance Passion",
      description: "Aspiring finance professional with hands-on experience in market analysis and trading strategies"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Faith & Values",
      description: "Devoted Muslim who finds strength and guidance in faith while serving the community"
    }
  ];

  return (
    <section id="about" className="py-20 retro-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-retro font-bold mb-6"
          >
            <span className="accent-text animate-glow">ABOUT</span>
            <br />
            <span className="text-retro-orange">ME</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl retro-text opacity-80 max-w-3xl mx-auto font-retro"
          >
            A driven senior with a passion for finance, technology, and making a positive impact
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl font-retro font-bold text-retro-orange mb-4">
              My Journey
            </h3>
            <p className="retro-text opacity-90 leading-relaxed font-retro">
              As a first-generation college student from a low-income, African American family,
              I've learned the value of hard work and perseverance early in life. Growing up in
              a multilingual household where Arabic and French are spoken, I've developed a
              global perspective that shapes my worldview.
            </p>
            <p className="retro-text opacity-90 leading-relaxed font-retro">
              My passion for finance began when I started exploring the intersection of
              mathematics, economics, and technology. Through my work with trading algorithms
              and market analysis, I've discovered how financial markets can be both
              analytical and intuitive.
            </p>
            <p className="retro-text opacity-90 leading-relaxed font-retro">
              Beyond academics, my faith as a Muslim provides me with a strong moral compass
              and drives my commitment to community service and environmental stewardship
              through my organization, BMore Green.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="retro-card retro-border rounded-2xl p-8">
              <h4 className="text-xl font-retro font-semibold mb-4 text-retro-gold">Quick Facts</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-retro-gold rounded-full mr-3"></span>
                  <span className="retro-text font-retro">Senior at Baltimore Polytechnic Institute</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-retro-gold rounded-full mr-3"></span>
                  <span className="retro-text font-retro">4.6 Weighted GPA, 3.7 Unweighted</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-retro-gold rounded-full mr-3"></span>
                  <span className="retro-text font-retro">SAT Score: 1380</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-retro-gold rounded-full mr-3"></span>
                  <span className="retro-text font-retro">11 AP Courses Completed</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-retro-gold rounded-full mr-3"></span>
                  <span className="retro-text font-retro">Fluent in English, Arabic, French</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-retro-gold rounded-full mr-3"></span>
                  <span className="retro-text font-retro">4 Years of Work Experience</span>
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
              whileHover={{ scale: 1.05 }}
              className="retro-card rounded-xl p-6 retro-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-retro-gold/10 rounded-lg mb-4 text-retro-gold">
                {highlight.icon}
              </div>
              <h4 className="text-lg font-retro font-semibold text-retro-orange mb-2">
                {highlight.title}
              </h4>
              <p className="retro-text opacity-80 text-sm leading-relaxed font-retro">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
