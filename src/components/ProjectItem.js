const ProjectItem = ({ project }) => {
  const {image,title,techStack,description,demoUrl,githubUrl} = project
  return (
    <div className="m-3 w-full rounded-2xl overflow-hidden border shadow-orange-400 shadow-sm cursor-pointer hover:scale-[0.99] bg-white">
      <img src={image} alt="" className="boreder w-full h-96" />
      <div className="p-2 border-b-2 border-t-2 ">

      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
      </div>
      <p className="p-2 underline">Tech Stack: </p>
      <ul className="p-2 border-b-2">{techStack.map(item => <li key={item}>{ item}</li>)}</ul>

      <div className="flex  text-white justify-evenly py-4 ">
        <button className=" bg-blue-500   px-3 py-1 rounded-md tracking-wider hover:bg-blue-700 active:translate-y-[1px]">
          <a href={demoUrl} target="_blank" rel="noreferrer">
            Live Project
          </a>
        </button>
        <button className=" bg-blue-500 px-3 py-1 rounded-md tracking-wider hover:bg-blue-700 active:translate-y-[1px]">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            Source Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
