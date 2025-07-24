import { MoveDown } from "lucide-react";
import AboutSection from "@/components/about/aboutsection";
import ContactSection from "@/components/contact/contactsection";
import ProjectsSection from "@/components/projects/projectssection";
import NavBar from "@/components/ui/navbar";
export default function LandingPage() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section
        id="home"
        className="h-screen snap-start flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-6xl">
          Hello, {"I'm"} <span className="text-primary">Jacob</span>.
        </h1>
        <p className="text-6xl">{"I'm"} a full stack web developer.</p>
        <div className="my-4">
          <a
            href="#about"
            className="bg-primary px-6 py-3 rounded-lg flex items-center justify-center"
          >
            See My Work <MoveDown size={18} />
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
  );
}
