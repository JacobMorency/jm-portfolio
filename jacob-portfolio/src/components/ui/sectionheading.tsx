export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="text-5xl font-bold mb-2">{title}</h2>
      <hr className="w-16 border-t-6 border-primary rounded-full" />
    </div>
  );
}
