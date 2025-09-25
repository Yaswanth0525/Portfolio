// import React from 'react';
// import { motion } from 'framer-motion';
// import { HeartIcon } from '@heroicons/react/24/solid';
// import Logo from './Logo';

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <motion.div
//               className="mb-6 md:mb-0"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <Logo className="text-white" />
//             </motion.div>

//             <motion.div
//               className="flex items-center space-x-2 text-gray-400"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <span>Made with</span>
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 1, repeat: Infinity }}
//               >
//                 <HeartIcon className="w-5 h-5 text-red-500" />
//               </motion.div>
//               <span>by Yaswanth Bogila</span>
//             </motion.div>
//           </div>

//           <motion.div
//             className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <p>&copy; {currentYear} Yaswanth Bogila. All rights reserved.</p>
//           </motion.div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;