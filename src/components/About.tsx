import React, { useEffect, useRef, useState } from "react";
import { Code, Monitor, User } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const startYear = 2024;
  const now = new Date();
  const years = now.getFullYear() - startYear + (now.getMonth() >= 0 ? 1 : 0);

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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-slideInUp opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate front end developer who loves turning ideas into
            reality through code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slideInLeft opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="glass p-8 rounded-2xl">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                    <User className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Merabet Abdelkarim
                  </h3>
                  <p className="text-blue-400 font-semibold">
                    Frontend Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "animate-slideInRight opacity-100" : "opacity-0"
            }`}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise in modern web technologies, I specialize in
                creating seamless user experiences and robust backend solutions.
                My passion lies in building applications that make a difference.
              </p>

              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <Monitor className="w-8 h-8 text-blue-400 mr-3" />
                    <h4 className="text-lg font-semibold text-white">
                      Frontend
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    React, Next.js, TypeScript, Tailwind CSS, and modern UI
                    libraries
                  </p>
                </div>

                <div className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <Code className="w-8 h-8 text-purple-400 mr-3" />
                    <h4 className="text-lg font-semibold text-white">
                      Backend
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Node.js, Express, MongoDB, PostgreSQL, and RESTful APIs
                  </p>
                </div>
              </div> */}

              <div className="pt-4">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span>
                      {years}+ years of professional development experience
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Strong focus on performance and user experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Passionate about clean code and best practices
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
