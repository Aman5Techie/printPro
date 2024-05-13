import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../small_components/button";
import axios from "axios";
import { getAhead, getOrders } from "../rotues";
import noOrder from "../assets/noorders.png";

import Loading from "../small_components/loading";

const Submitteddocuments = () => {
  return (
    <>
      <div>
        <Header />
      </div>
    </>
  );
};

const Header = () => {
  return (
    <div className="bg-gray-100 max-w-110 py-10 px-52  ">
      <div className="max-w-4xl bg-white rounded-lg shadow-md mx-4 ">
        {/* Header */}
        <div className="bg-gray-800 text-white py-4 rounded-t-lg px-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-lg font-semibold">ID</h1>
            <h1 className="text-lg font-semibold">Product</h1>
            <div className="flex space-x-32 px-5 ">
              <h1 className="text-lg font-semibold">Price</h1>

              <h1 className="text-lg font-semibold">Ahead</h1>
              <h1 className="text-lg font-semibold">Status</h1>
            </div>
          </div>
        </div>

        <List_of_ele />
        <Button text={"Print Document"} />
      </div>
    </div>
  );
};

const List_of_ele = () => {
  const [loaded, setloaded] = useState([]);

  useEffect(() => {
    const orders = async () => {
      const token = localStorage.getItem("authorization");

      const { data } = await axios.get(getOrders, {
        headers: { authorization: token },
      });
      setloaded(data.user);
    };
    orders();
  }, []);

  return (
    <>
      {loaded.length == 0 ? (
        <div className="flex justify-center ">
          <img className="h-80 " src={noOrder} alt="load" />
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
  const [curstatus, setstatus] = useState({});
  const [ahead, setahead] = useState(null);

  useEffect(() => {
    setstatus(getStatusStyle(data.status));
    console.log(data);
    const _ahead = async()=>{
      const aheadObj = await axios.post(getAhead,{orderId : data._id})
      setahead(aheadObj.data.items);
    }
    _ahead();
  }, [data]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "done":
        return {
          color: "text-green-600",
          backgroundColor: "bg-green-200",
          text: "done",
        };
      case "progress":
        return {
          color: "text-yellow-700",
          backgroundColor: "bg-yellow-100",
          text: "progress",
        };
      case "queued":
        return {
          color: "text-red-600",
          backgroundColor: "bg-red-100",
          text: "In queue",
        };
      default:
        return {
          color: "gray-600",
          backgroundColor: "bg-gray-100",
          text: "No ele",
        };
    }
  };
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
          {ahead == null ? (
            <Loading />
          ) : (
            <p className="text-gray-700 font-bold">{ahead}</p>
          )}

          <div
            className={`flex w-20 h-10 justify-center items-center rounded-full px-3 py-2 text-sm ${curstatus.backgroundColor}`}
          >
            <p className={`text-sm  font-semibold ${curstatus.color}`}>
              {curstatus.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Submitteddocuments.propTypes = {};
Documnets.propTypes = {
  data: PropTypes.object,
};
List_of_ele.propTypes = {
  data: PropTypes.array,
};

export default Submitteddocuments;
