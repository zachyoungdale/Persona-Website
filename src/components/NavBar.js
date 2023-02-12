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
        <button className="font-medium text-xl bg-white text-stone-900 p-2 rounded-md mr-10 hover:border-2 hover:border-white hover:text-white hover:bg-stone-900">
          {children}
        </button>
      </a>
    );
  };

  return (
    <div className="bg-stone-900 text-white p-3 flex justify-between items-baseline">
      <h1 className="font-bold text-4xl m-6">Zachary Youngdale</h1>
      <Mailto
        email="zyoungdale@gmail.com"
        subject="Write your subject here..."
        body=""
      >
        Contact Me
      </Mailto>
    </div>
  );
}

export default NavBar;
