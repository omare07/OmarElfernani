import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, TrendingUp, Globe, Music, BookOpen, Users, Cpu, BarChart } from 'lucide-react';

const Skills: React.FC = () => {
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

  const technicalSkills = [
    { name: "Python", level: 90, color: "bg-retro-skyBlue", icon: <Code className="w-5 h-5" /> },
    { name: "JavaScript", level: 85, color: "bg-retro-lightYellow", icon: <Code className="w-5 h-5" /> },
    { name: "Java", level: 80, color: "bg-retro-pastelGreen", icon: <Code className="w-5 h-5" /> },
    { name: "React", level: 85, color: "bg-retro-skyBlue", icon: <Code className="w-5 h-5" /> },
    { name: "Machine Learning", level: 80, color: "bg-retro-pastelGreen", icon: <Cpu className="w-5 h-5" /> },
    { name: "Financial Analysis", level: 85, color: "bg-retro-lightYellow", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const languages = [
    { name: "English", level: 100, flag: "🇺🇸", proficiency: "Native" },
    { name: "Arabic", level: 90, flag: "🇸🇦", proficiency: "Fluent" },
    { name: "French", level: 85, flag: "🇫🇷", proficiency: "Fluent" },
  ];

  const softSkills = [
    {
      category: "Leadership",
      icon: <Users className="w-6 h-6" />,
      color: "bg-retro-skyBlue",
      skills: ["Team Management", "Public Speaking", "Mentoring", "Strategic Planning"]
    },
    {
      category: "Analytical",
      icon: <BarChart className="w-6 h-6" />,
      color: "bg-retro-pastelGreen",
      skills: ["Data Analysis", "Problem Solving", "Research", "Critical Thinking"]
    },
    {
      category: "Communication",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-retro-lightYellow",
      skills: ["Multilingual", "Technical Writing", "Presentation", "Cross-cultural"]
    },
    {
      category: "Personal",
      icon: <Music className="w-6 h-6" />,
      color: "bg-retro-skyBlue",
      skills: ["Guitar Playing", "Religious Study", "Environmental Advocacy", "Community Service"]
    }
  ];

  const certifications = [
    {
      title: "Advanced Placement Scholar",
      issuer: "College Board",
      description: "Completed 11 AP courses with distinction",
      year: "2024"
    },
    {
      title: "SARE Research Program",
      issuer: "Johns Hopkins University",
      description: "Completed two summer research internships in AI and medical imaging",
      year: "2023-2024"
    },
    {
      title: "GEM's Scholar",
      issuer: "GEM's Program",
      description: "Selected for prestigious STEM enrichment program",
      year: "2019"
    }
  ];

  return (
    <section id="skills" className="py-20 retro-bg">
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
            className="text-4xl md:text-5xl font-bold mb-6 font-retro"
          >
            <span className="accent-text animate-glow">SKILLS &</span>
            <br />
            <span className="text-retro-orange">EXPERTISE</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl retro-text opacity-80 max-w-3xl mx-auto font-retro"
          >
            A comprehensive skill set spanning technology, finance, languages, and leadership
          </motion.p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-retro-orange mb-8 text-center font-retro"
          >
            Technical Proficiency
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="retro-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 retro-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 retro-card rounded-lg mr-3 text-retro-gold">
                      {skill.icon}
                    </div>
                    <span className="font-semibold retro-text font-retro">{skill.name}</span>
                  </div>
                  <span className="text-sm retro-text opacity-70 font-medium font-retro">{skill.level}%</span>
                </div>
                <div className="w-full retro-card retro-border rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className="h-3 rounded-full bg-retro-gold"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-retro-orange mb-8 text-center font-retro"
          >
            Language Proficiency
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="retro-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 retro-border"
              >
                <div className="text-4xl mb-4">{language.flag}</div>
                <h4 className="text-xl font-bold retro-text mb-2 font-retro">{language.name}</h4>
                <p className="text-retro-orange font-semibold mb-4 font-retro">{language.proficiency}</p>
                <div className="w-full retro-card retro-border rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${language.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className="h-2 rounded-full bg-retro-gold animate-pulse"
                  />
                </div>
                <p className="text-sm retro-text opacity-70 mt-2 font-retro">{language.level}%</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-retro-orange mb-8 text-center font-retro"
          >
            Core Competencies
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="retro-card retro-border rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 rounded-xl retro-card text-retro-gold mb-4 w-fit">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold text-retro-orange mb-4 font-retro">{category.category}</h4>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-sm retro-text opacity-80 font-retro">
                      <span className="w-2 h-2 bg-retro-gold rounded-full mr-3 animate-pulse"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="retro-card retro-border rounded-2xl p-8"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-retro-orange mb-8 text-center font-retro"
          >
            Certifications & Recognition
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="retro-card retro-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 retro-card rounded-lg">
                    <BookOpen className="w-5 h-5 text-retro-orange" />
                  </div>
                  <span className="text-sm text-retro-orange font-semibold">{cert.year}</span>
                </div>
                <h4 className="text-lg font-bold text-retro-orange mb-2 font-retro">{cert.title}</h4>
                <p className="text-retro-gold font-medium text-sm mb-3 font-retro">{cert.issuer}</p>
                <p className="retro-text opacity-80 text-sm font-retro">{cert.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <p className="retro-text opacity-80 max-w-2xl mx-auto font-retro">
              Continuously expanding my skill set through hands-on projects, research opportunities, 
              and leadership experiences that prepare me for success in finance and technology.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
