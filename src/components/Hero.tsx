
import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slideInUp opacity-100' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="gradient-text">Fullstack Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating amazing web  experiences with 
            <span className="text-blue-400 font-semibold"> React</span>, 
            <span className="text-purple-400 font-semibold"> Next.js</span>, 
            <span className="text-cyan-400 font-semibold"> Node js</span>, and the entire JavaScript ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View My Work
            </Button>
            
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/MerabetAbdelkarim"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
              aria-label="Visit my GitHub profile"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/merabet-abdelkarim/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
              aria-label="Visit my LinkedIn profile"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="mailto:merabet.abdelkarim.dev@gmail.com"
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
              aria-label="Send me an email"
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-green-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  );
};

export default Hero;
