import { MoveDown } from "lucide-react";
import AboutSection from "@/components/about/aboutsection";
import ContactSection from "@/components/contact/contactsection";
import ProjectsSection from "@/components/projects/projectssection";
import NavBar from "@/components/ui/navbar";
export default function LandingPage() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-7xl">
          Hello, {"I'm"} <span className="text-primary">Jacob</span>.
        </h1>
        <p className="text-7xl">{"I'm"} a full stack web developer.</p>
        <div className="my-4">
          <a
            href="#about"
            className="bg-primary px-6 py-3 rounded-lg flex items-center justify-center"
          >
            See My Work <MoveDown size={18} />
          </a>
        </div>
      </div>

      <div>
        <NavBar />
        <div id="about" className="w-full min-h-screen">
          <AboutSection />
        </div>
        <div id="projects" className="w-full min-h-screen">
          <ProjectsSection />
        </div>
        <div id="projects" className="w-full min-h-screen">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
