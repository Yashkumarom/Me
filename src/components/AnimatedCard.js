import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ title, description, delay = 0 }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        className="w-full h-48 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg mb-4"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.h3 
        className="text-xl font-semibold text-gray-800 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.4, duration: 0.5 }}
      >
        {description}
      </motion.p>
      
      <motion.button
        className="mt-4 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        Learn More →
      </motion.button>
    </motion.div>
  );
};

export default AnimatedCard;