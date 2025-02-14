import Frame from "../assets/images/frame.png";
import Checked from "../assets/images/Checked.png";
import Real from "../assets/icons/Real.png";
import Security from "../assets/icons/Security.png";
import Portfolio from "../assets/icons/Portfolio.png";
import User from "../assets/icons/User.png";
import FeatureCard from "./shared/FeaturesCard";

const Features = () => {
  return (
    <div className="mx-10">
      {/* Features Section */}
      <div className="flex justify-between border from- rounded-xl border-[#ffffff] px-15 mx-20 mt-20 bg-[#26292ee9]">
        <div className="flex-row items-start justify-center">
          <p>
            <span className="flex text-[20px] font-medium items-center justify-space-between mb-5 mt-25">
              Features
            </span>
            <h1 className="text-5xl/relaxed font-extrabold mb-10">
              <span className="text-[#f3f510]">Why trading</span> with <br />{" "}
              our TMS
            </h1>
          </p>
          <div className="flex flex-row justify-start items-start space-x-3 ">
            <div className="flex items-center">
              <img className="my-2" src={Checked} alt="Checked Icon" />
              <p className="ml-2">Get paid within 24 hours</p>
            </div>
            <div className="flex items-center ml-20">
              <img className="my-2" src={Checked} alt="Checked Icon" />
              <p className="ml-2">Realtime Trading</p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-start space-x-3 mt-3">
            <div className="flex items-center">
              <img className="my-2" src={Checked} alt="Checked Icon" />
              <p className="ml-2">Best Trading Platform</p>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end self-stretch ml-50 mt-25 object-cover">
          <img className="w-full h-full" src={Frame} alt="frame" />
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 mt-16">
        <FeatureCard
          title="Real Time Trading"
          description="Live prices, charts, and alerts—never miss a market move."
          icon={Real}
        />
        <FeatureCard
          title="Security Transactions"
          description="Trade securely with top-tier encryption and robust protection."
          icon={Security}
        />
        <FeatureCard
          title="Portfolio Management"
          description="All your trading tools in one customizable dashboard."
          icon={Portfolio}
        />
        <div className="lg:col-start-2 lg:col-span-1 flex items-center justify-center">
          <FeatureCard
            title="User friendly Dashboard"
            description="All-in-one tools with a customizable dashboard."
            icon={User}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
