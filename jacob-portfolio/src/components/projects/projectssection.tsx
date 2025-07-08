import ProjectCard from "@/components/projects/projectcard";

export default function ProjectsSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-4 text-lg">
        Here are some of the projects I have worked on. Each project showcases
        my skills in full stack web development, utilizing various technologies
        and frameworks.
      </p>
      <div>
        <div className="grid grid-cols-2">
          <ProjectCard />
          <div></div>
        </div>
        <div className="grid grid-cols-2">
          <div></div>
          <ProjectCard />
        </div>
        <div className="grid grid-cols-2">
          <ProjectCard />
          <div></div>
        </div>
      </div>
    </div>
  );
}
