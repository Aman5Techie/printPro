import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Smallheading from "../small_components/smallheading";
import axios from "axios";
import { getStats } from "../rotues";
import Loading from "../small_components/loading";
const UserDashboard = ({ id }) => {
  const [data, setdata] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.post(getStats, { id });
      setdata(data.data);
    };
    getData();
  }, [id]);
  return (
    <>
      {data == false ? (
        <Loading />
      ) : (
        <div>
          <div className="min-h-screen bg-gray-50/50 ">
            <div className="p-4 ">
              <div className="mt-12 ">
                <div className="mb-12 item-centre flex justify-center  space-x-48 md:grid-cols-2 xl:grid-cols-4">
                  <div className=" flex flex-col bg-clip-border w-60 rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-6 h-6 text-white"
                      >
                        <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                          clipRule="evenodd"
                        ></path>
                        <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
                      </svg>
                    </div>
                    <div className="p-4 text-right">
                      <p className="block font-medium antialiased font-sans text-sm leading-normal  text-blue-gray-600">
                        Total Money Spent
                      </p>
                      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                        ${data.total_spend}
                      </h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                      <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                        {/* <strong className="text-green-500">+55%</strong>&nbsp;than
                    last week */}
                      </p>
                    </div>
                  </div>

                  <div className="relative w-60  flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-6 h-6 text-white"
                      >
                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
                      </svg>
                    </div>
                    <div className="p-4 text-right">
                      <p className="block antialiased font-sans font-medium text-sm leading-normal  text-blue-gray-600">
                        Total Orders
                      </p>
                      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                        {data.total_orders}
                      </h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                      <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                        <strong className="text-green-500">+5%</strong>
                        &nbsp;than yesterday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                  <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                    <div>
                      <h6 className="block antialiased tracking-normal font-sans text-base font-bold leading-relaxed text-blue-gray-900 mb-1">
                        History
                      </h6>
                    </div>
                  </div>
                  <div className="p-6 h-80 overflow-scroll  no-scrollbar px-0 pt-0 pb-2">
                    <table className="w-full ">
                      <thead>
                        <tr>
                          <Smallheading name={"Past Orders"} />
                          <Smallheading name={"Price"} />
                          <Smallheading name={"Date"} />
                        </tr>
                      </thead>
                      <tbody>
                        <History orders={data.history} />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const History = ({ orders }) => {
  return (
    <>
      {orders.map((obj, index) => {
        return (
          <Pastorders
            key={index}
            title={obj.title}
            price={obj.price}
            date={obj.createdAt}
          />
        );
      })}
    </>
  );
};

const Pastorders = ({ title, price, date }) => {
  return (
    <>
      <tr>
        <td className="py-3 px-5 border-b border-blue-gray-50">
          <div className="flex items-center gap-4">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
              {title}
            </p>
          </div>
        </td>

        <td className="py-3 px-5 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm font-medium text-blue-gray-600">
            ${price}
          </p>
        </td>
        <td className="py-3 px-5 border-b border-blue-gray-50">
          <div className="w-10/12 font-sans  block text-sm font-medium text-blue-gray-600">
            {date.slice(0, 10)}
          </div>
        </td>
      </tr>
    </>
  );
};

UserDashboard.propTypes = {};

export default UserDashboard;
