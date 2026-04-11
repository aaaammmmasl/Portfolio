import { projects } from "../data/CardData";
import { Card } from "./Card";

export default function ProjectSection() {
  return (
    <div className="grid gap-6 md:grid-cols-3 mt-8 md:px-16 lg:px-24 xl:px-32 sm:flex-col justify-center">
      {projects.map((project, idx) => (
        <Card key={idx} project={project} />
      ))}
    </div>
  );
}
