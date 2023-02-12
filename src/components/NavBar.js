import { FaLinkedinIn, FaGithub, FaMedium, FaInstagram } from "react-icons/fa";

function NavBar() {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return (
      <a
        className="font-medium text-2xl italic underline mt-4"
        href={`mailto:${email}${params}`}
      >
        <button className="font-light text-xl bg-stone-900 text-white p-2 rounded-md mr-10 border-2 border-white hover:text-stone-900 hover:bg-white">
          {children}
        </button>
      </a>
    );
  };

  return (
    <div className="bg-stone-900 text-white p-3 flex justify-between items-baseline">
      <h1 className="font-bold text-4xl m-6">Zachary Youngdale</h1>
      <div className="space-x-6">
        <a href="https://www.linkedin.com/in/zacharyyoungdale/">
          <button className="text-2xl hover:scale-110 transition ease-in-out">
            <FaLinkedinIn />
          </button>
        </a>
        <a href="https://github.com/zachyoungdale">
          <button className="text-2xl hover:scale-110 transition ease-in-out">
            <FaGithub />
          </button>
        </a>
        <a href="https://medium.com/@zyoungdale_23392">
          <button className="text-2xl hover:scale-110 transition ease-in-out">
            <FaMedium />
          </button>
        </a>
        <a href="https://www.instagram.com/zachyoungdale/">
          <button className="text-2xl hover:scale-110 transition ease-in-out">
            <FaInstagram />
          </button>
        </a>

        <Mailto
          email="zyoungdale@gmail.com"
          subject="Write your subject here..."
          body=""
        >
          Contact Me
        </Mailto>
      </div>
    </div>
  );
}

export default NavBar;
