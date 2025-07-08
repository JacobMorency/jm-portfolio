import Image from "next/image";

type SkillProps = { title: string; icon: string };

export default function Skill({ title = "Skill Name", icon }: SkillProps) {
  return (
    <div className="border-3 border-primary rounded-md p-4 flex flex-col items-center justify-center gap-2">
      <Image
        src={icon}
        alt={`${title} icon` || "Skill icon"}
        width={50}
        height={50}
      />
      <h3>{title}</h3>
    </div>
  );
}
