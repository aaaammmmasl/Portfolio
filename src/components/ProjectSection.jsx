import { projects } from "../data/CardData";
import { Card } from "./Card";

export default function ProjectSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-8 max-w-6xl mx-auto px-4">
      {projects.map((project, idx) => (
        <Card key={idx} project={project} />
      ))}
    </div>
  );
}
