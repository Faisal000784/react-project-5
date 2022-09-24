import project from "./images/project.jpg";

function Project() {
  return (
    <div className="h-[120vh]">
      <div className="flex ml-10">
        <div className="flex flex-col">
          <img src={project} alt="" className="w-[50rem] h-[35rem] " />

          <h1 className="pt-8 text-3xl font-medium">LARAMIE CENTER</h1>
          <h4 className="pt-4 text-gray-600">Portugal, Lisbon 2019 — 2020</h4>
        </div>
        <div className="flex flex-col  mt-20 ml-20">
          <h1 className="text-8xl font-bold">84</h1>
          <h1 className="text-3xl pt-[1.5rem]">COMPLETED PROJECTS</h1>
          <p className="w-[25rem] pt-6 text-gray-700">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative
          </p>
          <div className="flex pt-9">
            <h3 className="text-2xl">View All Projects</h3>
            <i class="fa-solid fa-arrow-right text-black opacity-75 text-2xl pl-4 "></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
