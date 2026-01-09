import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: '#',
      color: 'from-blue-600 to-cyan-600',
      hoverColor: 'hover:shadow-cyan-500/50'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: '#',
      color: 'from-gray-600 to-blue-600',
      hoverColor: 'hover:shadow-blue-500/50'
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: '#',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:shadow-pink-500/50'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:yashkumarom8@gmail.com',
      color: 'from-purple-500 to-indigo-600',
      hoverColor: 'hover:shadow-purple-500/50'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Gaming Background Effects */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `${['#00ffff', '#0080ff', '#8000ff'][Math.floor(Math.random() * 3)]}40`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-black mb-6">
            <span className="text-gaming-gradient hover-glow">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto hover-glow">
            Multi-talented Developer, YouTuber, Gamer & Designer ready to bring creativity and technical expertise to your next project. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="gaming-card hover-gaming rounded-3xl p-10 backdrop-blur-xl transform-gpu"
            >
              <h3 className="text-3xl font-black text-gaming-gradient hover-glow mb-8">Send Message</h3>
              
              <div className="space-y-6">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-cyan-300 mb-2 font-medium hover-glow">Name</label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-black/50 transition-all duration-300 hover-glow"
                    placeholder="Your full name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-cyan-300 mb-2 font-medium hover-glow">Email</label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-black/50 transition-all duration-300 hover-glow"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Message Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-cyan-300 mb-2 font-medium hover-glow">Message</label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-black/50 transition-all duration-300 resize-none hover-glow"
                    placeholder="Tell me about your project, collaboration ideas, or just say hi..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 gaming-btn hover-gaming rounded-2xl font-bold text-xl transform-gpu"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(0, 255, 255, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="flex items-center justify-center space-x-2"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <span className="text-gaming-gradient">Sending...</span>
                      <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                    </motion.div>
                  ) : (
                    <span className="text-gaming-gradient">Send Message 🚀</span>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Info */}
            <div className="gaming-card hover-gaming rounded-2xl p-8 backdrop-blur-lg">
              <h3 className="text-2xl font-bold text-gaming-gradient hover-glow mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-4 p-4 bg-black/20 rounded-lg hover:bg-black/40 transition-colors hover-gaming"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="text-cyan-300 font-medium hover-glow">Location</div>
                    <div className="text-gray-400">Available for Remote/Hybrid Work</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 p-4 bg-black/20 rounded-lg hover:bg-black/40 transition-colors hover-gaming"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="text-cyan-300 font-medium hover-glow">Email</div>
                    <div className="text-gray-400">yashkumarom8@gmail.com</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 p-4 bg-black/20 rounded-lg hover:bg-black/40 transition-colors hover-gaming"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-2xl">🎮</span>
                  <div>
                    <div className="text-cyan-300 font-medium hover-glow">Specialties</div>
                    <div className="text-gray-400">Development • Gaming • Design • Content</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="gaming-card hover-gaming rounded-2xl p-8 backdrop-blur-lg">
              <h3 className="text-2xl font-bold text-gaming-gradient hover-glow mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className={`group relative flex items-center justify-center p-4 bg-gradient-to-r ${social.color} rounded-xl text-white font-semibold hover:shadow-2xl ${social.hoverColor} transition-all duration-300 overflow-hidden hover-gaming`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 10,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="flex items-center space-x-3"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span>{social.name}</span>
                    </motion.div>
                    
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <motion.div
              className="text-center p-6 gaming-card hover-gaming rounded-2xl backdrop-blur-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-3xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡
              </motion.div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-1 hover-glow">Quick Response</h4>
              <p className="text-gray-300 text-sm">I'll get back to you within 24 hours!</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;