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
      {/* about me section */}
      <section id="about" className="space-y-5 leading-7">
        <p>Hey! I'm Leo, a computer science graduate student at Georgia Tech pursuing a Master's degree in Machine Learning, where I also obtained a Bachelors in computer science with a focus in intelligence and devices. With a background spanning machine learning, embedded systems, and data, I'm passionate about building solutions which require me to work across different layers of the stack.</p>
        <p>My experience in software development includes industry work, research, teaching, and various projects. As a software development intern at QGenda, I had the chance to work as a fully integrated member of an Agile team, developing and maintaining full-stack features using React, .NET, and relational databases to support a large-scale healthcare workforce management platform. In addition to industry work, I've been involved in research at Georgia Tech which focused on image and point cloud quality assessment for validation of 3D scanners used in pavement crack detection. As the only software developer in my team, I had full control over the design and implementation of the analysis pipeline.</p>
        <p>I've also been involved in teaching, both in academic and recreational settings. During my time as an undergraduate, I was a teaching assistant for a class on computer architecture and networking (Systems and Networks - CS 2200), where I would hold office hours, help design and grade course material, and teach a lab reinforcing content for 2 hours to a group of 30-40 students. I continued being a teaching assistant during my M.S. for a class on robot sensing and control (Robotics and Perception - CS 3630), where I took lead on the creation and facilitation of multiple projects and quizzes for the class, as well as held a tutorial on probability and statistics for the class of 200+ students. Outside of the classroom, I am heavily involved in the Outdoor Recreation Georgia Tech (ORGT) program, where I have assisted or directly led ~20 weekend overnight sea kayaking trips for students, as well as multi-week expeditions to Alaska and Norway.</p>
        <p>In my spare time, I'm usually playing tennis, biking, or watching movies with my roommates!</p>
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
