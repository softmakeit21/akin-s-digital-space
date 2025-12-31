import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            B.Sc Computer Science
          </h3>
          <p className="text-xl text-primary">Bowen University</p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
