import building from "./images/building.jpg";
import building2 from "./images/building-2.jpg";

function Building() {
  return (
    <div className='h-[100vh]'>
      <div className="flex">
        <div className="flex flex-col ml-10">
          <img src={building} alt="" className="w-[25rem] h-[18rem]  " />
          <h1 className="pt-8 text-3xl font-medium">CLASSROOM BUILDING</h1>
          <h4 className="pt-4 text-gray-600">Portugal, Lisbon 2012 — 2014</h4>
        </div>
        <div className="flex flex-col ml-10">
          <img src={building2} alt="" className="w-[51.4rem] h-[30rem]" />
          <h1 className="pt-8 text-3xl font-medium">INSPIRATION PARK</h1>
          <h4 className="pt-4 text-gray-600">UK, London 2008 — 2009</h4>
        </div>
      </div>
    </div>
  );
}
export default Building;
