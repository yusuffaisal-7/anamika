import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Facebook, MapPin } from 'lucide-react';

const Contact = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-primary" id="contact">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-navy mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <Mail className="w-6 h-6 text-accent" />
                <a 
                  href="mailto:anamika2215@student.nstu.edu.bd"
                  className="text-navy hover:text-accent transition-colors"
                >
                  anamika2215@student.nstu.edu.bd
                </a>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <Facebook className="w-6 h-6 text-accent" />
                <a 
                  href="https://www.facebook.com/anamika.nafisa.9"
                  className="text-navy hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anamika Nafisa
                </a>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <MapPin className="w-6 h-6 text-accent" />
                <span className="text-navy">
                  Muradpur, Cumilla, Bangladesh
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;