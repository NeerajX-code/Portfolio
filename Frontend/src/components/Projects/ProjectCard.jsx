import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjectCard.scss";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

function ProjectCard({ p }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={p.id}
        className="project-card"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="project-card__media">
          {p?.img ? (
            <motion.img
              src={p?.img}
              alt={`${p?.title} preview`}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          ) : (
            <div className="media-placeholder" aria-hidden="true" />
          )}
        </div>

        <div className="project-card__body">
          <motion.h3
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {p.title}
          </motion.h3>

          <motion.p
            className="project-card__desc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {p.description}
          </motion.p>

          <motion.ul
            className="tag-list"
            aria-label="Technologies used"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            {p?.stack?.map((t) => (
              <motion.li
                key={t}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                {t}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="project-card__actions"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {p.github && (
              <a
                href={p?.github}
                className="btn btn--sm btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Github
              </a>
            )}
            {p?.liveLink && (
              <a
                href={p.liveLink}
                className="btn btn--sm btn--link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ↗
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectCard;
