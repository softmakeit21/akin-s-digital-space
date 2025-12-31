import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-8"
        >
          <img
            src={profileImg}
            alt="Akingbade Abdullateef Olajide"
            className="w-52 h-52 md:w-64 md:h-64 rounded-full mx-auto object-cover glow-border animate-float"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground"
        >
          Akingbade Abdullateef{" "}
          <span className="text-gradient">Olajide</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-8"
        >
          Computer Science Student | Tech Enthusiast | Creative Thinker
        </motion.p>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          href="#contact"
          className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full 
                     hover:scale-105 transition-transform duration-300 animate-glow"
        >
          Contact Me
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
