import PropTypes from "prop-types";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="px-6 py-5 max-w-screen h-52 rounded-4xl bg-[#26292ee9] text-white flex justify-between items-center mx-20 ">
      {icon && (
        <img
          className="w-20 h-20 mr-3"
          src={icon}
          alt={title}
        />
      )}
      <div>
        <h5 className="mb-3 text-2xl font-semibold/15">{title}</h5>
        <p className="text-lg justify-center">{description}</p>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default FeatureCard;
