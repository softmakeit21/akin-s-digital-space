import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Contact
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground mb-4">Get in touch with me</p>
          <a
            href="mailto:akingbadeabdullateef75@gmail.com"
            className="text-xl md:text-2xl text-primary hover:text-primary/80 transition-colors font-medium break-all"
          >
            akingbadeabdullateef75@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
