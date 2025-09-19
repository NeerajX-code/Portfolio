import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import JourneyTimeline from "./Journey";

function About() {
  return (
    <section id="about" className="about_wrapper">
      <section className="about">

        <div className="profile-div">
        <motion.img
          src="https://ik.imagekit.io/nkde9n0dc/Neeraj%20Rathore.jpg?updatedAt=1758267710980"
          alt="Profile"
          className="profile-pic"
          whileHover={{ scale: 1.1 }}
        />
        </div>
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>About Me</h2>
          <p>
            I'm a <span>MERN Stack Developer</span> with hands-on experience in <span>Generative AI</span> and real-time applications using <span >Socket.io</span>. I love turning ideas into scalable, modern solutions that blend creativity with performance.
          </p>
          <div className="skills">
            <div className="skill">MongoDB</div>
            <div className="skill">Express</div>
            <div className="skill">React</div>
            <div className="skill">Node.js</div>
            <div className="skill">Gen AI</div>
            <div className="skill">Socket.io</div>
          </div>
        </motion.div>
      </section>
      <JourneyTimeline />
    </section>


  );
}

export default About;
