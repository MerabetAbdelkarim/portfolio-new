import React, { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
    { name: "React Native", level: 90, color: "from-cyan-400 to-cyan-600" },
    { name: "Next.js", level: 88, color: "from-gray-400 to-gray-600" },
    { name: "TypeScript", level: 92, color: "from-blue-500 to-blue-700" },
    { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
    { name: "MongoDB", level: 80, color: "from-green-500 to-green-700" },
    { name: "PostgreSQL", level: 78, color: "from-blue-600 to-blue-800" },
    { name: "Tailwind CSS", level: 95, color: "from-teal-400 to-teal-600" },
  ];

  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Supabase",
    "Prisma",
    "Tailwind CSS",
    "Framer Motion",
    "Redux",
    "Zustand",
    "Git",
    "Docker",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Skills
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            A look at the primary technologies and tools I leverage to build
            modern web applications.
          </p>
        </div>
        <div className="flex justify-center">
          <div
            className={`transition-all duration-1000 w-full ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white text-center">
              Technology Stack
            </h3>
            <div>
              <div className="bg-slate-800/50 p-4 sm:p-6 rounded-xl border border-slate-700 shadow-lg mb-8">
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-white text-xs sm:text-sm font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-105 cursor-default opacity-0`}
                      style={{
                        animation: isVisible
                          ? `fadeIn 0.5s ease-out forwards`
                          : "none",
                        animationDelay: `${index * 50 + 400}ms`, 
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description Cards */}
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-blue-400/50 transition-all duration-300 shadow-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Frontend Development
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Building responsive, interactive, and performant user
                    interfaces with modern frameworks and libraries.
                  </p>
                </div>

                <div className="bg-slate-800/50 p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-blue-400/50 transition-all duration-300 shadow-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Backend Development
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Developing scalable APIs and server-side applications with
                    Node.js and various databases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
