import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center justify-center text-center relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            className="text-xl font-semibold text-white mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Anamika Nafisa
          </motion.h3>
          <motion.p
            className="text-white/60 text-sm mb-8"
            whileHover={{ scale: 1.05 }}
          >
            © {currentYear} All rights reserved
          </motion.p>
          
          <motion.div
            className="absolute bottom-0 right-0 text-white/70 text-xs"
            whileHover={{ scale: 1.05 }}
          >
            <span style={{ fontFamily: "'Lucida Console', Monaco, monospace" }}>Developed by </span>
            <a 
              href="https://yusuf-faisal.netlify.app" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 transition-colors"
              style={{ fontFamily: "'Lucida Console', Monaco, monospace" }}
            >
              Yusuf Faisal
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;