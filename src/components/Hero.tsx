import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/60 to-white dark:from-blue-900/20 dark:to-gray-950">
      <div className="container mx-auto px-6 pt-28 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-start md:items-center">
          <div className="order-1">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Yaswanth Bogila
            </motion.h1>
          </div>
          <div className="order-2">
            <motion.h2
              className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
            Full-Stack Web Developer & Cloud Engineer
            </motion.h2>
            <motion.p
              className="max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              I specialize in building scalable web applications and cloud-native solutions. My focus is on performance, clean architecture, and delivering real-world impact through technology.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 transition"
              >
                View Projects
              </button>
              <button
                onClick={scrollToAbout}
                className="px-6 py-3 rounded-md border border-gray-300 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 transition"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;