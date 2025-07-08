export default function ProjectCard() {
  return (
    <div className="border-3 border-primary rounded-md p-4 flex flex-col items-center justify-center gap-2">
      <h3>Project Title</h3>
      <p>
        Project description goes here. It can be a brief overview of the
        project.
      </p>
      <a href="#" className="text-blue-500 hover:underline">
        View Project
      </a>
    </div>
  );
}
