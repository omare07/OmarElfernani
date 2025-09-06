import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, User, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "omar.elfernani@example.com",
      link: "mailto:omar.elfernani@example.com",
      color: "bg-retro-skyBlue"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "(410) 555-0123",
      link: "tel:+14105550123",
      color: "bg-retro-pastelGreen"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Baltimore, MD",
      link: "#",
      color: "bg-retro-lightYellow"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/omarelfernani",
      color: "hover:bg-retro-darkCyan"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/omarelfernani",
      color: "hover:bg-retro-skyBlue"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: "Email",
      url: "mailto:omar.elfernani@example.com",
      color: "hover:bg-retro-pastelGreen"
    }
  ];

  return (
    <section id="contact" className="py-20 retro-bg">
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
            <span className="accent-text animate-glow">GET IN</span>
            <br />
            <span className="text-retro-orange">TOUCH</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl retro-text opacity-80 max-w-3xl mx-auto font-retro"
          >
            Ready to discuss opportunities, collaborations, or just connect? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-retro-orange font-retro">Let's Connect</h3>
              <p className="retro-text opacity-80 leading-relaxed mb-8 font-retro">
                As a first-generation, African American student from a low-income family, I'm passionate 
                about leveraging technology and finance to create positive change. I'm always excited to 
                discuss opportunities in finance, AI research, environmental advocacy, or connecting with 
                fellow students and professionals. I speak Arabic and French at home and am deeply committed 
                to my faith as a Muslim while pursuing my academic and professional goals.
              </p>
            </motion.div>

            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-4 retro-card retro-border rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className={`p-3 rounded-lg ${contact.color} mr-4 text-white`}>
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold retro-text font-retro">{contact.title}</h4>
                    <p className="retro-text opacity-70 font-retro">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-retro-orange">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 retro-card retro-border rounded-lg retro-text transition-all duration-300 hover:text-retro-gold"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              variants={itemVariants}
              className="retro-card retro-border rounded-xl p-6 mt-8"
            >
              <h4 className="text-lg font-semibold mb-4 text-retro-orange">Quick Facts</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-retro-orange">24h</div>
                  <div className="retro-text opacity-70 font-retro">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-retro-orange">3</div>
                  <div className="retro-text opacity-70 font-retro">Languages Spoken</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-retro-orange">4.6</div>
                  <div className="retro-text opacity-70 font-retro">Weighted GPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-retro-orange">1380</div>
                  <div className="retro-text opacity-70 font-retro">SAT Score</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="retro-card retro-border rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-retro-orange font-retro">Send a Message</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-retro-orange mb-2">Message Sent!</h4>
                <p className="retro-text opacity-80 font-retro">Thank you for reaching out. I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 retro-text font-retro">Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 retro-text opacity-50" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 retro-card retro-border rounded-lg focus:border-retro-teal focus:ring-2 focus:ring-retro-teal/20 focus:outline-none retro-text placeholder-retro-text placeholder-opacity-50"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 retro-text font-retro">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 retro-text opacity-50" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 retro-card retro-border rounded-lg focus:border-retro-teal focus:ring-2 focus:ring-retro-teal/20 focus:outline-none retro-text placeholder-retro-text placeholder-opacity-50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 retro-text font-retro">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 retro-card retro-border rounded-lg focus:border-retro-teal focus:ring-2 focus:ring-retro-teal/20 focus:outline-none retro-text placeholder-retro-text placeholder-opacity-50"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 retro-text font-retro">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 retro-text opacity-50" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-3 retro-card retro-border rounded-lg focus:border-retro-teal focus:ring-2 focus:ring-retro-teal/20 focus:outline-none retro-text placeholder-retro-text placeholder-opacity-50 resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center px-8 py-3 retro-card retro-border text-retro-teal rounded-lg font-retro font-semibold hover:bg-retro-teal/10 transition-colors duration-200"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 pt-8 border-t retro-border text-center"
        >
          <p className="retro-text opacity-80 font-retro">
            © 2024 Omar Elfernani. Built with React, TypeScript, WebGL, and WebAssembly.
          </p>
          <p className="retro-text opacity-60 mt-2 text-sm font-retro">
            First-generation student • Environmental advocate • Future finance professional
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
