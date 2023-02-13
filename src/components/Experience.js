import experienceList from "../data/experienceList";

function Experience() {
  const experience = experienceList.map((job) => {
    return (
      <div className="flex flex-col justify-center p-10 gap-4  text-stone-900">
        <h4 className="font-bold text-xl sm:text-3xl">{job.title}</h4>
        <h4 className="font-medium text-lg sm:text-2xl">{job.duration}</h4>
        <ul className="space-y-4">
          {job.details.split(".").map((bullet) => (
            <li className="font-light text-lg sm:text-2xl">{bullet}</li>
          ))}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <div className="flex justify-center mt-40 text-stone-900">
        <h3 className="font-sans font-bold text-4xl sm:text-5xl">Experience</h3>
      </div>
      <div className="sm:pl-40 sm:pr-40 sm:pt-20">{experience}</div>
    </div>
  );
}

export default Experience;
