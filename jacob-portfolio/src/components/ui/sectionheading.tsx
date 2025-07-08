export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold ">{title}</h2>
    </div>
  );
}
