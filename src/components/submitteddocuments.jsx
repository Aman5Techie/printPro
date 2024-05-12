import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../small_components/button";

const Submitteddocuments = () => {
  return (
    <>
      <div>
        <Header />
      </div>
    </>
  );
};

const tempdata = [
  { price: 525, product: "Phone", status: "done",id:4547 },
  { price: 999, product: "Laptop", status: "progress",id:7487 },
  { price: 525, product: "Table", status: "queue",id:7584 },
];

const Header = () => {
  return (
    <div className="bg-gray-100 max-w-110 py-10 px-52  ">
      <div className="max-w-4xl bg-white rounded-lg shadow-md mx-4 ">
        {/* Header */}
        <div className="bg-gray-800 text-white py-4 rounded-t-lg px-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-lg font-semibold">ID</h1>
            <h1 className="text-lg font-semibold">Product</h1>
            <h1 className="text-lg font-semibold">Price</h1>
            <h1 className="text-lg font-semibold">Status</h1>
          </div>
        </div>

        <List_of_ele data={tempdata} />
        <Button text={"Print Document"} />
      </div>
    </div>
  );
};

const List_of_ele = ({ data }) => {
  return (
    <>
      <div className="container mx-auto">
        {data.map((obj, index) => {
          return (
            <Documnets
              key={index}
              product={obj.product}
              price={obj.price}
              status={obj.status}
              id={obj.id}
            />
          );
        })}
      </div>
    </>
  );
};

const Documnets = ({ id, product, price, status }) => {
  const [curstatus, setstatus] = useState({});
  useEffect(() => {
    setstatus(getStatusStyle(status));
  }, [status]);
  const getStatusStyle = (status) => {
    switch (status) {
      case "done":
        return {
          color: "text-green-600",
          backgroundColor: "bg-green-200",
          text: "Done",
        };
      case "progress":
        return {
          color: "text-yellow-700",
          backgroundColor: "bg-yellow-100",
          text: "Progress",
        };
      case "queue":
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
        <h2 className="text-lg font-semibold ">{id}</h2>
        <h2 className="text-lg font-semibold">{product}</h2>
        <p className="text-gray-700">${price}</p>

        <div
          className={`flex w-20 h-10 justify-center items-center rounded-full px-3 py-2 text-sm ${curstatus.backgroundColor}`}
        >
          <p className={`text-sm  font-semibold ${curstatus.color}`}>
            {curstatus.text}
          </p>
        </div>
      </div>
    </div>
  );
};

Submitteddocuments.propTypes = {};
Documnets.propTypes = {
  id: PropTypes.number,
  product: PropTypes.string,
  price: PropTypes.number,
  status: PropTypes.string,
};
List_of_ele.propTypes = {
  data: PropTypes.array,
};

export default Submitteddocuments;
