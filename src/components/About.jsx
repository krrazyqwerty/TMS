import BnB from "../assets/images/BnB.svg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-20">
      <p className="text-[#f3f2f2] mt-15 md:font-serif text-center text-2xl">
        About the Platform
      </p>

      <p className="text-5xl text-[#f3f2f2] text-center mt-4 px-80 tracking-wide">
        <span className="text-[#f1f510]">
          Empowering Traders,
        </span>{" "}
        Simplifying Success
      </p>

      <p className="text-2xl text-[#f3f2f2] mt-3 text-center px-50">
        SWIVT TMS is an advanced online trading platform that empowers users
        with intuitive tools, advanced analytics, and a seamless experience for
        traders of all levels
      </p>

      <div className="flex justify-center items-center py-15">
        <img className="h-auto" src={BnB} alt="BnB" />
      </div>
    </div>
  );
};

export default About;
