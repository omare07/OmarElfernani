import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, TrendingUp, Github, ExternalLink, Cpu, BarChart3 } from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: "Intuitive Stock Analysis Platform",
      description: "Currently developing a comprehensive stock analysis platform that enables intuitive backtesting of trading strategies across multiple programming languages. This revolutionary platform democratizes quantitative trading by providing high-level support that transcends the limitations of low-level languages like C with NinjaTrader, making advanced financial analysis accessible to a broader range of developers and traders.",
      status: "In Development",
      technologies: ["Python", "JavaScript", "Java", "React", "Node.js", "Financial APIs", "TensorFlow", "Pandas"],
      features: [
        "Cross-language strategy implementation",
        "Real-time market data integration",
        "Advanced backtesting engine with Monte Carlo simulations",
        "Interactive visualization dashboard",
        "Strategy performance analytics with risk metrics",
        "Portfolio optimization algorithms",
        "Machine learning market prediction models",
        "Risk management and stop-loss automation"
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Advanced AI Research - Kiemen Lab",
      description: "Upcoming research internship at the prestigious Kiemen Lab for summer 2025. Will focus on developing cutting-edge AI applications and computational sciences, building upon previous experience in machine learning and medical AI applications.",
      status: "Upcoming",
      technologies: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Research Methodology", "Scientific Computing"],
      features: [
        "Advanced AI algorithm development",
        "Computational sciences research",
        "Innovative machine learning applications",
        "Scientific research methodologies",
        "Collaboration with leading researchers",
        "Publication-quality research outcomes",
        "Cross-disciplinary applications",
        "Next-generation AI technologies"
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Lung Cancer Detection ML Model",
      description: "Created a highly accurate machine learning model for early lung cancer detection during my 2023 SARE internship at Johns Hopkins AIAI Lab. This life-saving technology demonstrates the powerful application of AI in healthcare, enabling potentially life-saving early diagnosis capabilities with exceptional accuracy rates.",
      status: "Completed",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Keras", "Medical Data", "Machine Learning", "DICOM Processing"],
      features: [
        "95%+ accuracy in cancer detection",
        "Advanced medical image analysis",
        "Early-stage diagnosis capability",
        "HIPAA-compliant healthcare AI",
        "Comprehensive data preprocessing pipeline",
        "Cross-validation and model testing",
        "Integration with radiology workflows",
        "Automated report generation"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Interactive Portfolio Website",
      description: "Designed and developed this comprehensive portfolio website featuring a real-time black hole simulation powered by WebAssembly and WebGL. The site showcases technical expertise through interactive 3D graphics, modern responsive design, and seamless user experience, demonstrating proficiency in both frontend development and advanced graphics programming.",
      status: "Completed",
      technologies: ["React", "TypeScript", "WebGL", "WebAssembly", "C++", "Tailwind CSS", "Framer Motion"],
      features: [
        "Real-time black hole physics simulation",
        "WebGL-based ray tracing",
        "Responsive modern design",
        "Interactive 3D graphics",
        "Smooth animations and transitions",
        "Mobile-optimized experience",
        "SEO-optimized structure",
        "Performance-optimized rendering"
      ],
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const technicalSkills = [
    { name: "Python", level: 90, color: "bg-yellow-500" },
    { name: "JavaScript", level: 85, color: "bg-yellow-400" },
    { name: "Java", level: 80, color: "bg-red-500" },
    { name: "React", level: 85, color: "bg-blue-500" },
    { name: "Machine Learning", level: 80, color: "bg-green-500" },
    { name: "Financial Analysis", level: 85, color: "bg-purple-500" }
  ];

  return (
    <section id="projects" className="py-20 retro-bg retro-text">
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
            <span className="accent-text animate-glow">PROJECTS</span>
            <span className="text-retro-orange">.EXE</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl retro-text opacity-80 max-w-3xl mx-auto font-retro"
          >
            &gt; COMPILING_PORTFOLIO.py // Technical projects and innovations
          </motion.p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12 mb-20"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="retro-card rounded-xl p-8 hover:shadow-xl transition-all duration-300 retro-border"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl retro-card text-retro-gold mr-4`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-retro font-bold text-retro-orange mb-1">
                        {project.title}
                      </h3>
                      <span className={`px-3 py-1 retro-border rounded-full text-sm font-retro ${
                        project.status === 'Completed'
                          ? 'text-retro-teal'
                          : project.status === 'Upcoming'
                          ? 'text-retro-gold'
                          : 'text-retro-coral'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <p className="retro-text opacity-90 leading-relaxed mb-6 font-retro">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 retro-border rounded-full text-sm font-retro text-retro-gold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="retro-card rounded-xl p-6 retro-border">
                  <h4 className="font-retro font-semibold text-retro-orange mb-4">KEY_FEATURES.cfg</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm retro-text opacity-80 font-retro">
                        <span className="w-2 h-2 bg-retro-gold rounded-full mr-3 animate-pulse"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="retro-card rounded-2xl p-8 retro-border"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-retro font-bold text-retro-gold mb-8 text-center"
          >
            TECHNICAL_PROFICIENCY.sys
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="retro-card rounded-lg p-4 retro-border"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-retro font-medium text-retro-orange">{skill.name}</span>
                  <span className="text-sm text-retro-gold font-retro">{skill.level}%</span>
                </div>
                <div className="w-full bg-retro-charcoal/50 rounded-full h-2 retro-border">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-2 rounded-full bg-retro-gold animate-pulse"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <p className="retro-text opacity-90 mb-4 font-retro">
              &gt; Passionate about leveraging technology to solve real-world problems in finance and healthcare
            </p>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="https://github.com/omarelfernani"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center px-4 py-2 retro-card retro-border text-retro-teal rounded-lg hover:bg-retro-teal/10 transition-colors font-retro"
              >
                <Github className="w-4 h-4 mr-2" />
                VIEW_GITHUB.exe
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1 }}
                className="flex items-center px-4 py-2 retro-border text-retro-coral rounded-lg hover:bg-retro-coral/10 transition-colors font-retro"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                DISCUSS_PROJECTS.cmd
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
