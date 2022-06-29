import React, { useState, useEffect } from "react";
import logo from "../assets/apple-touch-icon.png";
import { BiMenuAltRight } from "react-icons/bi";

const navLinks = [
  { id: 1, url: "#about", title: "About" },
  { id: 2, url: "#projects", title: "Projects" },
  { id: 3, url: "#skills", title: "Skills" },
  { id: 4, url: "#contact", title: "Contact" },
  { id: 5, url: "#resume", title: "Resume" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 640) setToggle(false);
    });
  });
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
      <nav className="sm:flex justify-between">
        <div className="flex justify-between">
          <div className="flex ">
            <img src={logo} alt="logo" className=" rounded-xl w-6 mr-2" />
            <h3>Naveen </h3>
          </div>
          <span
            className="sm:hidden cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <BiMenuAltRight size={22} />
          </span>
        </div>
        <ul className={`${toggle ? "h-auto visible" : "h-0 hidden"} sm:flex`}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="transition ease-linear duration-[0.3s] hover:pl-1 sm:hover:pl-0 hover:bg-gray-200 sm:hover:bg-white"
              onClick={() => setToggle(!toggle)}
            >
              <a
                className=" mx-1 sm:ml-4 px-1  hover:bg-gray-200 hover:rounded-lg"
                href={link.url}
                onClick={handleClick}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
