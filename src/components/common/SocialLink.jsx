import PropTypes from 'prop-types';

const propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const SocialLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-600 hover:to-purple-700 text-white font-medium rounded-xl transition duration-300 transform hover:scale-105 shadow-lg !w-auto"
    >
      <img
        src={icon}
        alt={label}
        className="w-auto h-10 rounded-full shadow-md"
      />
      <span className="text-xl">{label}</span>
    </a>
  );
};

SocialLink.propTypes = propTypes;

export default SocialLink;
