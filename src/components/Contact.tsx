import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null); // Create a ref for the form
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (formRef.current) {
      const timeInput = formRef.current.querySelector(
        'input[name="submission_time"]'
      ) as HTMLInputElement;
      if (timeInput) {
        timeInput.value = new Date().toLocaleString("en-US", {
          dateStyle: "long",
          timeStyle: "short",
        });
      }
      emailjs
        .sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            toast({
              title: "Message sent!",
              description:
                "Thank you for your message. I'll get back to you soon!",
            });
            formRef.current?.reset();
          },
          (error) => {
            console.error("FAILED...", error.text);
            toast({
              title: "Uh oh! Something went wrong.",
              description:
                "There was a problem sending your message. Please try again.",
              variant: "destructive",
            });
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  const year = new Date().getFullYear();

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-slideInUp opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear
            from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slideInLeft opacity-100" : "opacity-0"
            }`}
          >
            <div className="space-y-8">
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always interested in new opportunities, challenging
                  projects, and great conversations. Whether you're looking to
                  collaborate or just want to connect, feel free to reach out!
                </p>
                <div className="space-y-6">
                  <a
                    href="mailto:merabet.abdelkarim.dev@gmail.com"
                    className="flex items-center p-4 glass rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                        merabet.abdelkarim.dev@gmail.com
                      </p>
                      <p className="text-gray-400 text-sm">Send me an email</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="https://github.com/MerabetAbdelkarim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 glass rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mr-4">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-gray-400 transition-colors duration-300">
                        GitHub Profile
                      </p>
                      <p className="text-gray-400 text-sm">Check out my code</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/merabet-abdelkarim/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 glass rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mr-4">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                        LinkedIn Profile
                      </p>
                      <p className="text-gray-400 text-sm">
                        Let's connect professionally
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "animate-slideInRight opacity-100" : "opacity-0"
            }`}
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="submission_time" />
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div
          className={`text-center mt-16 pt-8 border-t border-white/10 transition-all duration-1000 delay-700 ${
            isVisible ? "animate-fadeIn opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-gray-400">
            © {year} Merabet Abdelkarim . All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
