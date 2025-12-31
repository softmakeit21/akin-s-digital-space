import { motion } from "framer-motion";
import { Code, Palette } from "lucide-react";

const skills = [
  {
    title: "Programming",
    icon: Code,
    items: ["HTML & CSS", "Java (OOP)", "JavaScript (Basics)"],
  },
  {
    title: "Creative Skills",
    icon: Palette,
    items: ["Graphic Design", "Video Editing", "Content Creation"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-card p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <skill.icon className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">{skill.title}</h3>
              </div>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground/80">
                    <span className="text-primary">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
