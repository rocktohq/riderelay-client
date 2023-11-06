import PropTypes from "prop-types";
const Title = ({ children, className }) => {
  return (
    <div
      className={`text-xl md:text-3xl lg:text-5xl font-bold border-l-8 border-purple-800 pl-2 ${
        className && className
      }`}
    >
      {children}
    </div>
  );
};

export default Title;
Title.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};
