import BnB from "../assets/images/BnB.svg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-20 font-[poppins]">
      <p className="text-[#f3f2f2] mt-15 md:font-serif text-center text-[20px]">
        About the Platform
      </p>

      <p className="text-5xl font-bold text-[#f3f2f2] text-center mt-4 leading-15">
        <span className="text-[#f1f510]">
          Empowering Traders,
        </span>{" "}
        Simplifying <br/>
         Success
      </p>

      <p className="text-2xl text-[#f3f2f2] mt-3 text-center px-50">
        SWIVT TMS is an advanced online trading platform that empowers users
        with intuitive <br/> tools, advanced analytics, and a seamless experience for
        traders of all levels
      </p>

      <div className="flex justify-center items-center self-stretch py-15 px-10 object-cover">
        <img className="h-auto w-full" src={BnB} alt="BnB" />
      </div>
    </div>
  );
};

export default About;
