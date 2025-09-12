import PropTypes from "prop-types";

const Title = ({ heading, subtitle }) => {
  return (
    <header className="flex flex-col items-center justify-center text-center py-6 md:py-12 text-stone-700">
      <h1 className="text-3xl md:text-5xl font-bold mb-2">{heading}</h1>
      {subtitle && (
        <p className="text-base md:text-lg text-stone-500 max-w-2xl">
          {subtitle}
        </p>
      )}
    </header>
  );
};

Title.propTypes = {
  heading: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Title.defaultProps = {
  heading: "Default Title",
  subtitle: "",
};

export default Title;
