import React from 'react';
import anamikaimg from '../image/anamika.png'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { GraduationCap, Mail, Facebook, MapPin } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden pt-16" id="home">
      <motion.div 
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-4">
              <TypeAnimation
                sequence={[
                  'Anamika Nafisa',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={0}
              />
            </h1>
            <h2 className="text-xl md:text-2xl text-navy font-semibold mb-6">
              MIS Graduate | Volunteer
            </h2>
            <motion.p 
              className="text-gray-700 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              An enthusiastic, self-motivated, reliable, responsible, and hard-working individual, 
              adaptable to challenging situations. Strong communication skills enable effective interaction 
              with diverse groups of people.
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row gap-4 items-center md:items-start"
              variants={itemVariants}
            >
              <a href="mailto:anamika2215@student.nstu.edu.bd" 
                className="flex items-center gap-2 text-navy hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a href="https://www.facebook.com/anamika.nafisa.9" 
                className="flex items-center gap-2 text-navy hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <div className="flex items-center gap-2 text-navy">
                <MapPin className="w-5 h-5" />
                <span>Muradpur, Cumilla, Bangladesh</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            variants={itemVariants}
          >
            <motion.div 
              className="w-72 h-72 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden border-4 border-secondary shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={anamikaimg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;