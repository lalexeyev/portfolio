import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

// semester order to ensure projects of same year are still sorted time-wise
const semesterOrder = {
  "Spring": 1,
  "Fall": 2,
}

export default function Home() {
  return (
    <div className="flex flex-col pt-16 px-6 gap-y-15 pb-16">
      {/* about me section, include links to qgenda, vip, class textbook, and class website */}
      <section id="about" className="space-y-5 leading-7">
        <p>Hey! I'm Leo, a computer science graduate student at Georgia Tech pursuing a Master's degree in Machine Learning, where I also obtained a Bachelors in computer science with a focus in intelligence and devices. My background spans machine learning, embedded systems, and data, and I'm especially interested in building systems that work across multiple layers of the stack, from hardware and models to user-facing applications.</p>
        <p>My software development experience includes industry work, research, teaching, and a wide range of projects. As a software development intern at{" "}
        <a
          href="https://www.qgenda.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#84a98c] hover:underline"
        >
          QGenda
        </a>,
        I worked as a full member of an Agile team on a large-scale healthcare workforce management platform, developing and maintaining full-stack features using React, .NET, and relational databases. I primarily worked on the oncall and scheduling products, fixed 21 bugs in production code, and built a custom OpenSearch connection guide that is now used across the whole development team.</p>
        <p>Alongside industry work, I've been involved in{" "}
        <a
          href="https://www.vip-consortium.org/teams/smart-city-infrastructure"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#84a98c] hover:underline"
        >
          research
        </a>
        {" "}at Georgia Tech focused on image and point cloud quality assessment for validating 3D scanners used in pavement crack detection. As the only software developer on my team, I owned the design and implementation of the full analysis pipeline, from point cloud processing to evaluation and plot visualization.</p>
        <p>I also enjoy teaching, both in and out of the classroom. As an undergraduate, I was a teaching assistant for a computer architecture and networking class{" "}
        <a
          href="/table-of-contents.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#84a98c] hover:underline"
        >
          (Systems and Networks - CS 2200)
        </a>,
        where I held office hours, helped design and grade course material, and led a lab section of 30-40 students. During my M.S., I continued as a TA for a robot sensing and control class{" "}
        <a 
          href="https://dellaert.github.io/25F-3630/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#84a98c] hover:underline"
        >
          (Robotics and Perception - CS 3630)
        </a>,
        where I led the development of multiple projects and quizzes and ran a tutorial on probability and statistics for a class of 200+ students. Outside of academics, I am also involved in the Outdoor Recreation Georgia Tech{" "}
        <a
          href="https://crc.gatech.edu/orgt_volunteer/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#84a98c] hover:underline"
        >
          (ORGT)
        </a> 
        {" "}program, where I've assisted or directly led around 20 weekend sea kayaking trips, as well as multi-week expeditions to Alaska and Norway.
        </p>
        <p>In my spare time, you'll usually find me playing tennis, biking around Atlanta, or watching movies with my roommates!</p>
      </section>
      
      {/* projects section, ordering the array projects.ts in temporal order using projectcard */}
      <section id="projects">
        <div className="grid grid-cols-2 gap-4">
          {[...projects].sort((a, b) => {
            if (a.year !== b.year) return b.year - a.year;
            return semesterOrder[b.semester] - semesterOrder[a.semester];
          }).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
