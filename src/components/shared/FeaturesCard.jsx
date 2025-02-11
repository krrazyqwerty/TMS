import PropTypes from "prop-types";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="p-4 rounded-2xl bg-[#26292ee9] text-white flex items-center mx-18">
      {icon && (
        <img
          className="w-auto h-10 mr-3 text-gray-400"
          src={icon}
          alt={title}
        />
      )}
      <div>
        <h5 className="mb-2 text-lg font-semibold">{title}</h5>
        <p className="text-white text-sm">{description}</p>
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
