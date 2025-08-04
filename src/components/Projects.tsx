import React, { useEffect, useRef, useState } from "react";
import { Github, Monitor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform enabling users to browse products, manage carts, and securely checkout. Includes user authentication, payment integration, and an admin dashboard for inventory management.",
      technologies: ["React", "react bootstrap", "firebase"],
      image:
        "https://res.cloudinary.com/dfpadndj0/image/upload/v1754240933/digitalshopweb.vercel.app__vecqof.png",
      github: "https://github.com/MerabetAbdelkarim/my-cart",
      live: "https://digitalshopweb.vercel.app/",
      featured: true,
    },
    {
      title: "Bloge App",
      description:
        "A MERN stack blogging application where users can create, edit, and delete posts. Features user authentication, responsive design, and a modern UI for seamless content management.",
      technologies: ["React JS", "bootstrap", "Node js", "Express", "MongoDB"],
      image:
        "https://res.cloudinary.com/dfpadndj0/image/upload/v1754324042/323419389-6208cb6d-95c5-4239-bdd0-761805fb6301_iyu8l2.png",
      github:
        "https://github.com/MerabetAbdelkarim/Bloger-mern-stack-?tab=readme-ov-file",
      live: "https://github.com/MerabetAbdelkarim/Bloger-mern-stack-?tab=readme-ov-file",
      featured: true,
    },
    {
      title: "Project Management Tool",
      description:
        "Collaborative project management platform with real-time updates, task tracking, and team collaboration features.",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with detailed forecasts, interactive maps, and location-based weather data.",
      technologies: ["React", "TypeScript", "Weather API", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-slideInUp opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for
            development.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-1000 ${
                isVisible ? "animate-slideInUp opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 group ${
                  project.featured ? "border-2 border-blue-400/30" : ""
                }`}
              >
                <div
                  className={`grid ${
                    project.featured ? "lg:grid-cols-2" : "md:grid-cols-3"
                  } gap-0`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      project.featured ? "lg:order-1" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title} project`}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div
                    className={`p-8 ${
                      project.featured ? "lg:order-2" : "md:col-span-2"
                    } flex flex-col justify-center`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        asChild
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 group/btn"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code of ${project.title} on GitHub`}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </a>
                      </Button>

                      <Button
                        asChild
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white group/btn"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <Monitor className="w-4 h-4 mr-2" />
                          Live Demo
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? "animate-fadeIn opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-gray-300 mb-6">Want to see more of my work?</p>
          <Button
            asChild
            variant="outline"
            className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://github.com/MerabetAbdelkarim?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View All Projects on GitHub`}
            >
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
