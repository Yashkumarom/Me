import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "💻",
      description: "Modern e-commerce platform built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      image: "📱",
      description: "Secure mobile banking application with biometric authentication",
      technologies: ["React Native", "Firebase", "Biometrics"],
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Gaming Dashboard",
      category: "UI/UX Design",
      image: "🎮",
      description: "Interactive gaming dashboard with real-time statistics",
      technologies: ["Figma", "React", "Chart.js", "WebSocket"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "YouTube Analytics",
      category: "Content Creation",
      image: "📊",
      description: "Analytics dashboard for YouTube content creators",
      technologies: ["YouTube API", "React", "D3.js", "Node.js"],
      color: "from-pink-400 to-red-500"
    },
    {
      title: "Portfolio Website",
      category: "Web Design",
      image: "🌐",
      description: "Modern portfolio website with interactive animations",
      technologies: ["React", "Framer Motion", "Tailwind"],
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Social Media App",
      category: "Full Stack",
      image: "📲",
      description: "Social networking platform with real-time messaging",
      technologies: ["MERN Stack", "Socket.io", "AWS"],
      color: "from-orange-400 to-yellow-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="text-cyan-400">Project</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing my recent work and creative projects across different domains
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="gaming-card overflow-hidden group cursor-pointer relative"
              initial={{ opacity: 0, y: 60, rotateX: -25, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.08,
                y: -20,
                rotateY: 12,
                rotateX: 8,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `conic-gradient(from 0deg, transparent, rgba(0, 255, 255, 0.4), transparent, rgba(128, 0, 255, 0.3), transparent)`,
                  padding: '3px'
                }}
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Project Image/Icon with enhanced effects */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px),
                                     radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                  }}
                  animate={{
                    backgroundPosition: ['0px 0px', '30px 30px']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <motion.div
                  className="text-6xl relative z-10"
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: [0, -15, 15, 0],
                    filter: "drop-shadow(0 0 40px rgba(255, 255, 255, 0.8))"
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.span
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(255, 255, 255, 0.5)",
                        "0 0 40px rgba(255, 255, 255, 0.8)",
                        "0 0 20px rgba(255, 255, 255, 0.5)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {project.image}
                  </motion.span>
                  
                  {/* Floating particles around icon */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [-8, 8, -8],
                      x: [3, -3, 3],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [5, -5, 5],
                      x: [-2, 2, -2],
                      opacity: [0.3, 0.9, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                {/* Enhanced Overlay with multiple layers */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <motion.button
                        className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                          color: '#0f172a'
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          boxShadow: "0 15px 40px rgba(0, 212, 255, 0.5)",
                          filter: "brightness(1.2)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {/* Button shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ['-100%', '100%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                        <span className="relative z-10">View Live</span>
                      </motion.button>
                      
                      <motion.button
                        className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden"
                        style={{
                          border: '2px solid #00d4ff',
                          color: '#00d4ff',
                          background: 'rgba(0, 0, 0, 0.5)'
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          background: '#00d4ff',
                          color: '#0f172a',
                          boxShadow: "0 15px 40px rgba(0, 212, 255, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="relative z-10">GitHub</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-6 relative">
                {/* Category with animated background */}
                <motion.span 
                  className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full mb-3 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(128, 0, 255, 0.2))',
                    color: '#00d4ff',
                    border: '1px solid rgba(0, 255, 255, 0.3)'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="relative z-10">{project.category}</span>
                </motion.span>

                {/* Title with typewriter effect */}
                <motion.h3 
                  className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-500 transition-all duration-500 relative"
                  whileHover={{ y: -2 }}
                >
                  {project.title}
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </motion.h3>

                {/* Description with reveal animation */}
                <motion.p 
                  className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300"
                  whileHover={{ scale: 1.01 }}
                >
                  {project.description}
                </motion.p>

                {/* Enhanced Technologies with animations */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full transition-all duration-300 relative overflow-hidden cursor-pointer"
                      style={{
                        background: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid rgba(0, 255, 255, 0.3)',
                        color: '#00d4ff'
                      }}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.15,
                        borderColor: 'rgba(0, 255, 255, 0.8)',
                        background: 'rgba(0, 212, 255, 0.1)',
                        y: -3,
                        boxShadow: "0 8px 20px rgba(0, 212, 255, 0.3)"
                      }}
                    >
                      {/* Tag shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                          delay: techIndex * 0.2
                        }}
                      />
                      <span className="relative z-10">{tech}</span>
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Enhanced Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-8 transition-opacity duration-700 pointer-events-none rounded-2xl`}
                whileHover={{ scale: 1.05 }}
              />
              
              {/* Corner particles */}
              <motion.div
                className="absolute top-3 right-3 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
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
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;