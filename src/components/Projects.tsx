import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, BarChart as ChartBar, Users, ArrowRight } from 'lucide-react';

const Projects = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-navy mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Research Project
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-navy mb-6">
              Factors affecting consumer's use intention of Electronic Payment in Bangladesh: 
              An empirical study using UTAUT model
            </h3>

            <div className="space-y-8">
              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <FileText className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-navy mb-2">Research Overview</h4>
                  <p className="text-gray-700">
                    A comprehensive study analyzing the factors that influence consumer adoption 
                    of electronic payment systems in Bangladesh using the Unified Theory of 
                    Acceptance and Use of Technology (UTAUT) model.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <ChartBar className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-navy mb-2">Methodology</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-accent" />
                      Quantitative research approach
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-accent" />
                      Data collection through structured questionnaires
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-accent" />
                      Statistical analysis using SPSS
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <Users className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-navy mb-2">Key Findings</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-accent" />
                      Identified critical factors influencing e-payment adoption
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-accent" />
                      Analyzed user behavior patterns and preferences
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-accent" />
                      Provided recommendations for e-payment service providers
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;