"use client";

export default function SkillsList() {
  const skills = [
    { title: "JavaScript" },
    { title: "React" },
    { title: "HTML5" },
    { title: "CSS3" },
    { title: "Tailwind" },
    { title: "C#" },
    { title: "Next.js" },
    { title: "Git" },
    { title: "GitHub" },
    { title: "ASP.NET" },
    { title: "Azure DevOps" },
  ];

  return (
    <div>
      <h3 className=" font-semibold text-3xl my-3">My Skills</h3>
      <div className="flex gap-4 flex-wrap">
        {skills.map((skills, index) => (
          <div
            key={index}
            className="bg-card px-8 py-4 rounded flex items-center justify-center min-w-20 hover:bg-primary hover:scale-115 transition-transform duration-300ms ease-in-out"
          >
            <p className="text-lg font-semibold">{skills.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {skills.map((skill, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center items-center basis-1/3"
              >
                <Skill title={skill.title} icon={skill.icon} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious>Previous</CarouselPrevious>
          <CarouselNext>Next</CarouselNext>
        </Carousel> */
}
