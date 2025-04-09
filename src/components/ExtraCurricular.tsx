import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Heart, Compass, BookOpen, Award, Briefcase } from 'lucide-react';

const ExtraCurricular = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-primary" id="activities">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-navy mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Extra-Curricular Activities
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* Organizations */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-accent" />
                <h3 className="text-xl font-semibold text-navy">Organizations</h3>
              </div>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-gray-700">MIS NET, NSTU (Executive member)</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <Heart className="w-5 h-5 text-accent" />
                  <span className="text-gray-700">Volunteer for Bangladesh (member)</span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Interests */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Compass className="w-8 h-8 text-accent" />
                <h3 className="text-xl font-semibold text-navy">Interests</h3>
              </div>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <Compass className="w-5 h-5 text-accent" />
                  <span className="text-gray-700">Exploring</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <BookOpen className="w-5 h-5 text-accent" />
                  <span className="text-gray-700">Co-Curricular Activities</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <Heart className="w-5 h-5 text-accent" />
                  <span className="text-gray-700">Volunteering</span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Project */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-accent" />
                <h3 className="text-xl font-semibold text-navy">Project</h3>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-navy">Research Project</h4>
                <p className="text-gray-700 text-sm">
                  Factors affecting consumer's use intention of Electronic Payment in Bangladesh: 
                  An empirical study using UTAUT model
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExtraCurricular;