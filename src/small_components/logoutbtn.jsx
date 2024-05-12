import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Logout_btn = () => {
  const navigate = useNavigate();
  function Onclick() {
    localStorage.removeItem("authorization");
    navigate("/login");
  }
  return (
    <>
      <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
        <a
          onClick={Onclick}
          className="rounded-lg bg-[#1C3FB7] px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
        >
          Logout
        </a>
      </div>
    </>
  );
};

Logout_btn.propTypes = {
  reloade: PropTypes.func,
};
export default Logout_btn;
