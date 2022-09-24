import header from './images/header.jpg';
import header1 from './images/header2.jpg';



function Header() {
  return (
    <div className="header h-[190vh]">
      <div className="flex ">
        <h1 className="text-[12rem] text-black pt-40 ml-7 font-bold opacity-80">
          BUREAU
        </h1>

        <div className ='flex flex-col'>
          <p className='text-black opacity-75 text-2xl w-[28rem] pt-56 pl-8 '>
            We approach projects with fresh ideas and open minds, developing
            imaginative and sustainable spaces.
          </p>
          <div className='flex'>

         
          <p className='text-black opacity-75 text-2xl pt-8 pl-8'>View All Projects</p>
          <i class="fa-solid fa-arrow-right text-black opacity-75 text-2xl pt-8 pl-[1rem]"></i>
          </div>
        </div>
      </div>
<div className='flex'>

<div className='flex flex-col ml-10'>
<img src={header} alt=""  className='w-[45rem] h-[35rem]  '/>
<h1 className='pt-8 text-3xl font-medium'>MIDDLETOWN RESIDENCE</h1>
<h4 className='pt-4 text-gray-600'>UK, London 2012 — 2014</h4>


</div>
<div className='flex flex-col ml-10'>
      <img src={header1} alt=""  className='w-[31.5rem] h-[37rem]'/>
      <h1 className='pt-8 text-3xl font-medium'>RIVERSIDE</h1>
<h4 className='pt-4 text-gray-600'>Georgia, Tbilisi 2017-2018
</h4>

      </div>

      </div>
    </div>
  );
}
export default Header;
