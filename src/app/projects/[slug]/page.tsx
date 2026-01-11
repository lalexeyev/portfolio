import { projects } from "@/content/projects";
import LandscapeYouTubeEmbed from "@/components/LandscapeYouTubeEmbed";
import PortraitYouTubeEmbed from "@/components/PortraitYouTubeEmbed";
import Image from "next/image";

// add slug description to metadata, search for project name based on slug
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return {
    title: `${projects.find(async (p) => p.slug === (await params).slug)?.title} — Leonid Alexeyev`,
  };
}

// project subpage (displays on right main side) which shows detailed project information based on slug
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }>}) {
  try {
    // pull project from array based on slug param
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    // check for invalid project
    if (!project) return <div>Project not found</div>;

    return (
      <article className="flex flex-col pt-16 pb-16 px-6 gap-6">
        <div className="flex flex-row gap-x-4">
          {/* display main image if exists */}
          {project.mainImage && (
            <Image src={project.mainImage} alt={`${project.title} main image`} width={100} height={100} className="object-contain rounded-md"/>
          )}

          {/* display title, date, and tech stack as top of page */}
          <div>
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <div className="text-md">{project.semester} {project.year}</div>
            <div className="flex gap-2 mt-2 flex-wrap">
              {project.stack.map((tech) => (
                <span key={tech} className="border text-xs px-2 py-1 rounded-md">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* if links present, display repository, report and embed demo in page */}
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
          project.demoAspect === "portrait" ? (
            <PortraitYouTubeEmbed url={project.links.demo} />
          ) : (
            <LandscapeYouTubeEmbed url={project.links.demo} />
          )
        )}

        {/* render project sections based on type */}
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
