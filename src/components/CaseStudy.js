import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CaseStudy = () => {
  const [activeTab, setActiveTab] = useState(0);

  const caseStudy = {
    title: "E-commerce Platform Quality Assurance",
    subtitle: "Comprehensive testing strategy that reduced bugs by 85%",
    overview: "Led the QA process for a major e-commerce platform serving 100K+ users, implementing automated testing frameworks and establishing quality standards.",
    
    tabs: [
      {
        title: "Problem",
        icon: "🎯",
        content: {
          title: "The Challenge",
          points: [
            "Manual testing was consuming 60% of development time",
            "Critical bugs were reaching production environment",
            "No standardized testing procedures across teams",
            "Regression testing was incomplete and inconsistent",
            "User experience issues were not caught early"
          ],
          metrics: [
            { label: "Bug Escape Rate", value: "23%", status: "bad" },
            { label: "Testing Time", value: "40 hours/sprint", status: "bad" },
            { label: "User Complaints", value: "150/month", status: "bad" }
          ]
        }
      },
      {
        title: "Approach",
        icon: "🚀",
        content: {
          title: "Strategic Solution",
          points: [
            "Implemented automated testing framework using Selenium WebDriver",
            "Created comprehensive test case library with 500+ scenarios",
            "Established CI/CD pipeline integration for continuous testing",
            "Developed API testing suite using Postman and Newman",
            "Introduced cross-browser and mobile testing protocols"
          ],
          timeline: [
            { phase: "Analysis & Planning", duration: "2 weeks" },
            { phase: "Framework Setup", duration: "3 weeks" },
            { phase: "Test Case Development", duration: "4 weeks" },
            { phase: "Integration & Training", duration: "2 weeks" }
          ]
        }
      },
      {
        title: "Tools",
        icon: "🛠️",
        content: {
          title: "Technology Stack",
          categories: [
            {
              name: "Automation Tools",
              tools: ["Selenium WebDriver", "TestNG", "Maven", "Jenkins"]
            },
            {
              name: "API Testing",
              tools: ["Postman", "Newman", "REST Assured", "SoapUI"]
            },
            {
              name: "Performance",
              tools: ["JMeter", "LoadRunner", "GTmetrix", "Lighthouse"]
            },
            {
              name: "Management",
              tools: ["JIRA", "TestRail", "Confluence", "Git"]
            }
          ]
        }
      },
      {
        title: "Results",
        icon: "📈",
        content: {
          title: "Impact & Outcomes",
          achievements: [
            "Reduced bug escape rate from 23% to 3.5%",
            "Decreased testing time by 70% through automation",
            "Improved user satisfaction score from 3.2 to 4.6/5",
            "Established reusable testing framework for future projects",
            "Trained 8 team members on new testing procedures"
          ],
          metrics: [
            { label: "Bug Escape Rate", value: "3.5%", status: "good" },
            { label: "Testing Time", value: "12 hours/sprint", status: "good" },
            { label: "User Complaints", value: "25/month", status: "good" },
            { label: "Test Coverage", value: "95%", status: "excellent" }
          ]
        }
      },
      {
        title: "Learnings",
        icon: "💡",
        content: {
          title: "Key Takeaways",
          lessons: [
            {
              title: "Early Automation Investment",
              description: "Investing time in automation framework early pays dividends in long-term efficiency"
            },
            {
              title: "Cross-functional Collaboration",
              description: "Working closely with developers improved test case quality and bug prevention"
            },
            {
              title: "Continuous Improvement",
              description: "Regular retrospectives and process refinement led to better outcomes"
            },
            {
              title: "Documentation Importance",
              description: "Comprehensive documentation enabled knowledge transfer and team scaling"
            }
          ],
          nextSteps: [
            "Implement AI-powered test case generation",
            "Expand mobile testing coverage",
            "Integrate visual regression testing",
            "Develop performance testing benchmarks"
          ]
        }
      }
    ]
  };

  return (
    <section id="case-study" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-black mb-6 ultra-sharp">
            <span className="text-white" style={{
              textShadow: '0 0 4px rgba(0, 255, 255, 0.2), 0 0 8px rgba(0, 255, 255, 0.1)'
            }}>
              Case Study
            </span>
          </h2>
          <h3 className="text-3xl font-bold mb-4 text-cyan-400" style={{
            textShadow: '0 0 3px rgba(0, 255, 255, 0.15), 0 0 6px rgba(0, 255, 255, 0.05)'
          }}>{caseStudy.title}</h3>
          <p className="text-xl text-gray-300 mb-4">{caseStudy.subtitle}</p>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">{caseStudy.overview}</p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center mb-12 electric-border holo-card rounded-3xl p-3 backdrop-blur-xl animate-electric-pulse"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {caseStudy.tabs.map((tab, index) => (
            <motion.button
              key={index}
              className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform-gpu ${
                activeTab === index
                  ? 'electric-border holo-text animate-premium-glow shadow-premium'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              {caseStudy.tabs[activeTab].content.title}
            </h3>

            {/* Problem Tab */}
            {activeTab === 0 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-red-400 mb-4">Key Issues</h4>
                    <ul className="space-y-3">
                      {caseStudy.tabs[0].content.points.map((point, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3 text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <span className="text-red-400 mt-1">•</span>
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-yellow-400 mb-4">Initial Metrics</h4>
                    <div className="space-y-4">
                      {caseStudy.tabs[0].content.metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <span className="text-gray-300">{metric.label}</span>
                          <span className="text-red-400 font-bold">{metric.value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Results Tab */}
            {activeTab === 3 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-green-400 mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {caseStudy.tabs[3].content.achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3 text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <span className="text-green-400 mt-1">✓</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-400 mb-4">Final Metrics</h4>
                    <div className="space-y-4">
                      {caseStudy.tabs[3].content.metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <span className="text-gray-300">{metric.label}</span>
                          <span className={`font-bold ${
                            metric.status === 'excellent' ? 'text-purple-400' : 'text-green-400'
                          }`}>
                            {metric.value}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs content would go here with similar structure */}
            {activeTab !== 0 && activeTab !== 3 && (
              <div className="text-gray-300">
                <p className="text-lg mb-4">
                  Content for {caseStudy.tabs[activeTab].title} tab - 
                  This would contain the detailed information for this section.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-700/30 rounded-lg">
                    <h4 className="text-blue-400 font-semibold mb-3">Key Points</h4>
                    <p className="text-gray-400">Detailed content specific to this tab would be displayed here.</p>
                  </div>
                  <div className="p-6 bg-gray-700/30 rounded-lg">
                    <h4 className="text-purple-400 font-semibold mb-3">Implementation</h4>
                    <p className="text-gray-400">Technical details and implementation specifics.</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudy;