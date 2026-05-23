import React from 'react';
import { motion } from 'framer-motion';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };


  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Avatar and Info */}
            <motion.div className="text-center lg:text-left" variants={itemVariants}>
              <div className="relative inline-block mb-8">
                <motion.div
                  className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/myphotoAI.jpg"
                    alt="Yaswanth Bogila"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  {/* <span className="text-white text-2xl">👋</span>
                </div>  */}
              </div>

              <motion.div
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Quick Facts
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>📍 Based in Parvathipuram, India</p>
                  <p>🎓 B.Tech Computer Science - 9.0 GPA</p>
                  <p>💻 Full-Stack Developer</p>
                  <p>☁️ AWS Cloud Computing</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Bio and Skills */}
            <motion.div variants={itemVariants}>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Motivated Computer Science student with a 9.0 GPA at GMR Institute of Technology 
                  and hands-on experience in full-stack development, cloud infrastructure, and DevOps. 
                  I'm passionate about creating impactful solutions and optimizing system performance.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Currently seeking opportunities in fintech or cloud-based product engineering 
                  to drive impactful solutions. I have experience with AWS cloud services, 
                  MERN stack development, and modern DevOps practices.
                </p>
              </div>

              {/* Skills Tags */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Technical Skills:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['C++', 'Python', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'NestJS', 'MongoDB', 'PostgreSQL', 'Prisma', 'AWS', 'Git','Docker'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <motion.a
                href="https://drive.google.com/file/d/1Yh2yHrzhfLjM66UDeZcNcc9JVE3WLX5S/view?usp=drivesdk"
                download
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-cyan-400 text-gray font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
                My Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;