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
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectCard}
      </div>
    </div>
  );
}

export default Projects;
