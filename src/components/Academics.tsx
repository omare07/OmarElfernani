import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen, TrendingUp } from 'lucide-react';

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
      title: "4.6 Weighted GPA",
      subtitle: "3.7 Unweighted",
      description: "Consistent academic excellence throughout high school"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "SAT Score: 1380",
      subtitle: "Above National Average",
      description: "Strong performance in both Math and Evidence-Based Reading"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "12 AP Courses",
      subtitle: "College-Level Rigor",
      description: "Challenging curriculum spanning STEM, humanities, and social sciences"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Academic Growth",
      subtitle: "Continuous Improvement",
      description: "Demonstrated upward trajectory in academic performance"
    }
  ];

  return (
    <section id="academics" className="py-20 bg-space-black text-white">
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
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Academic Excellence
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Rigorous coursework and consistent performance at Baltimore Polytechnic Institute
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
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mx-auto mb-4 text-white">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {highlight.title}
              </h3>
              <p className="text-primary-600 font-medium mb-2">
                {highlight.subtitle}
              </p>
              <p className="text-gray-600 text-sm">
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
          className="bg-gray-50 rounded-2xl p-8 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Baltimore Polytechnic Institute
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A prestigious STEM-focused public high school known for its rigorous 
                academic programs and college preparatory curriculum. Baltimore Poly 
                has a long tradition of academic excellence and innovation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Class of 2026</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Engineering & Technology Focus</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">College Preparatory Program</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Academic Timeline
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Freshman Year</span>
                  <span className="text-primary-600 font-medium">Strong Foundation</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sophomore Year</span>
                  <span className="text-primary-600 font-medium">AP Introduction</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Junior Year</span>
                  <span className="text-primary-600 font-medium">Advanced Coursework</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Senior Year</span>
                  <span className="text-primary-600 font-medium">College Preparation</span>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Advanced Placement Courses
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {apCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white border-2 border-primary-200 rounded-lg p-4 hover:border-primary-400 hover:shadow-md transition-all duration-200"
              >
                <span className="text-sm font-medium text-gray-800">
                  AP {course}
                </span>
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 mt-6 max-w-2xl mx-auto"
          >
            Completed 12 Advanced Placement courses across diverse subjects, 
            demonstrating academic versatility and college-level preparation
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Academics;
