function Footer() {
  return (
    <div className="bg-black opacity-80 h-[100vh]">
      <div className="flex pt-[7rem] ml-10">
        <h1 className="text-white text-5xl w-[42rem]">
          WE’RE SOCIAL, SO IF YOU’D LIKE TO TALK ABOUT YOUR PROJECT, GET IN
          TOUCH
        </h1>
        <div className="flex flex-col ml-[15rem]">
          <input
            type="text"
            placeholder="Name"
            className="w-[22rem] pl-4 py-3"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-[22rem] pl-4 py-3 mt-10"
          />
          <div className="flex pt-9 ml-36">
            <h3 className="text-2xl text-gray-400">Get In Touch</h3>
            <i class="fa-solid fa-arrow-right  text-gray-400 opacity-75 text-2xl pl-4  "></i>
          </div>
        </div>
      </div>
      <div className="flex px-10 mt-20 justify-between">
        <div className="flex flex-col text-white">
          <h1 className="text-2xl">NAVIGATION</h1>
          <p className="text-lg pt-7">Projects</p>
          <p className="text-lg pt-2">About</p>
          <p className="text-lg pt-2">Journal</p>
          <p className="text-lg pt-2">Team</p>
        </div>

        <div className="flex flex-col text-white">
          <h1 className="text-2xl">SOCIALS</h1>
          <p className="text-lg pt-7">Facebook</p>
          <p className="text-lg pt-2">Instagram</p>
          <p className="text-lg pt-2">YouTube</p>
          <p className="text-lg pt-2">LinkedIn</p>
        </div>

        <div className="flex flex-col text-white">
          <h1 className="text-2xl">CONTACT</h1>
          <p className="text-lg pt-7">+321 123 4567</p>
          <p className="text-lg pt-2">info@example.com</p>
          <p className="text-lg pt-2">1600 Amphitheatre Parkway, Mountain View, CA 94043</p>
        
        </div>
      </div>
    </div>
  );
}

export default Footer;
