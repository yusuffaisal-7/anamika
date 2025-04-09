import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy py-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
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
          
          <motion.div 
            className="flex items-center gap-2 text-white/80 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent animate-pulse" />
            <span>in Bangladesh</span>
          </motion.div>

          <motion.p 
            className="text-white/60 text-sm"
            whileHover={{ scale: 1.05 }}
          >
            © {currentYear} All rights reserved
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;