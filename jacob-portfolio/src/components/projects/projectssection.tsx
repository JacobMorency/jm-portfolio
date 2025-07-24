"use client";
import Image from "next/image";
import ProjectCard from "@/components/projects/projectcard";
import { useState } from "react";
import SectionHeading from "@/components/ui/sectionheading";

export default function ProjectsSection() {
  const [showImage, setShowImage] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const riveDescription =
    "Rive is a lifting tracker app that allows users to log their workouts, track their progress, and visualize their lifting data. It features a user-friendly interface, real-time data updates, and integration with various fitness APIs to provide a comprehensive lifting experience.";
  const bingeListDescription =
    "BingeList is a movie and TV show tracking app that helps users keep track of what they have watched, want to watch, and are currently watching. It includes features like favorites, watchlists, and search functionality.";
  const naviDescription =
    "Navigating Academic Visits & Interactions -  Centralized app for teachers and students to book appointments within the teacher's office hours. It allows students to see available time slots and book appointments directly, while teachers can manage their availability and view upcoming appointments.";

  const showFullImage = (src: string) => {
    setShowImage(true);
    setSelectedImage(src);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
        className={`fixed inset-0 bg-black/75 flex items-center justify-center z-50 transition-opacity duration-300 ${
          showImage
            ? "opacity-100 cursor-pointer"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowImage(false)}
      >
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Full Size"
            className="max-w-full max-h-full object-contain"
            width={400}
            height={300}
          />
        )}
      </div>

      <>
        <div className="mt-16">
          <SectionHeading title="Projects" />
          <p className="mt-4 text-lg text-center">
            Here are some of the projects I have worked on.
          </p>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 my-4">
            <ProjectCard
              title="Rive - Lifting Tracker"
              src="/images/rive.png"
              description={riveDescription}
              demoLink="https://rivelifts.vercel.app/"
              githubLink="https://github.com/JacobMorency/rive-lift-tracker-web"
              showFullImage={showFullImage}
            />
            <ProjectCard
              title="BingeList"
              src="/images/bingelist.png"
              description={bingeListDescription}
              demoLink="https://thebingelist.vercel.app/"
              githubLink="https://github.com/JacobMorency/binge-list"
              showFullImage={showFullImage}
            />
            <ProjectCard
              title="NAVI"
              src="/images/navi2.png"
              description={naviDescription}
              githubLink=""
              showFullImage={showFullImage}
            />
          </div>
        </div>
      </>
    </div>
  );
}
