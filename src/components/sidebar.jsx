// import React from "react";
// import PropTypes from "prop-types";

import { useState } from "react";

const Sidebar = ({ func, value }) => {
  const [btn, setbtn] = useState(["", "", ""]);
  function clicked(i) {
    const arr = ["", "", ""];
    arr[i] = "bg-gray-200 text-gray-900";
    setbtn(arr);
    func(i);
  }

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <div
        id="default-sidebar"
        className="fixed  top-22 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full  px-3 py-4  overflow-y-auto  dark:bg-gray-800">
          <ul className="space-y-2 font-medium ">
            <li
              onClick={() => {
                clicked(0);
              }}
            >
              <a
                href="#"
                className={`flex ${btn[0]}   items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className={`flex-shrink-0 w-7 h-7 ${btn[0]}  text-gray-500  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span name="D" className="ms-3 text-2xl ">
                  Dashboard
                </span>
              </a>
            </li>

            <li
              onClick={() => {
                clicked(1);
              }}
            >
              <a
                href="#"
                className={`flex ${btn[1]}   items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className={`flex-shrink-0 w-7 h-7 ${btn[1]}  text-gray-500  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-2xl">
                  Orders
                </span>
              </a>
            </li>
            <li
              onClick={() => {
                clicked(2);
              }}
            >
              <a
                href="#"
                className={`flex ${btn[2]}   items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="Checked"
                  fill="currentColor"
                  className={` ${btn[2]}  flex-shrink-0 w-7 h-7 text-gray-500  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                >
                  <path d="M10.21,14.75a1,1,0,0,0,1.42,0l4.08-4.08a1,1,0,0,0-1.42-1.42l-3.37,3.38L9.71,11.41a1,1,0,0,0-1.42,1.42ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z"></path>
                </svg>
                <span className="ms-3 text-2xl ">Completed</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
