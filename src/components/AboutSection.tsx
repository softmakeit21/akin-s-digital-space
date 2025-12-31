import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card p-8 md:p-12"
        >
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
            My name is <span className="text-primary font-semibold">Akingbade Abdullateef Olajide</span>. 
            I am a Computer Science student with a strong interest in software development, technology, 
            and creative problem-solving. I enjoy learning new technologies and building useful digital solutions 
            that make a positive impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
