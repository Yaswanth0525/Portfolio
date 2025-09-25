import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Publications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <motion.div
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Certifications
              </h3>
              <div className="space-y-4 text-left">
                <div className="border-l-4 border-blue-500 pl-4">
                  <a
                    href="https://drive.google.com/file/d/1Sa1gOKnhgYBm9S0sd3TzkxIcCbVHi9AO/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 dark:text-white hover:underline"
                  >
                    <h4>
                      ServiceNow Certified Application Developer (CAD)
                    </h4>
                  </a>
                  <p className="text-gray-600 dark:text-gray-300">Jun 2025</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <a
                    href="https://drive.google.com/file/d/1g8OdchL00sSIbpZRmRYCi9W5rCTxXxdN/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 dark:text-white hover:underline"
                  >
                    <h4>
                      ServiceNow Certified System Administrator (CSA)
                    </h4>
                  </a>
                  <p className="text-gray-600 dark:text-gray-300">Mar 2025</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <a
                    href="https://drive.google.com/file/d/1LGd6UQuIlDeamXqBOHdeziDQEjp8Dfdm/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 dark:text-white hover:underline"
                  >
                    <h4>
                      AWS Academy Graduate: Cloud Foundations
                    </h4>
                  </a>
                  <p className="text-gray-600 dark:text-gray-300">Nov 2024</p>
                </div>
              </div>
            </motion.div>

            {/* Publications */}
            <motion.div
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Publications
              </h3>
              <div className="text-left">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Deep Learning for Real-Time Object Detection in Autonomous Vehicles
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    International Journal of Research Publication and Reviews (IJRPR)
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    DOI: IJRPR122633-1 • Dec 2024
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;