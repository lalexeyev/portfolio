import { projects } from "@/content/projects";
import Image from "next/image";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }>}) {
  try {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) return <div>Project not found</div>;

    return (
      <article className="flex flex-col pt-16 pb-16 px-6 gap-6">
        <div className="flex flex-row gap-x-4">
          {project.mainImage && (
            <Image src={project.mainImage} alt={`${project.title} main image`} width={100} height={100} className="object-contain rounded-md"/>
          )}

          <div>
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <div className="text-md">{project.semester} {project.year}</div>
            <div className="flex gap-2 mt-2">
              {project.stack.map((tech) => (
                <span key={tech} className="border text-xs px-2 py-1 rounded-md">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {project.links?.repo && (
          <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2">
            <Image src="/github.svg" alt="GitHub Logo" width={30} height={30} />
            <span className="text-xl underline place-self-center">View Github Repository</span>
          </a>
        )}

        {project.links?.report && (
          <a href={project.links.report} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2">
            <Image src="/report.svg" alt="Report Logo Logo" width={30} height={30} />
            <span className="text-xl underline place-self-center">View Report</span>
          </a>
        )}

        {project.links?.demo && (
          <div className="w-full max-w-3xl aspect-video rounded-md overflow-hidden border">
            <video
              src={project.links.demo}
              controls
              className="w-full h-full object-contain"
            />
          </div>
        )}

        <div className="space-y-8">
          {project.sections.map((section, index) => {
            if (section.type === "text") {
              return (
                <section key={index} className="space-y-2">
                  <h2 className="text-2xl font-semibold">{section.heading}</h2>
                  <p>{section.content}</p>
                </section>
              );
            }
            if (section.type === "bullets") {
              return (
                <section key={index} className="space-y-2">
                  <h2 className="text-2xl font-semibold">{section.heading}</h2>
                  <ul className="list-disc pl-5 space-y-1">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              );
            }
            if (section.type === "images") {
              return (
                <section key={index} className="space-y-2">
                  <div className="flex flex-wrap gap-4">
                    {section.images.map((image, i) => (
                      <Image key={i} src={image} alt={`${project.title} image ${i + 1}`} width={300} height={300} />
                    ))}
                  </div>
                </section>
              );
            }
          })}
        </div>
      </article>
    );
  } catch {
    return <div>Invalid project slug</div>;
  }
}
