type SkillProps = { title: string };

export default function Skill({ title = "Skill Name" }: SkillProps) {
  return (
    <div className=" bg-primary rounded-md p-4 flex flex-col items-center justify-center gap- w-30 h-30">
      <h3 className="text-center">{title}</h3>
    </div>
  );
}
