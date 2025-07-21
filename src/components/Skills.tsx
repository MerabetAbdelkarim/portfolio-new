import React, { useEffect, useRef, useState } from "react";
// import "animate.css";

const categories = [
  {
    title: "Languages & Databases",
    skills: ["JavaScript", "TypeScript", "MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Apollo Server",
      "Git",
      "Docker",
      "Browser DevTools",
      "Figma",
    ],
  },
  {
    title: "UI & State Management",
    skills: [
      "Tailwind CSS",
      "Chakra UI",
      "Bootstrap",
      "Redux Toolkit",
      "Context API",
      "Zustand",
    ],
  },
  {
    title: "API & Collaboration",
    skills: ["RESTful API", "GraphQL", "Apollo Client", "Postman"],
  },
  {
    title: "Workflows & Soft Skills",
    skills: ["Agile", "Scrum", "Jira", "Pair Programming", "Code Reviews"],
  },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-slate-900 py-20 px-6" id="skills">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Skills
          </span>
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Here's a categorized overview of the tools, frameworks, and
          technologies I work with regularly.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-md transition-opacity duration-1000 ${
                isVisible
                  ? `animate__animated animate__fadeInUp animate__delay-${index}s`
                  : "opacity-0"
              }`}
            >
              <h3 className="text-white text-xl font-semibold mb-4">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-white px-3 py-1.5 rounded-full text-sm hover:scale-105 transition-transform"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
