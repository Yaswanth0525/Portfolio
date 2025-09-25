import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { experiences } from '../data/portfolio';

const Timeline: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional experience and academic journey in computer science and cloud computing
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            <div className="space-y-8">
              {experiences.map((experience) => (
                <motion.div
                  key={experience.id}
                  className="relative flex items-start"
                  variants={itemVariants}
                >
                  {/* Timeline Icon */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-900 border-4 border-blue-600 rounded-full shadow-lg">
                    {experience.type === 'work' ? (
                      <BriefcaseIcon className="w-6 h-6 text-blue-600" />
                    ) : (
                      <AcademicCapIcon className="w-6 h-6 text-blue-600" />
                    )}
                  </div>

                  {/* Content */}
                  <motion.div
                    className="ml-8 flex-1 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {experience.title}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full mt-2 sm:mt-0">
                        {experience.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                      {experience.company}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {experience.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;