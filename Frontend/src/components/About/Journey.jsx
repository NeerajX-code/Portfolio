import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Journey.scss";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    title: "First Steps in the Web",
    desc: "Started with crafting static HTML & CSS websites that gave me my first taste of design and structure.",
    links: [
      { title: "FinFLo Design", url: "https://finflo-vizj.onrender.com" },
      { title: "FashionWork Design", url: "https://neerajx-code.github.io/FashionWork_agency/" },
      { title: "Hiroki Design", url: "https://neerajx-code.github.io/Hiroki/" }
    ]
  },
  // {
  //   title: "JavaScript Era",
  //   desc: "Discovered the power of JavaScript. Built interactive projects, dashboards, and mini-apps that felt alive.",
  //   links: [{ title: "Productivity Dashboard", url: "https://example.com" }]
  // },
  {
    title: "Object-Oriented Projects",
    desc: "Applied OOP concepts to structure projects with scalability in mind — creating apps like a full-featured Music Player.",
    links: [{ title: "Music Player with OOP", url: "https://neerajx-code.github.io/Music-Player/" }]
  }
];

export default function JourneyTimeline() {
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        scrollTrigger: {
          trigger: ".journey",
          start: "top center",
          end: "bottom bottom",
          scrub: true
        }
      }
    );
  }, []);

  return (
    <section className="journey">
      <h2 className="journey__title">My Coding Journey</h2>

      <div className="journey__container">
        <div className="journey__line">
          <div ref={lineRef} className="journey__line-progress" />
        </div>

        <div className="journey__milestones">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              className={`journey__item ${i % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="journey__content">
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                {m.links && (
                  <div className="links">
                    {m.links.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.url}
                        className="journey__link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
