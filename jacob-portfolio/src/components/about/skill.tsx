type SkillProps = { title: string };

export default function Skill({ title = "Skill Name" }: SkillProps) {
  return (
    <div className=" bg-primary rounded-md flex flex-col items-center justify-center">
      <h3 className="text-center">{title}</h3>
    </div>
  );
}
