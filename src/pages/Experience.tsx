import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, FlaskConical, Users, Building2, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const experiences = [
    {
      year: "2025 (Summer)",
      title: "AI Research Intern",
      company: "SARE Program - Johns Hopkins Kiemen Lab",
      type: "Research",
      icon: <FlaskConical className="w-6 h-6" />,
      description: "Developed advanced AI algorithm to construct 3D volumes from histological sheets, enabling detailed visualization of organ internal structures. This cutting-edge research has potential applications in medical diagnostics and surgical planning.",
      skills: ["Machine Learning", "Computer Vision", "3D Reconstruction", "Python", "Medical Imaging"],
      location: "Johns Hopkins University"
    },
    {
      year: "2024-2025",
      title: "Team Member",
      company: "Chick-fil-A",
      type: "Service",
      icon: <Users className="w-6 h-6" />,
      description: "Provided exceptional customer service in fast-paced environment while maintaining high quality standards. Developed strong communication skills and ability to work effectively under pressure.",
      skills: ["Customer Service", "Team Collaboration", "Time Management", "Problem Solving"],
      location: "Baltimore, MD"
    },
    {
      year: "2023 (Summer)",
      title: "AI Research Intern",
      company: "SARE Program - Johns Hopkins AIAI Lab",
      type: "Research",
      icon: <FlaskConical className="w-6 h-6" />,
      description: "Created accurate machine learning model for lung cancer detection, contributing to early diagnosis capabilities. Worked with medical datasets and applied advanced ML techniques for healthcare applications.",
      skills: ["Machine Learning", "Data Analysis", "Healthcare AI", "Python", "Medical Research"],
      location: "Johns Hopkins University"
    },
    {
      year: "2023-2024",
      title: "Team Member",
      company: "Auction Cafe LLC",
      type: "Service",
      icon: <Building2 className="w-6 h-6" />,
      description: "Gained valuable experience in customer service and operations management. Developed understanding of business operations and customer relations in retail environment.",
      skills: ["Customer Service", "Operations", "Retail Management", "Communication"],
      location: "Baltimore, MD"
    },
    {
      year: "2022-2023",
      title: "Team Member",
      company: "Jersey Mike's",
      type: "Service",
      icon: <Briefcase className="w-6 h-6" />,
      description: "Learned fundamental work skills including reliability, punctuality, and teamwork. Balanced academic responsibilities with part-time employment, demonstrating strong time management abilities.",
      skills: ["Time Management", "Reliability", "Teamwork", "Food Service"],
      location: "Baltimore, MD"
    },
    {
      year: "2022-2023",
      title: "Lifeguard",
      company: "American Pool (Various Stations)",
      type: "Safety",
      icon: <Users className="w-6 h-6" />,
      description: "Ensured safety of pool patrons through vigilant monitoring and emergency response. Developed leadership skills and ability to remain calm under pressure in safety-critical situations.",
      skills: ["Leadership", "Safety Management", "Emergency Response", "Responsibility"],
      location: "Baltimore Area"
    },
    {
      year: "2022 (Summer)",
      title: "GEM's Scholar",
      company: "GEM's Program",
      type: "Academic",
      icon: <FlaskConical className="w-6 h-6" />,
      description: "Participated in prestigious STEM enrichment program during 8th grade summer. Early exposure to advanced scientific concepts and research methodologies that sparked interest in STEM fields.",
      skills: ["STEM Research", "Academic Excellence", "Scientific Method", "Early Achievement"],
      location: "Baltimore, MD"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Research': return 'bg-retro-teal/20 text-retro-teal border-retro-teal/30';
      case 'Service': return 'bg-retro-orange/20 text-retro-orange border-retro-orange/30';
      case 'Safety': return 'bg-retro-coral/20 text-retro-coral border-retro-coral/30';
      case 'Academic': return 'bg-retro-sage/20 text-retro-sage border-retro-sage/30';
      default: return 'bg-retro-gold/20 text-retro-gold border-retro-gold/30';
    }
  };

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
            <span className="accent-text animate-glow">PROFESSIONAL</span>
            <br />
            <span className="text-retro-orange">EXPERIENCE</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl retro-text opacity-80 max-w-3xl mx-auto font-retro"
          >
            Five years of diverse work experience spanning research, service, and leadership roles
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-retro-gold/30"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-retro-gold rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="retro-card rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-retro-gold mr-2" />
                        <span className="text-retro-gold font-retro font-semibold text-sm">
                          {exp.year}
                        </span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-retro font-medium border ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-start mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-retro-gold/10 rounded-lg mr-4 text-retro-gold">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-retro font-bold text-retro-orange mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-retro-orange font-retro font-medium text-sm mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center retro-text opacity-60 text-xs">
                          <MapPin className="w-3 h-3 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="retro-text opacity-80 mb-4 leading-relaxed text-sm font-retro">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 retro-border rounded-full text-xs font-retro text-retro-gold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="text-center retro-card rounded-xl p-6"
          >
            <div className="text-3xl font-retro font-bold text-retro-gold mb-2">5+</div>
            <div className="retro-text opacity-80 font-retro">Years of Work Experience</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="text-center retro-card rounded-xl p-6"
          >
            <div className="text-3xl font-retro font-bold text-retro-teal mb-2">2</div>
            <div className="retro-text opacity-80 font-retro">Research Internships at Johns Hopkins</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="text-center retro-card rounded-xl p-6"
          >
            <div className="text-3xl font-retro font-bold text-retro-orange mb-2">7</div>
            <div className="retro-text opacity-80 font-retro">Different Organizations</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;