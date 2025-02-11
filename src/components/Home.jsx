import Bull from "../assets/icons/Bull.png";

const Home = () => {
  return (
    <div className="flex flex-row items-center justify-center min-h-auto my-30 mx-30">
      <div className="flex flex-row space-x-8">
        <div className="flex flex-col items-start pt-20">
          <h1 className="text-left text-[#F1F510] text-6xl sm:text-3xl lg:text-6xl font-bold tracking-wide my-4">
            Trade Smarter
          </h1>
          <h1 className="text-left text-[#f3f2f2] text-6xl sm:text-3xl lg:text-6xl font-bold tracking-wide">
            Faster Seamlessly
          </h1>
          <p className="text-left text-[#f3f2f2] text-2xl my-5">
            SWIVT TMS Trading simplifies your investment journey with intuitive
            tools, real-time data, and streamlined task management, so you can
            focus on what matters most-maximiazing your portfolio
          </p>
          <div className="flex items-center justify-start font-bold space-x-4 mb-15">
            <a
              href="#"
              className="text-white px-12 py-8 border rounded-full hover:bg-[#F1F510] hover:text-black">
              Get Started Now
            </a>
            <a
              href="#"
              className="text-white px-12 py-8 border rounded-full hover:bg-[#F1F510] hover:text-black">
              Explore Features
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center w-[1556px] h-auto">
        <img src={Bull} alt="Bull" className="object-cover " />
      </div>
    </div>
  );
};

export default Home;
