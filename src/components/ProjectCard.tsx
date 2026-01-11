import Link from "next/link";
import type { Project } from "@/content/projects";

// project card component to display project summary on main page and link to project slug page
export default function ProjectCard({ project }: { project: Project }) {
  return (
    // add hover effect to indicate clickability
    <Link
      href={`/projects/${project.slug}`}
      className="block rounded-lg border p-2 hover:bg-[#354f52]"
    >
      {/* general info about project */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <span className="text-sm">{project.semester} {project.year}</span>
      </div>

      <p className="mt-1 text-sm">{project.description}</p>

      {/* display tech stack as badges */}
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
