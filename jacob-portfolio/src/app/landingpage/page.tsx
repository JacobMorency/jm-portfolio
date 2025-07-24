"use client";

import { MoveDown } from "lucide-react";
import AboutSection from "@/components/about/aboutsection";
import ContactSection from "@/components/contact/contactsection";
import ProjectsSection from "@/components/projects/projectssection";
import NavBar from "@/components/ui/navbar";
import { useState, useEffect } from "react";
export default function LandingPage() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
  }, []);

  return (
    <>
      {!isMobile ? (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
          <section
            id="home"
            className="h-screen snap-start flex flex-col items-center justify-center text-center"
          >
            <h1 className="text-4xl md:text-6xl sm:text-4xl">
              Hello, {"I'm"} <span className="text-primary">Jacob</span>.
            </h1>
            <p className="text-4xl md:text-6xl sm:text-4xl">
              {"I'm"} a full stack web developer.
            </p>
            <div className="my-4">
              <a
                href="#about"
                className="bg-primary px-6 py-3 rounded-lg flex items-center gap-4 justify-center font-bold text-lg"
              >
                See My Work <MoveDown size={18} strokeWidth={4} />
              </a>
            </div>
          </section>
          <NavBar />
          <section id="about" className="h-screen snap-start px-8">
            <AboutSection />
          </section>
          <section id="projects" className="h-screen snap-start px-8">
            <ProjectsSection />
          </section>
          <section id="contact" className="h-screen snap-start px-8">
            <ContactSection />
          </section>
        </div>
      ) : (
        <div className="h-screen">
          <section
            id="home"
            className="h-screen snap-start flex flex-col items-center justify-center text-center"
          >
            <h1 className="text-4xl md:text-6xl sm:text-4xl">
              Hello, {"I'm"} <span className="text-primary">Jacob</span>.
            </h1>
            <p className="text-4xl md:text-6xl sm:text-4xl">
              {"I'm"} a full stack web developer.
            </p>
            <div className="my-4">
              <a
                href="#about"
                className="bg-primary px-6 py-3 rounded-lg flex items-center gap-4 justify-center font-bold text-lg"
              >
                See My Work <MoveDown size={18} strokeWidth={4} />
              </a>
            </div>
          </section>
          {/* <NavBar /> */}
          <section id="about" className="px-4">
            <AboutSection />
          </section>
          <section id="projects" className="px-4">
            <ProjectsSection />
          </section>
          <section id="contact" className="px-4">
            <ContactSection />
          </section>
        </div>
      )}
    </>
  );
}
