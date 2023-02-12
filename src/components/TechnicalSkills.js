import { FaReact } from "react-icons/fa";
import {
  SiRubyonrails,
  SiJavascript,
  SiRuby,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

function TechnicalSkills() {
  return (
    <div className="mt-20 text-stone-900">
      <div className="flex justify-center">
        <h1 className="font-sans font-bold text-6xl">Tech</h1>
      </div>
      <div className="grid lg:grid-cols-8 justify-items-center text-7xl mt-20 md:grid-cols-4 md:gap-y-8 sm:grid-cols-2 sm:gap-y-9">
        <FaReact className="hover:-translate-y-1 hover:scale-125 transition ease-in-out" />
        <SiRubyonrails className="hover:-translate-y-1 hover:scale-125 transition ease-in-out text-8xl" />
        <SiJavascript className="hover:-translate-y-1 hover:scale-125 transition ease-in-out" />
        <SiRuby className="hover:-translate-y-1 hover:scale-125 transition ease-in-out" />
        <SiHtml5 className="hover:-translate-y-1 hover:scale-125 transition ease-in-out" />
        <SiCss3 className="hover:-translate-y-1 hover:scale-125 transition ease-in-out" />
        <SiTailwindcss className="hover:-translate-y-1 hover:scale-125 transition ease-in-out" />
        <SiPostgresql className="hover:-translate-y-1 hover:scale-125 transition ease-in-out" />
      </div>
    </div>
  );
}

export default TechnicalSkills;
