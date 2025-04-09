import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  LineChart, 
  FileText, 
  Table, 
  Layout,
  Mic,
  Users,
  MessageSquare
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillsData = {
    soft: [
      { name: 'Public Speaking', percentage: 85, icon: Mic },
      { name: 'Leadership', percentage: 90, icon: Users },
      { name: 'Communication', percentage: 88, icon: MessageSquare },
    ],
    technical: [
      { name: 'SPSS', icon: LineChart },
      { name: 'Microsoft Word', icon: FileText },
      { name: 'Excel', icon: Table },
      { name: 'Office Suite', icon: Layout },
    ],
  };

  return (
    <section className="py-20 bg-primary" id="skills">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-navy mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-navy mb-6">Soft Skills</h3>
            <div className="space-y-6">
              {skillsData.soft.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center mb-2">
                    <skill.icon className="w-5 h-5 text-accent mr-2" />
                    <span className="text-navy">{skill.name}</span>
                    <span className="ml-auto text-accent">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: '0%' }}
                      animate={inView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-navy mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {skillsData.technical.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <skill.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-navy">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;