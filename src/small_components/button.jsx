import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <div className="w-56">
      <a
        className="group flex items-center justify-between gap-1 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
        href="/print"
      >
        <span className="font-medium text-lg transition-colors group-hover:text-white">
          {text}
        </span>

        <span className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500">
          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </a>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
