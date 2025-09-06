import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Image, Play, Calendar, MapPin, Users, Award } from 'lucide-react';

const Gallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const categories = [
    { id: 'all', label: 'ALL.FILES', icon: <Image className="w-4 h-4" /> },
    { id: 'academic', label: 'ACADEMIC.jpg', icon: <Award className="w-4 h-4" /> },
    { id: 'research', label: 'RESEARCH.png', icon: <Play className="w-4 h-4" /> },
    { id: 'leadership', label: 'LEADERSHIP.gif', icon: <Users className="w-4 h-4" /> },
    { id: 'personal', label: 'PERSONAL.raw', icon: <Camera className="w-4 h-4" /> },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'academic',
      title: 'Baltimore Polytechnic Institute',
      description: 'Senior year at BPI - Engineering excellence',
      date: '2024',
      location: 'Baltimore, MD',
      placeholder: true
    },
    {
      id: 2,
      category: 'research',
      title: 'Johns Hopkins AIAI Lab',
      description: '3D Medical Volume Reconstruction Research',
      date: '2024',
      location: 'Johns Hopkins University',
      placeholder: true
    },
    {
      id: 3,
      category: 'research',
      title: 'Lung Cancer Detection AI',
      description: 'Machine Learning Model Development',
      date: '2023',
      location: 'Johns Hopkins University',
      placeholder: true
    },
    {
      id: 4,
      category: 'leadership',
      title: 'BMore Green Foundation',
      description: 'Environmental organization founding',
      date: '2023',
      location: 'Baltimore, MD',
      placeholder: true
    },
    {
      id: 5,
      category: 'leadership',
      title: 'HackPoly.tech Finance Officer',
      description: 'Leading tech club financial operations',
      date: '2024',
      location: 'Baltimore Polytechnic Institute',
      placeholder: true
    },
    {
      id: 6,
      category: 'leadership',
      title: 'WallStreet Parrots Club',
      description: 'Finance club leadership and mentoring',
      date: '2024',
      location: 'Baltimore Polytechnic Institute',
      placeholder: true
    },
    {
      id: 7,
      category: 'academic',
      title: 'AP Course Excellence',
      description: '11 Advanced Placement courses completed',
      date: '2021-2025',
      location: 'Baltimore Polytechnic Institute',
      placeholder: true
    },
    {
      id: 8,
      category: 'personal',
      title: 'Guitar Performance',
      description: 'Personal hobby and musical expression',
      date: '2024',
      location: 'Home Studio',
      placeholder: true
    },
    {
      id: 9,
      category: 'personal',
      title: 'Community Service',
      description: 'Muslim Student Association activities',
      date: '2023-2024',
      location: 'Baltimore Community',
      placeholder: true
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
            <span className="accent-text animate-glow">GALLERY</span>
            <span className="text-retro-orange">.EXE</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl retro-text opacity-80 max-w-3xl mx-auto font-retro"
          >
            &gt; LOADING_MEMORIES.dat // Life events, achievements, and moments
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-retro text-sm transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'retro-border bg-retro-beige/50 text-retro-orange'
                  : 'retro-border retro-text hover:border-retro-teal hover:text-retro-teal'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="retro-card rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-retro-orange/20 to-retro-teal/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-retro-darker/50 to-transparent"></div>
                <div className="text-center z-10">
                  <Camera className="w-12 h-12 text-retro-gold mx-auto mb-2 animate-float" />
                  <p className="retro-text opacity-60 font-retro text-xs">
                    [PHOTO_PLACEHOLDER]
                  </p>
                </div>
                
                {/* Retro scan lines */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-retro-orange/10 to-transparent animate-pulse opacity-30"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-retro-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-8 h-8 text-retro-gold animate-pulse" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-retro ${
                    item.category === 'academic' ? 'bg-retro-teal/20 text-retro-teal' :
                    item.category === 'research' ? 'bg-retro-gold/20 text-retro-gold' :
                    item.category === 'leadership' ? 'bg-retro-coral/20 text-retro-coral' :
                    'bg-retro-orange/20 text-retro-orange'
                  }`}>
                    {item.category.toUpperCase()}
                  </span>
                  <div className="flex items-center retro-text opacity-60 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.date}
                  </div>
                </div>

                <h3 className="text-lg font-retro font-bold text-retro-orange mb-2 group-hover:text-retro-gold transition-colors">
                  {item.title}
                </h3>
                
                <p className="retro-text opacity-80 text-sm mb-3 leading-relaxed font-retro">
                  {item.description}
                </p>

                <div className="flex items-center retro-text opacity-60 text-xs">
                  <MapPin className="w-3 h-3 mr-1" />
                  {item.location}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Upload Instructions */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center retro-card rounded-xl p-8"
        >
          <Camera className="w-16 h-16 text-retro-gold mx-auto mb-4 animate-float" />
          <h3 className="text-xl font-retro font-bold text-retro-orange mb-2">
            PHOTO_UPLOAD.exe
          </h3>
          <p className="retro-text opacity-80 max-w-2xl mx-auto font-retro">
            Gallery placeholders are ready for your photos! Each section represents 
            different aspects of your journey - academic achievements, research projects, 
            leadership moments, and personal milestones.
          </p>
          <div className="mt-4 text-sm retro-text opacity-60 font-retro">
            &gt; STATUS: AWAITING_MEDIA_FILES.jpg
          </div>
        </motion.div>
      </div>

      {/* Retro decorative elements */}
      <div className="fixed top-1/4 left-4 w-2 h-16 bg-retro-gold opacity-30 animate-pulse"></div>
      <div className="fixed top-1/3 right-4 w-2 h-12 bg-retro-teal opacity-30 animate-pulse"></div>
      <div className="fixed bottom-1/4 left-8 w-12 h-2 bg-retro-coral opacity-30 animate-pulse"></div>
    </section>
  );
};

export default Gallery;
