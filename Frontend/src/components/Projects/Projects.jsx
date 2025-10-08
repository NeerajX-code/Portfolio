import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.scss";

function Projects() {
  const projectList = [
    {
      id:1,
      title: "SuperYou - Hackathon Project",
      desc: "A personal portfolio built with React and SCSS.",
      img: "https://ik.imagekit.io/nkde9n0dc/SuperYou/superyou-protein-wafer-india.avif?updatedAt=1753363942789",
      description: "This is Ranveer Singh's SuperYou Brand and Re-Imagined in a React Based Hackathon Where Cool animation",
      github: "https://github.com/NeerajX-code",
      liveLink: "https://superyou.onrender.com/",
      stack: ["React", "Framer Motion", "GSAP", "Axios", "React Hook Form"]
    },
    {
      id:2,
      title: "Roastly - An Social Media App",
      desc: "A next-gen social media platform built with MERN stack, featuring AI-driven roasts, real-time chats, and media sharing.",
      img: "https://ik.imagekit.io/nkde9n0dc/AiCaption/ccc78db9-1229-4b16-a79c-d2a51c8d76f2(1).png?updatedAt=1756287708949",
      description: "A next-gen social media platform built with MERN stack, featuring AI-driven roasts, real-time chats, and media sharing.",
      github: "https://github.com/NeerajX-code/RoastMedia_Frontend",
      liveLink: "https://roastmedia-frontend.onrender.com/",
      note:"Backend is Deployed on Render and it may take time to wake up",
      stack: ["React", "Express", "MONGO DB", "Axios", "React Hook Form", "Socket.io", "Gen AI", "ImageKit"]
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectList.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
