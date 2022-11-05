import ProjectItem from "./ProjectItem";
import WeatherPng from '../assets/projects/Weather.png'
import HackerNewsPng from '../assets/projects/Hacker-news.png'
import InvoicePng from '../assets/projects/Invoice.png'
import TodoPng from '../assets/projects/todos.png'


const projectsData = [
  {
    image: WeatherPng,
    title: "Weather Application",
    techStack: ["React", "Vanilla CSS"],
    description:
      "A weather application which gives real time weather information based on the current user input anywhere in the world.",
    demoUrl: "https://react-weather-app-1-jun-2022.netlify.app/",
    githubUrl: "https://github.com/inaveentata/react-weather-application",
  },
  {
    image: HackerNewsPng,
    title: "Hacker News Clone",
    techStack: ["React", "React-router-dom", "Sass"],
    description:
      "It is a clone application similar to new.ycombinator.com web application and provides the real time information for the users",
    demoUrl: "https://react-hacker-news-clone-14-jun-2022.netlify.app/",
    githubUrl: "https://github.com/inaveentata/hacker-news-clone",
  },
  {
    image: InvoicePng,
    title: "Invoice Generator ",
    techStack: ["React", "React-hook-form"],
    description:
      "An invoice generator application which generates dynamic invoices.",
    demoUrl: "https://invoice-generator-04-aug.netlify.app/",
    githubUrl: "https://github.com/inaveentata/invoice-generator",
  },
  {
    image: TodoPng,
    title: "Multi TodoList",
    techStack: ["React", "TypeScript", "Material UI"],
    description:
      "This application works for multiple todo lists and each todo list maintaines it's individual todo items.",
    demoUrl: "https://todo-mvc-app-aug-18-2022.netlify.app/",
    githubUrl: "https://github.com/inaveentata/todo-mvc-app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-b-2 bg-gray-100 max-w-screen-xl p-4 md:px-8 m-auto"
    >
      <h2 className=" mt-2 mb-4 text-4xl ">Projects</h2>
      <div className="grid mx-auto sm:gap-6 sm:grid-cols-2 p-4">
        {
          projectsData.map(project => <ProjectItem key={project.title} project={project} />)
        }
      </div>
    </section>
  );
};

export default Projects;
