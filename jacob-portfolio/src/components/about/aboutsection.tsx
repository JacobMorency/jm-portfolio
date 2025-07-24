import SectionHeading from "@/components/ui/sectionheading";
import { PersonStanding } from "lucide-react";
import SkillsList from "@/components/about/skillslist";

export default function AboutSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SectionHeading title="About Me" />
      <div className="grid grid-cols-2 gap-8 max-w-5xl px-8">
        <div className="my-8">
          <PersonStanding size={256} className="text-primary" />
          <p className="mt-4 text-lg">
            Full stack developer passionate about building smooth, responsive
            web apps and leveling up with every project.
          </p>
        </div>

        <div className="my-8">
          <SkillsList />
        </div>
      </div>
    </div>
  );
}
