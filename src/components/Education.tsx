import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, GraduationCap } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-20 bg-white" id="education">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-navy mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Education
        </motion.h2>

        <motion.div
          ref={ref}
          variants={timelineVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <div className="relative pl-8 border-l-2 border-secondary">
            <motion.div 
              className="mb-12 timeline-dot"
              variants={timelineVariants}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-6 h-6 text-accent mr-2" />
                  <h3 className="text-xl font-semibold text-navy">Bachelor of Business Administration (BBA)</h3>
                </div>
                <p className="text-gray-600 mb-2">Management Information Systems (MIS)</p>
                <p className="text-gray-600 mb-2">Noakhali Science and Technology University (NSTU)</p>
                <p className="text-accent font-semibold">CGPA: 3.85 (Up to 8th Semester)</p>
                <p className="text-gray-500">2019-2025 | Session: 2019-2020</p>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-dot"
              variants={timelineVariants}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-6 h-6 text-accent mr-2" />
                  <h3 className="text-xl font-semibold text-navy">Higher Secondary Certificate (Science)</h3>
                </div>
                <p className="text-gray-600 mb-2">Cumilla Govt. Women's College, Cumilla</p>
                <p className="text-accent font-semibold">GPA: 4.89/5.00</p>
                <p className="text-gray-500">Passing year: 2019</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;