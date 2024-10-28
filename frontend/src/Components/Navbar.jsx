const Navbar = () => {
  return (<>
  <div className="flex justify-between w-full">
      <div className="mt-5 mb-5 lg:p-2  flex flex-row items-center  text-center font-bold text-xs  md:text-base lg:text-lg">
        <span className="cursor-pointer p-1 mx-1">
          <a href="about">About</a>
        </span>
        <span className="cursor-pointer p-1 mx-1">
          <a href="#skills">Skills</a>
        </span>
        <span className="cursor-pointer p-1 mx-1">
          <a href="#project">Projects</a>
          </span>
        <span className="cursor-pointer p-1 mx-1">
          <a href="#education">Education</a>
          </span>
        <span className="cursor-pointer pr-0 p-1 mx-1">
          <a href="#contact">Contact</a>
        </span>
      </div>

      <div className="lg:justify-end items-center mt-1 ml-0.5 pr-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/SanyamMadaan/"
        >
          <button className="text-purple-500 font-bold text-sm md:text-base md:mr-2 lg:text-lg text-center justify-center items-center  mt-5">
            Github Profile
          </button>
        </a>
      </div>
      </div>
    <hr/>
    </>
  );
};

export default Navbar;
