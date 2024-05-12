import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, userinfo } from "../rotues";

const Login = () => {
  const [data, setdata] = useState({});
  const navigate = useNavigate();
  const [btn, setbtn] = useState(null);
  const [color, setcolor] = useState(["", ""]);

  useEffect(() => {
    async function get_data() {
      const bearer_token = localStorage.getItem("authorization");
      if (bearer_token) {
        const { data } = await axios.get(userinfo, {
          headers: { authorization: bearer_token },
        });
        if (data.data.role === "user") {
          navigate("/seedocumnets");
        } else {
          navigate("/printout");
        }
      }
    }
    get_data();
  }, []);

  const formSubmit = async (event) => {
    event.preventDefault();
    if (btn == null) {
      toast.error("Choose Role");
      return;
    }

    const user_data = { ...data, role: btn };
    console.log(user_data);
    try {
      const obj = await axios.post(login, user_data);
      if (obj.data.status) {
        localStorage.setItem("authorization", `Bearer ${obj.data.token}`);
        if (btn == "user") {
          navigate("/seedocumnets");
          return;
        }
        navigate("/printout");
      }
    } catch (error) {
      toast.error(error.response.data.msg);

      return;
    }
  };

  const changedata = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value });
  };
  // sjknckalsclksaklcnklsanc

  const clickedbtn = (btn) => {
    const usecolor = "text-white bg-gradient-to-br from-cyan-500 to-blue-500 ";
    if (btn == 0) {
      setcolor([usecolor, ""]);
      return;
    }
    setcolor(["", usecolor]);
  };

  const changebtn = (type) => {
    setbtn(type);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
            alt="logo"
          />
          PrintShopPro
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login Here
            </h1>
            <form
              onSubmit={formSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="XYZ"
                  required=""
                  onChange={(e) => {
                    changedata(e);
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={(e) => {
                    changedata(e);
                  }}
                />
              </div>
              <div className="flex space-x-28 ">
                <div className="px-9">
                  <div
                    name="user"
                    onClick={() => {
                      changebtn("user");
                      clickedbtn(0);
                    }}
                    className="relative inline-flex items-center  justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                  >
                    <span
                      className={` ${color[0]} relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0`}
                    >
                      User
                    </span>
                  </div>
                </div>

                <div
                  name="seller"
                  onClick={() => {
                    changebtn("seller");
                    clickedbtn(1);
                  }}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                  <span
                    className={` ${color[1]} relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0`}
                  >
                    Seller
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    name="checkbox"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Donot have an account?{" "}
                <a
                  onClick={() => {
                    navigate("/signup");
                  }}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Signup here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {};

export default Login;
