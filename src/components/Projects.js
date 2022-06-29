import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section id="projects" className=" lg:w-5/6 lg:mx-auto p-4 ">
      <h2 className="mt-2 mb-4 text-4xl ">Projects</h2>
      <div className="sm:grid sm:mx-auto sm:gap-6 sm:grid-cols-2">
        <ProjectItem />
        <ProjectItem />
      </div>
    </section>
  );
};

export default Projects;
