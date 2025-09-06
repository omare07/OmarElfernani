import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen, TrendingUp, Zap, Terminal } from 'lucide-react';

const Academics: React.FC = () => {
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

  const apCourses = [
    'Computer Science Principles', 'Government', 'Computer Science A',
    'Macroeconomics', 'Microeconomics', 'US History', 'Calculus AB',
    'Physics', 'Psychology', 'Calculus BC', 'English Language',
    'English Literature'
  ];

  const academicHighlights = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "4.6_GPA.dat",
      subtitle: "3.7 Unweighted",
      description: "Consistent academic excellence throughout high school",
      color: "neon-pink"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "SAT_1380.exe",
      subtitle: "Above National Average",
      description: "Strong performance in both Math and Evidence-Based Reading",
      color: "neon-blue"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "AP_COURSES.log",
      subtitle: "College-Level Rigor",
      description: "Challenging curriculum spanning STEM, humanities, and social sciences",
      color: "neon-green"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "GROWTH.py",
      subtitle: "Continuous Improvement",
      description: "Demonstrated upward trajectory in academic performance",
      color: "neon-purple"
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
            <span className="accent-text animate-glow">ACADEMICS</span>
            <span className="text-retro-orange">.EXE</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl retro-text opacity-80 max-w-3xl mx-auto font-retro"
          >
            &gt; LOADING_EDUCATION.dat // Rigorous coursework and consistent performance
          </motion.p>
        </motion.div>

        {/* Academic Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {academicHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateX: 5 }}
              className="retro-card rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4 text-retro-gold bg-retro-gold/10 group-hover:animate-pulse`}>
                {highlight.icon}
              </div>
              <h3 className={`text-xl font-retro font-bold text-retro-orange mb-1`}>
                {highlight.title}
              </h3>
              <p className="retro-text opacity-80 font-retro text-sm mb-2">
                {highlight.subtitle}
              </p>
              <p className="retro-text opacity-60 text-sm">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* School Information */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="retro-card rounded-2xl p-8 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Terminal className="w-6 h-6 text-retro-gold mr-2" />
                <h3 className="text-2xl font-retro font-bold text-retro-orange">
                  SCHOOL_INFO.cfg
                </h3>
              </div>
              <h4 className="text-xl font-retro retro-text mb-4">
                Baltimore Polytechnic Institute
              </h4>
              <p className="retro-text opacity-80 leading-relaxed mb-6">
                A prestigious STEM-focused public high school known for its rigorous 
                academic programs and college preparatory curriculum. Baltimore Poly 
                has a long tradition of academic excellence and innovation.
              </p>
              <div className="space-y-3 font-retro text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-retro-orange rounded-full mr-3 animate-pulse"></span>
                  <span className="retro-text opacity-80">Class of 2025</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-retro-teal rounded-full mr-3 animate-pulse"></span>
                  <span className="retro-text opacity-80">Engineering & Technology Focus</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-retro-sage rounded-full mr-3 animate-pulse"></span>
                  <span className="retro-text opacity-80">College Preparatory Program</span>
                </div>
              </div>
            </div>
            <div className="retro-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-5 h-5 text-retro-teal mr-2" />
                <h4 className="text-lg font-retro font-semibold text-retro-teal">
                  ACADEMIC_TIMELINE.log
                </h4>
              </div>
              <div className="space-y-4 font-retro text-sm">
                <div className="flex justify-between items-center">
                  <span className="retro-text opacity-70">2021-2022:</span>
                  <span className="text-retro-gold">Strong Foundation</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="retro-text opacity-70">2022-2023:</span>
                  <span className="text-retro-teal">AP Introduction</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="retro-text opacity-70">2023-2024:</span>
                  <span className="text-retro-coral">Advanced Coursework</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="retro-text opacity-70">2024-2025:</span>
                  <span className="text-retro-orange">College Preparation</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AP Courses */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-8">
            <Terminal className="w-6 h-6 text-retro-gold mr-2" />
            <h3 className="text-2xl font-retro font-bold text-retro-gold">
              AP_COURSES.directory
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {apCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="retro-card rounded-lg p-4 hover:shadow-md transition-all duration-200 group"
              >
                <span className="text-sm font-retro retro-text group-hover:text-retro-teal transition-colors">
                  {course}.ap
                </span>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={itemVariants}
            className="mt-8 retro-card rounded-xl p-6 max-w-2xl mx-auto"
          >
            <p className="retro-text opacity-80 font-retro text-sm">
              $ echo "Completed 11 Advanced Placement courses across diverse subjects"<br />
              <span className="text-retro-gold">&gt;</span> demonstrating academic versatility and college-level preparation
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating academic elements */}
      <motion.div
        animate={{ rotate: 360, y: [0, -10, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="fixed top-1/3 right-4 w-8 h-8 border-2 border-retro-gold rounded-full opacity-30"
      />
      <motion.div
        animate={{ rotate: -360, x: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="fixed bottom-1/3 left-4 w-6 h-6 bg-retro-gold/30"
      />
    </section>
  );
};

export default Academics;
