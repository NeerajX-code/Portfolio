import React from "react";
import { motion } from "framer-motion";
import "./Hero.scss";

function Hero() {
  return (
    <section id="home" className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       I’m <span>Neeraj Rathore</span>, a MERN Stack Developer with experience in GenAI and Socket.io.

      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Building modern web experiences with MongoDB, Express, React & Node.js
      </motion.p>
      <motion.a
        href="#projects"
        className="cta"
        whileHover={{ scale: 1.1 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}

export default Hero;
