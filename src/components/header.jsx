import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Logout_btn from "../small_components/logoutbtn";
import SignupBtn from "../small_components/signup_btn";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [login, setlogin] = useState(false);
  const [reloade, setreloade] = useState(false);
  const location = useLocation();
  const checkToken = () => {
    const bearer_token = localStorage.getItem("authorization");
    if (bearer_token) {
      setlogin(true);
    } else {
      setlogin(false);
    }
  };
  useEffect(() => {
    checkToken();
  }, [location.pathname]);

  // const navigate = useNavigate();
  return (
    <div className="container">
      <div className="relative -mx-4 flex items-center justify-between">
        <div className="w-60 max-w-full px-4">
          <a href="/#" className="block w-full py-5">
            <img
              src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
              alt="logo"
              className="w-full dark:hidden"
            />
            <img
              src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
              alt="logo"
              className="w-full hidden dark:block"
            />
          </a>
        </div>
        <div className="flex w-full items-center justify-between px-4">
          <div>
            <button
              onClick={() => setOpen(!open)}
              id="navbarToggler"
              className={` ${
                open && "navbarTogglerActive"
              } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
            >
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
            </button>
            <nav
              id="navbarCollapse"
              className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                !open && "hidden"
              } `}
            >
              <ul className="block lg:flex">
                <ListItem NavLink="/#">Home</ListItem>
                <ListItem NavLink="/#">Payment</ListItem>
                <ListItem NavLink="/#">About</ListItem>
                <ListItem NavLink="/#">Blog</ListItem>
              </ul>
            </nav>
          </div>
          {login == false ? (
            <SignupBtn />
          ) : (
            <Logout_btn reloade={setreloade} load={reloade} />
          )}
        </div>
      </div>
    </div>
  );
};

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};

ListItem.propTypes = {
  children: PropTypes.any,
  NavLink: PropTypes.any,
};

export default Header;
