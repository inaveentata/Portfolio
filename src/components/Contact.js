import { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const socialLinks = [
  {
    id: 1,
    icon: <BsGithub />,
    text: "Github",
    url: "https://www.github.com/inaveentata",
    color: "",
  },
  {
    id: 2,
    icon: <BsLinkedin />,
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/naveen-tata-b2a41524b/",
    color: "text-blue-900",
  },
  {
    id: 3,
    icon: <BsTwitter />,
    text: "Twitter",
    url: "#",
    color: "text-sky-400",
  },
];
const Contact = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false)

  

 const sendEmail = (e) => {
   e.preventDefault(); 
     emailjs
       .sendForm(
         "service_vv88czq",
         "template_dk14q0f",
         form.current,
         "BaMJJ9LpSLZQqGnn_"
       )
       .then(
         (result) => {
           console.log(result.text);
           e.target.reset();
           setIsMessageSent(true)
           setTimeout(() => {
             setIsMessageSent(false)
           }, 2000)
         },
         (error) => {
           console.log(error.text);
         }
       );
 };
  return (
    <section
      id="contact"
      className="border-b-2 bg-gray-100 max-w-screen-xl mx-auto p-4"
    >
      <h1 className="text-4xl my-5">Contact</h1>
      <div className="lg:grid lg:grid-cols-2">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-[800px] mx-auto lg:pr-3 text-xl"
        >
          <div className="sm:grid sm:grid-cols-2 gap-2">
            <label htmlFor="name">
              Name
              <input
                className="input mb-3"
                type="text"
                name="user_name"
                id="name"
              />
            </label>
            <label htmlFor="email">
              {" "}
              Email
              <input
                className="input mb-3 block"
                type="email"
                name="user_email"
                id="email"
              />
            </label>
          </div>
          <label>
            {" "}
            Message
            <textarea
              className="input p-3"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Start type over here...."
            />
          </label>
          <button
            type="submit"
            className="block bg-sky-600 text-white px-2 text-xl rounded"
          >
            Send
          </button>{" "}
          {isMessageSent && (
            <span className="  flex justify-center items-center">
              {" "}
              <p className="text-center text-green-600 rounded-xl px-4  border-[1px] border-black bg-gray-200">
                Message Sent
              </p>
            </span>
          )}
        </form>
        {/* -------- social media links -------*/}
        <ul className="p-4 my-10 lg:my-0 lg:border-l-2 lg: border-l-sky-800 flex lg:flex-col lg:justify-center max-w-[800px] mx-auto lg:mx-0">
          {socialLinks.map((link) => (
            <li
              key={link.id}
              className={`${link.color} sm:text-2xl flex items-center cursor-pointer ml-2  lg:ml-10 mx-auto lg:mx-0`}
            >
              {" "}
              {link.icon}
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="ml-3 text-black hover:translate-x-1"
              >
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
