import library from "./images/library.jpg";
import library2 from "./images/library2.jpg";

function Library() {
  return (
    <div className='h-[100vh]'>
      <div className="flex">
        <div className="flex flex-col ml-10">
          <img src={library} alt="" className="w-[25rem] h-[25rem]  " />
          <h1 className="pt-8 text-3xl font-medium">FULTON LIBRARY</h1>
          <h4 className="pt-4 text-gray-600">Portugal, Lisbon 2012-2014</h4>
        </div>
        <div className="flex flex-col ml-10">
          <img src={library2} alt="" className="w-[51.4rem] h-[30rem]" />
          <h1 className="pt-8 text-3xl font-medium">COLLEGE OF AGRICULTURE</h1>
          <h4 className="pt-4 text-gray-600">UK, London 2012-2014</h4>
        </div>
      </div>
    </div>
  );
}
export default Library;
