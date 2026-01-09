import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: "React Development", level: 95, icon: "⚛️" },
    { name: "JavaScript/Node.js", level: 90, icon: "💻" },
    { name: "UI/UX Design", level: 88, icon: "🎨" },
    { name: "Mobile Development", level: 85, icon: "📱" },
    { name: "Content Creation", level: 92, icon: "🎬" },
    { name: "Digital Marketing", level: 80, icon: "📊" },
    { name: "Gaming", level: 95, icon: "🎮" },
    { name: "Graphic Design", level: 87, icon: "✨" }
  ];

  const categories = [
    {
      title: "Frontend Technologies",
      items: ["React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "SASS"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Backend & Database",
      items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "REST APIs"],
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Design & Creative",
      items: ["Figma", "Adobe Creative Suite", "Sketch", "Canva", "Video Editing", "3D Design"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Content & Marketing",
      items: ["YouTube Creation", "Social Media", "SEO", "Content Strategy", "Brand Design", "Analytics"],
      color: "from-pink-400 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
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
            Skills & <span className="text-cyan-400">Expertise</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and creative abilities
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="gaming-card p-6 text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -4
              }}
            >
              {/* Icon */}
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.3, rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                {skill.icon}
              </motion.div>

              {/* Skill Name */}
              <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {skill.name}
              </h3>

              {/* Progress Circle */}
              <div className="relative w-20 h-20 mx-auto mb-4">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-700"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                    className="text-cyan-400"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    initial={{ strokeDasharray: "0 100" }}
                    whileInView={{ strokeDasharray: `${skill.level} 100` }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1.5 }}
                    viewport={{ once: true }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-cyan-400">{skill.level}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="gaming-card p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -4
              }}
            >
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    className="px-3 py-2 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-sm text-gray-300 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + itemIndex * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      borderColor: 'rgba(0, 255, 255, 0.4)',
                      color: '#00d4ff'
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;