import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C++', 'Python', 'JavaScript (ES6+)'],
      color: 'blue'
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Node.js', 'Express.js', 'NestJS'],
      color: 'green'
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'Prisma'],
      color: 'purple'
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3, IAM, VPC, CloudFormation)', 'Git','Docker'],
      color: 'orange'
    },
    {
      title: 'Concepts',
      skills: ['Data Structures & Algorithms', 'API Design', 'Authentication'],
      color: 'cyan'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'border-blue-500',
      green: 'border-green-500',
      purple: 'border-purple-500',
      orange: 'border-orange-500',
      cyan: 'border-cyan-500'
    };
    return colorMap[color as keyof typeof colorMap] || 'border-blue-500';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I use to build modern applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4 text-left">
                  {category.skills.map((skill) => (
                    <div key={skill} className={`border-l-4 ${getColorClasses(category.color)} pl-4`}>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {skill}
                      </h4>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;