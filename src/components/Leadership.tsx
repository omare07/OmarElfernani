import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Leaf, DollarSign, Code, Trophy, Heart } from 'lucide-react';

const Leadership: React.FC = () => {
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

  const leadershipRoles = [
    {
      title: "Founder & President",
      organization: "BMore Green",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      description: "Founded and lead BMore Green, an environmental organization dedicated to promoting environmental consciousness among all Baltimore residents. Initiated comprehensive community outreach programs and awareness campaigns to address local environmental challenges, advocating for sustainable practices and environmental justice throughout the city.",
      achievements: [
        "Founded organization from ground up with clear mission",
        "Developed comprehensive community outreach programs",
        "Led environmental awareness campaigns across Baltimore",
        "Engaged diverse Baltimore residents in environmental advocacy",
        "Promoted sustainable practices in local communities",
        "Built network of environmental advocates and volunteers",
        "Organized community clean-up initiatives",
        "Advocated for environmental policy changes"
      ],
      impact: "City-wide Environmental Consciousness",
      type: "Founder"
    },
    {
      title: "Finance Officer",
      organization: "HackPoly.tech",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      description: "Serve as Finance Officer for Baltimore Polytechnic Institute's premier technology club, managing budgets, securing funding for hackathons and tech events, and bridging the gap between technology innovation and financial literacy among students. Lead financial planning for major tech initiatives and student projects.",
      achievements: [
        "Manage comprehensive club financial operations",
        "Secure funding for hackathons and tech competitions",
        "Organize financial literacy workshops for tech students",
        "Bridge technology innovation and finance education",
        "Support student tech startup initiatives",
        "Coordinate budget planning with school administration",
        "Develop fundraising strategies for major events",
        "Mentor students in tech entrepreneurship"
      ],
      impact: "Student Tech & Financial Innovation",
      type: "Officer"
    },
    {
      title: "Club Officer",
      organization: "WallStreet Parrots",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      description: "Lead officer role in Baltimore Polytechnic Institute's finance and investment club, organizing trading competitions, market analysis sessions, and comprehensive financial literacy workshops for fellow students interested in finance careers. Mentor students in investment strategies and financial market analysis.",
      achievements: [
        "Organize school-wide trading competitions",
        "Lead weekly market analysis sessions",
        "Conduct comprehensive financial literacy workshops",
        "Mentor aspiring finance students in career planning",
        "Coordinate advanced investment simulations",
        "Build strong finance community at school",
        "Develop curriculum for financial education",
        "Host guest speakers from finance industry"
      ],
      impact: "Student Financial Literacy & Career Preparation",
      type: "Officer"
    }
  ];

  const additionalInvolvement = [
    {
      name: "Chess Club",
      icon: <Trophy className="w-6 h-6" />,
      description: "Active member developing strategic thinking and problem-solving skills"
    },
    {
      name: "STEM Outreach",
      icon: <Users className="w-6 h-6" />,
      description: "Volunteer to promote STEM education in the community"
    },
    {
      name: "Muslim Student Association",
      icon: <Heart className="w-6 h-6" />,
      description: "Active participant in faith-based community and cultural activities"
    }
  ];

  return (
    <section id="leadership" className="py-20 retro-bg retro-text">
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
            <span className="accent-text animate-glow">LEADERSHIP</span>
            <span className="text-retro-orange">.EXE</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl retro-text max-w-3xl mx-auto font-retro"
          >
            &gt; EXECUTING_LEADERSHIP.sh // Environmental advocacy, finance education, and community service
          </motion.p>
        </motion.div>

        {/* Main Leadership Roles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12 mb-16"
        >
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`retro-card rounded-2xl retro-border hover:shadow-xl transition-all duration-300 overflow-hidden ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:flex">
                <div className="lg:flex-1 p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-4 rounded-xl retro-card text-retro-gold mr-4">
                      {role.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-retro font-bold text-retro-orange">
                          {role.title}
                        </h3>
                        <span className={`px-3 py-1 retro-border rounded-full text-sm font-retro ${
                          role.type === 'Founder'
                            ? 'text-retro-teal'
                            : 'text-retro-coral'
                        }`}>
                          {role.type}
                        </span>
                      </div>
                      <p className="text-lg text-retro-gold font-retro font-semibold">
                        {role.organization}
                      </p>
                    </div>
                  </div>

                  <p className="retro-text leading-relaxed mb-6 font-retro">
                    {role.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-retro font-semibold text-retro-orange mb-3">KEY_ACHIEVEMENTS.log</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {role.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center text-sm retro-text font-retro">
                          <span className="w-2 h-2 bg-retro-gold rounded-full mr-3 flex-shrink-0 animate-pulse"></span>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="inline-flex items-center px-4 py-2 retro-card retro-border rounded-full">
                    <span className="text-retro-gold font-retro font-medium text-sm">
                      Impact: {role.impact}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Involvement */}
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
            ADDITIONAL_INVOLVEMENT.cfg
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalInvolvement.map((activity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 retro-card rounded-xl retro-border hover:bg-retro-charcoal/20 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 retro-card rounded-full mx-auto mb-4 text-retro-gold animate-pulse">
                  {activity.icon}
                </div>
                <h4 className="text-lg font-retro font-semibold text-retro-orange mb-2">
                  {activity.name}
                </h4>
                <p className="retro-text text-sm font-retro">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Philosophy */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center retro-card rounded-2xl p-8 retro-border"
        >
          <h3 className="text-2xl font-retro font-bold mb-4 text-retro-gold">LEADERSHIP_PHILOSOPHY.txt</h3>
          <p className="text-lg retro-text max-w-3xl mx-auto leading-relaxed font-retro">
            &gt; "True leadership is about empowering others and creating positive change in your community.
            Whether it's promoting environmental awareness through BMore Green, fostering financial
            literacy among peers, or bridging technology and finance education, I believe in leading
            by example and inspiring others to take action."
          </p>
          <div className="mt-6 flex justify-center space-x-8 text-sm font-retro">
            <div className="text-center">
              <div className="text-2xl font-bold text-retro-teal">1</div>
              <div className="retro-text">Organization Founded</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-retro-coral">2</div>
              <div className="retro-text">Officer Positions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-retro-sage">6</div>
              <div className="retro-text">Total Club Memberships</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
