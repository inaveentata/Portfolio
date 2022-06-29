const ProjectItem = ({ image }) => {
  return (
    <div className="mb-3 sm:mx-auto sm:mb-auto w-full rounded-2xl overflow-hidden border shadow-orange-400 shadow-sm">
      <img
        src=""
        alt=""
        className="boreder max-w-full h-96 bg-green-300 border-green-300 border"
      />
      <div className="flex  text-white justify-evenly py-4">
        <button className=" bg-blue-500   px-3 py-1 rounded-md tracking-wider hover:bg-blue-700 active:translate-y-[1px]">
          Live Project
        </button>
        <button className=" bg-blue-500 px-3 py-1 rounded-md tracking-wider hover:bg-blue-700 active:translate-y-[1px]">
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
