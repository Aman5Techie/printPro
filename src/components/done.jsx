import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { allDone } from "../rotues";
import loading from "../assets/spinner.gif";
import NoOrder from "../assets/noorders.png";
const Done = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const Header = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="bg-gray-100 max-w-6xl py-12 px-52  ">
        <div className="max-w-4xl bg-white rounded-lg shadow-md mx-4 ">
          <div className="bg-gray-800 text-white py-4 rounded-t-lg px-4">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-lg font-semibold">ID</h1>
              <h1 className="text-lg font-semibold">Product</h1>
              <div className="flex space-x-32 px-5 ">
                <h1 className="text-lg font-semibold">Price</h1>

                <h1 className="text-lg font-semibold">Status</h1>
              </div>
            </div>
          </div>

          <List_of_ele />
        </div>
      </div>
    </div>
  );
};

const List_of_ele = () => {
  const [loaded, setloaded] = useState(null);

  useEffect(() => {
    const orders = async () => {
      const token = localStorage.getItem("authorization");
      const { data } = await axios.get(allDone, {
        headers: { authorization: token },
      });
      console.log(data);
      if (data) {
        setloaded(data.orders);
      }
    };
    orders();
  }, []);

  return (
    <>
      {loaded == null ? (
        <div>
          <img src={loading} alt="load" />
        </div>
      ) : (
        <div className="container mx-auto">
          {loaded.map((obj, index) => {
            return <Documnets key={index} data={obj} />;
          })}
        </div>
      )}
    </>
  );
};

const Documnets = ({ data }) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-4 flex justify-between items-center ">
        <div className="flex space-x-36">
          <h2 className="text-lg font-semibold ">{data.uniqueId}</h2>
          <div className="w-40">
            <h2 className="text-lg font-semibold  ">
              {data.title.charAt(0).toUpperCase() +
                data.title.slice(1).toLowerCase()}
            </h2>
          </div>
        </div>
        <div className="flex md:space-x-32">
          <div className=" w-12">
            <p className="text-gray-700 font-bold">${data.price}</p>
          </div>

          <div
            className={`flex w-20 h-10 justify-center items-center rounded-full px-3 py-2 text-sm bg-green-200`}
          >
            <p className={`text-sm  font-semibold text-green-600`}>Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Done.propTypes = {};
Documnets.propTypes = {
  data: PropTypes.object,
};
List_of_ele.propTypes = {
  data: PropTypes.array,
};

Done.propTypes = {};

export default Done;
