import Link from "next/link";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold">Leonid Alexeyev</h1>
      <p className="mt-2 text-neutral-600">
        M.S. Machine Learning, B.S. Computer Science @ Georgia Tech
      </p>

      <h2 className="mt-8 text-xl font-semibold">Projects</h2>
      <ul className="mt-4 space-y-3">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link className="underline" href={`/projects/${p.slug}`}>
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
