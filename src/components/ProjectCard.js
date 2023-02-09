function ProjectCard({ title, imageUrl, stack, link, gitHub }) {
  const stackList = stack.map((tech) => (
    <p
      key={tech}
      className="flex font-medium text-white bg-black rounded-lg p-1 justify-center items-center m-3"
    >
      {tech}
    </p>
  ));
  return (
    <div className="font-sans border-4 border-black p-6">
      <a href={link}>
        <h3 className="font-bold text-4xl">{title}</h3>
        <img
          src={imageUrl}
          alt="portfolio"
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
      </a>
      <div className="flex flex-row">{stackList}</div>
      <a href={gitHub}>GitHub</a>
    </div>
  );
}

export default ProjectCard;
