import PropTypes from "prop-types";

const Button2 = ({text,fnc}) => {
  return (
    <div>
      <button
        onClick={fnc}
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
      >
        {text}
      </button>
    </div>
  );
};

Button2.propTypes = {
    text : PropTypes.string,
    fnc : PropTypes.func
};

export default Button2;
