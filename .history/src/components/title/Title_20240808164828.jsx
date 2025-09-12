import PropTypes from "prop-types";

const Title = ({ heading }) => {
  return (
    <section className="flex flex-col items-center justify-center py-4 md:py-10 text-stone-700">
      <h1 className="text-3xl md:text-5xl font-normal">{heading}</h1>
    </section>
  );
};

// PropTypes for type checking
Title.propTypes = {
  heading: PropTypes.string.isRequired,
};

// Default props
Title.defaultProps = {
  heading: "Default Title",
};

export default Title;
