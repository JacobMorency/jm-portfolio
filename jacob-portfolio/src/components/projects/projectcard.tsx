import Image from "next/image";
import { Github, Globe } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  demoLink?: string;
  src: string;
  githubLink: string;
};

export default function ProjectCard({
  title,
  description,
  demoLink,
  githubLink,
  src,
}: ProjectCardProps) {
  return (
    <div className="p-4 flex flex-col items-center bg-card max-w-sm rounded-lg shadow-md min-h-150 max-h-150">
      <div
        className="rounded-md bg h-48 w-full hover:scale-105 transition-transform duration-300 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(0, 0, 0, 0.4) , var(--card)), url(${src})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex flex-col justify-between flex-1 w-full">
        <div className="flex flex-col w-full flex-1">
          <h3 className="text-3xl mb-2">{title}</h3>
          <p className="text-lg text-muted-foreground">
            {description ||
              "Project description goes here. It can be a brief overview of the project."}
          </p>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          <a
            href={demoLink}
            target="_blank"
            className="text-primary border border-primary p-2 rounded-md hover:bg-primary hover:text-background transition-colors duration-300"
          >
            <Globe />
          </a>
          <a
            href={githubLink}
            target="_blank"
            className="text-primary border border-primary p-2 rounded-md hover:bg-primary hover:text-background transition-colors duration-300"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}
