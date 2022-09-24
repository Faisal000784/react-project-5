import about from "./images/about.jpg";

function About() {
  return (
    <div className="h-[120vh]">
      <div className="flex ml-10">
        <div className="flex flex-col  mt-20">
          <h1 className="text-8xl font-bold">17</h1>
          <h1 className="text-3xl pt-[1.5rem]">YEARS OF EXPERIENCE</h1>
          <p className="w-[25rem] pt-6 text-gray-700">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps.
          </p>
          <div className="flex pt-9">
            <h3 className="text-2xl">About Us</h3>
            <i class="fa-solid fa-arrow-right text-black opacity-75 text-2xl pl-4 "></i>
          </div>
        </div>
        <div className="flex flex-col ml-16">
          <img src={about} alt="" className="w-[50rem] h-[35rem] " />

          <h1 className="pt-8 text-3xl font-medium">BRIDGE COURT</h1>
          <h4 className="pt-4 text-gray-600">France, Paris 2016-2018</h4>
        </div>
      </div>
    </div>
  );
}
export default About;
