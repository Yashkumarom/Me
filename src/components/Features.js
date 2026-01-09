import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Creating responsive and modern web applications using latest technologies like React, Node.js, and modern frameworks.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: "🎨",
      title: "Graphic Design",
      description: "Designing beautiful and functional user interfaces with focus on user experience and modern design principles.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: "📱",
      title: "Digital Marketing",
      description: "Building engaging content strategies and growing online presence through YouTube, social media, and digital platforms.",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              My
            </motion.span>
            {" "}
            <motion.span 
              className="text-cyan-400 inline-block"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(0, 255, 255, 0.6)"
              }}
            >
              Services
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Comprehensive digital solutions tailored to meet your business needs and drive growth
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="gaming-card p-8 text-center group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Simple background glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
              />
              
              {/* Content container */}
              <div className="relative z-10">
                {/* Clean icon animation */}
                <motion.div
                  className="text-6xl mb-6"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {service.icon}
                </motion.div>

                {/* Professional title with gradient animation */}
                <motion.h3 className="text-2xl font-bold mb-4">
                  <motion.span
                    style={{
                      background: 'linear-gradient(45deg, #00ffff, #0080ff, #4040ff, #8000ff, #ff0080, #00ffff)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {service.title}
                  </motion.span>
                </motion.h3>

                {/* Animated description with typewriter effect */}
                <motion.div className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300 italic">
                  {service.description.split(' ').map((word, wordIndex) => (
                    <motion.span
                      key={wordIndex}
                      className="inline-block mr-1"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 2 + index * 0.5 + wordIndex * 0.08, 
                        duration: 0.4 
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Professional button */}
                <motion.button
                  className="w-full py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400/60"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="gaming-btn font-semibold px-10 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;