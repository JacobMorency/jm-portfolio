import ProjectCard from "@/components/projects/projectcard";

export default function ProjectsSection() {
  const riveDescription =
    "Rive is a lifting tracker app that allows users to log their workouts, track their progress, and visualize their lifting data. It features a user-friendly interface, real-time data updates, and integration with various fitness APIs to provide a comprehensive lifting experience.";
  const bingeListDescription =
    "BingeList is a movie and TV show tracking app that helps users keep track of what they have watched, want to watch, and are currently watching. It includes features like favorites, watchlists, and search functionality.";
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-4 text-lg text-center max-w-2xl">
        Here are some of the projects I have worked on. Each project showcases
        my skills in full stack web development, utilizing various technologies
        and frameworks.
      </p>
      <div className="grid grid-cols-3 gap-4 my-4">
        <ProjectCard
          title="Rive - Lifting Tracker"
          src="/images/rive.png"
          description={riveDescription}
          demoLink="https://rivelifts.vercel.app/"
          githubLink="https://github.com/JacobMorency/rive-lift-tracker-web"
        />
        <ProjectCard
          title="BingeList"
          src="/images/bingelist.png"
          description={bingeListDescription}
          demoLink="https://thebingelist.vercel.app/"
          githubLink="https://github.com/JacobMorency/binge-list"
        />
        <ProjectCard title="TBD" src="/images/rive.png" />
      </div>
    </div>
  );
}
