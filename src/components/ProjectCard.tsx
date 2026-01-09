import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block rounded-lg border p-2"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <span className="text-sm">{project.semester} {project.year}</span>
      </div>

      <p className="mt-1 text-sm">{project.description}</p>

      <div className="mt-2 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="rounded border px-2 py-0.5 text-xs">
            {s}
          </span>
        ))}
      </div>
    </Link>
  );
}
