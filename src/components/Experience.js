import experienceList from "../data/experienceList";

function Experience() {
  const experience = experienceList.map((job) => {
    return (
      <div className="flex flex-col justify-center p-10 gap-4">
        <h4 className="font-bold text-3xl">{job.title}</h4>
        <h4 className="font-medium text-2xl">{job.duration}</h4>
        <p className="font-light text-2xl">{job.details}</p>
      </div>
    );
  });
  return (
    <div>
      <div className="flex justify-center mt-40 text-stone-900">
        <h3 className="font-sans font-bold text-6xl">Experience</h3>
      </div>
      <div className="pl-40 pr-40 pt-20">{experience}</div>
    </div>
  );
}

export default Experience;
