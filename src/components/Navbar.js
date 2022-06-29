import logo from "../assets/apple-touch-icon.png";

const navLinks = [
  { id: 1, url: "#about", title: "About" },
  { id: 2, url: "#projects", title: "Projects" },
  { id: 3, url: "#skills", title: "Skills" },
  { id: 4, url: "#contact", title: "Contact" },
  { id: 5, url: "#resume", title: "Resume" },
];

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 49,
    });
  };
  return (
    <header className="p-3 sm:p-5 bg-white sticky top-0 left-0 lg:w-5/6 lg:mx-auto">
      <nav className="flex justify-between">
        <div className="flex">
          <img src={logo} alt="logo" className=" rounded-xl w-6 mr-2" /> Naveen{" "}
          
        </div>
        <ul className="flex ">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className="mx-1 sm:ml-4 px-1  hover:bg-gray-200 hover:rounded-lg"
              href={link.url}
              onClick={handleClick}
            >
              {link.title}
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
