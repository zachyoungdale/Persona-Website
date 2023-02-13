import { FaLinkedinIn, FaGithub, FaMedium, FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

function NavBar({ windowWidth }) {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return (
      <a href={`mailto:${email}${params}`}>
        <button>{children}</button>
      </a>
    );
  };

  return (
    <div className="bg-stone-900 text-white p-3 sm:p-6 flex flex-row items-baseline justify-between">
      <h1 className="font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl m-1">
        Zachary Youngdale
      </h1>
      <div className="space-x-2 flex items-center md:space-x-4">
        <a href="https://www.linkedin.com/in/zacharyyoungdale/">
          <button className="text-2xl md:text-3xl hover:scale-110 transition ease-in-out items-center focus:text-gray-500">
            <FaLinkedinIn />
          </button>
        </a>
        <a href="https://github.com/zachyoungdale">
          <button className="text-2xl md:text-3xl hover:scale-110 transition ease-in-out focus:text-gray-500">
            <FaGithub />
          </button>
        </a>
        <a href="https://medium.com/@zyoungdale_23392">
          <button className="text-2xl md:text-3xl hover:scale-110 transition ease-in-out focus:text-gray-500">
            <FaMedium />
          </button>
        </a>
        <a href="https://www.instagram.com/zachyoungdale/">
          <button className="text-2xl md:text-3xl hover:scale-110 transition ease-in-out focus:text-gray-500">
            <FaInstagram />
          </button>
        </a>
        {windowWidth < 640 ? (
          <Mailto
            email="zyoungdale@gmail.com"
            subject="Write your subject here..."
            body=""
          >
            <TfiEmail className="text-2xl hover:scale-110 transition ease-in-out focus:text-gray-500" />
          </Mailto>
        ) : (
          <button className="font-light text-md bg-stone-900 text-white p-2 rounded-md border-2 border-white hover:text-stone-900 hover:bg-white focus:text-gray-500">
            <Mailto
              email="zyoungdale@gmail.com"
              subject="Write your subject here..."
              body=""
            >
              Contact Me
            </Mailto>
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
