import { useState } from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const socialLinks = [
  {
    id: 1,
    icon: <BsGithub />,
    text: "Github",
    url: "https://www.github.com/inaveentata",
    color:''
  },
  { id: 2, icon: <BsLinkedin />, text: "LinkedIn", url: "#",color:'text-blue-900' },
  { id: 3, icon: <BsTwitter />, text: "Twitter", url: "#",color:'text-sky-400' },
];
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email) {
      window.confirm(`Hello, ${formData.firstName}! Do you want to send?
      `);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
      });
    }
  };
  return (
    <section id="contact" className=" bg-gray-100 lg:w-5/6 lg:mx-auto p-4">
      <h1 className="text-4xl my-5">Contact</h1>
      <div className="lg:grid lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="max-w-[800px] mx-auto lg:pr-3">
          <div className="sm:grid sm:grid-cols-2 gap-2">
            <label htmlFor="firstName">
              First Name
              <input
                className="input mb-3"
                type="text"
                name="firstName"
                id=""
                value={formData.firstName}
                onChange={handleFormData}
              />
            </label>
            <label htmlFor="lastName">
              {" "}
              Last Name
              <input
                className="input mb-3"
                type="text"
                name="lastName"
                id=""
                value={formData.lastName}
                onChange={handleFormData}
              />
            </label>
          </div>
          <label htmlFor="email">
            {" "}
            Email
            <input
              className="input mb-3 block"
              type="email"
              name="email"
              id=""
              value={formData.email}
              onChange={handleFormData}
            />
          </label>
          <textarea
            className="input p-3"
            name="comments"
            id=""
            cols="30"
            rows="10"
            value={formData.comments}
            onChange={handleFormData}
            placeholder="Start type over here...."
          />

          <button
            type="submit"
            className="block bg-sky-600 text-white px-2 text-xl rounded"
          >
            Send
          </button>
        </form>
        <ul className="p-4 my-10 lg:my-0 lg:border-l-2 lg: border-l-sky-800 flex lg:flex-col lg:justify-center max-w-[800px] mx-auto lg:mx-0">
          {socialLinks.map((link) => (
            <li key={link.id} className={`${link.color} flex items-center cursor-pointer ml-2  lg:ml-10 mx-auto lg:mx-0`}>
              {" "}
              {link.icon}
              <a href={link.url} target="_blank" className="ml-3 text-black">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
