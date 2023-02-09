import projectList from "../data/projectList";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectCard = projectList.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        title={project.title}
        imageUrl={project.imageUrl}
        stack={project.stack}
        link={project.link}
        gitHub={project.gitHub}
      />
    );
  });
  return (
    <div className="font-sans flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl mb-10">Projects</h1>
      <div className="grid grid-cols-3 gap-10 m-10">{projectCard}</div>
    </div>
  );
}

export default Projects;
