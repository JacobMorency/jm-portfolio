import Skill from "@/components/about/skill";

export default function SkillsList() {
  return (
    <div>
      <h3 className="text-center font-semibold text-3xl my-3">My Skills</h3>
      <div className="grid grid-cols-3 gap-1">
        <Skill title="JavaScript" icon="/icons/javascript.png" />
        <Skill title="React" icon="/icons/react.png" />
        <Skill title="HTML5" icon="/icons/html5.png" />
        <Skill title="CSS3" icon="/icons/css3.png" />
        <Skill title="Tailwind CSS" icon="/icons/tailwind.png" />
        <Skill title="C#" icon="/icons/csharp.png" />
        <Skill title="Next.JS" icon="/icons/nextjs.png" />
        <Skill title="Git" icon="/icons/git.png" />
        <Skill title="GitHub" icon="/icons/github.png" />
        <Skill title="ASP.NET" icon="/icons/aspnet.png" />
        <Skill title="Azure DevOps" icon="/icons/azuredevops.png" />
      </div>
    </div>
  );
}
