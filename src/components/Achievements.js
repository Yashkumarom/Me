import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const stats = [
    { label: "Projects Completed", value: "15+", icon: "📁" },
    { label: "Bugs Found & Fixed", value: "500+", icon: "🐛" },
    { label: "Test Cases Written", value: "1000+", icon: "✅" },
    { label: "Hours of Testing", value: "2000+", icon: "⏱️" }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-7xl font-black text-center mb-20"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-white" style={{
            textShadow: '0 0 6px rgba(0, 255, 255, 0.3), 0 0 12px rgba(0, 255, 255, 0.2), 0 0 18px rgba(0, 255, 255, 0.1)'
          }}>
            My <span className="text-cyan-400">Achievements</span>
          </span>
        </motion.h2>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center gaming-card p-8 rounded-2xl backdrop-blur-xl transform-gpu group"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.08,
                y: -8,
                rotateY: 5
              }}
            >
              <motion.div
                className="text-6xl mb-6 filter drop-shadow-lg"
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 15,
                  filter: "drop-shadow(0 0 20px rgba(0, 255, 255, 0.5))"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className="text-4xl font-black mb-4"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #0099cc, #006699)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-300 text-lg font-semibold group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="gaming-btn font-semibold px-10 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;