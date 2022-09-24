import team from "./images/team.jpg";

function Team() {
  return (
    <div className="h-[90vh]">
      <div className="flex ml-10">
        <div className="flex flex-col">
          <img src={team} alt="" className="w-[50rem] h-[32rem] " />

       
        </div>
        <div className="flex flex-col ml-12">
         
          <h1 className="text-5xl pt-[1.5rem] w-[25rem]">WE DISCOVER BUILDING DESIGN</h1>
          <p className="w-[23rem] pt-6 text-gray-700">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative
          </p>




          <div className="flex  pt-16">

            <h3 className="text-2xl">Meet The Team</h3>
            <i class="fa-solid fa-arrow-right text-black opacity-75 text-2xl pl-4 "></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
