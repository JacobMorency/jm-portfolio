import SectionHeading from "@/components/ui/sectionheading";
import SkillsList from "@/components/about/skillslist";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SectionHeading title="About Me" />
      <div className="my-4">
        <p className="text-lg max-w-xl text-center">
          Full stack developer passionate about building smooth, responsive web
          apps and leveling up with every project.
        </p>
      </div>
      <div className="flex flex-col md:flex-row max-w-8xl px-8 md:gap-24">
        <div className="my-8">
          <h3 className="font-semibold text-3xl my-3 ">Get to know me!</h3>
          <p className="my-4 text-lg md:max-w-2xl">
            {"I'm"} a dedicated developer who loves solving problems and
            learning new technologies. I enjoy collaborating with others,
            sharing ideas, and turning concepts into real, impactful
            applications. When {"I'm"} not coding, you can find me exploring new
            tools, reading tech blogs, or working on side projects to keep my
            skills sharp.
          </p>
          <Button className="my-2 font-semibold text-lg p-6">
            Contact Me!
          </Button>
        </div>

        <div className="my-8 md:max-w-2xl">
          <SkillsList />
        </div>
      </div>
    </div>
  );
}
