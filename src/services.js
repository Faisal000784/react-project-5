import services from "./images/services.jpg";

function Services() {
  return (
    <div className="h-[120vh]">
      <div className="flex ml-10">
        <div className="flex flex-col">
          <img src={services} alt="" className="w-[50rem] h-[40rem] " />

          <h1 className="pt-8 text-3xl font-medium">IMPREZA HOUSE</h1>
          <h4 className="pt-4 text-gray-600">UK, London 2012 — 2014</h4>
        </div>
        <div className="flex flex-col  mt-20 ml-20">
          <h1 className="text-4xl pt-[1.5rem]">OUR SERVICES</h1>
          <p className="w-[23rem] pt-6 text-gray-700">
            Our ideas respond to the fluid, dynamic nature of societal
            evolution, aimed around the concepts of places to live, history to
            share, spaces to work, sights to see, and centres to learn.
          </p>
          <div className='flex mt-16'>
            <h1 className='text-3xl font-medium'>01</h1>
            <h2 className='pl-16 text-xl font-medium pt-1'>Concept</h2>

          </div>

          <div className='flex mt-5'>
            <h1 className='text-3xl font-medium'>02</h1>
            <h2 className='pl-16 text-xl font-medium pt-1'>Development</h2>

          </div>

          <div className='flex mt-5'>
            <h1 className='text-3xl font-medium'>03</h1>
            <h2 className='pl-16 text-xl font-medium pt-1'>Planning</h2>

          </div>


          <div className='flex mt-5'>
            <h1 className='text-3xl font-medium'>04</h1>
            <h2 className='pl-16 text-xl font-medium pt-1'>Exterior Design</h2>

          </div>

          <div className='flex mt-5'>
            <h1 className='text-3xl font-medium'>05</h1>
            <h2 className='pl-16 text-xl font-medium pt-1'>Interior Design</h2>

          </div>
          
        </div>
      </div>
    </div>
  );
}
export default Services;
