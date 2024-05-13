import Downloadbutton from "../small_components/downloadbutton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { allOrders, userinfo } from "../rotues";

import PropTypes from "prop-types";
import noorder from "../assets/noorders.png";
import ProgressDonebtn from "../small_components/progress_donebtn";

const Printout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    async function get_data() {
      const bearer_token = localStorage.getItem("authorization");
      if (bearer_token) {
        const { data } = await axios.get(userinfo, {
          headers: { authorization: bearer_token },
        });
        if (data.data.role !== "seller") {
          localStorage.removeItem("authorization");
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    }
    get_data();
  }, [navigate]);
  return (
    <div>
      <div className="bg-gray-100 max-w-124 py-10 px-52  ">
        <div className="max-w-4xl bg-white rounded-lg shadow-md mx-4 ">
          {/* Header */}
          <div className="bg-gray-800 text-white py-4 rounded-t-lg px-4 ">
            <div className="flex justify-between ">
              <h1 className=" ps-3 text-lg font-semibold">ID</h1>
              <h1 className="text-lg font-semibold">Product</h1>
              <h1 className="text-lg font-semibold">Download</h1>
              <h1 className="text-lg font-semibold">Paid</h1>
              <h1 className="text-lg font-semibold">Set Status</h1>
            </div>
          </div>
          <List_of_ele />
        </div>
      </div>
    </div>
  );
};
const List_of_ele = () => {
  const [orders, setorders] = useState([]);
  const [render, setrendet] = useState(true);
  useEffect(() => {
    const getAllOrder = async () => {
      const { data } = await axios.get(allOrders);
      if (data.status) {
        setorders(data.orders);
      }
    };
    getAllOrder();
  }, [render]);
  return (
    <>
      <div className="container mx-auto">
        {orders.length == 0 ? (
          <div>
            <img src={noorder} />
          </div>
        ) : (
          orders.map((obj, index) => {
            return (
              <Documents key={index} value={obj} fnc={setrendet} ren={render} />
            );
          })
        )}
      </div>
    </>
  );
};

const Documents = ({ value, fnc, ren }) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-4 flex justify-between items-center  ">
        <div className="flex justify-between space-x-32  ">
          <h2 className="text-lg font-semibold ">{value.uniqueId}</h2>
          <div className=" w-44  truncate">
            <h2 className="text-lg  font-semibold">{value.title}</h2>
          </div>
        </div>
        <div className="">
          <Downloadbutton id={value._id} />
        </div>
        <div className="flex justify-center space-x-44">
          <h2 className="text-lg font-semibold">${value.price}</h2>
          <ProgressDonebtn object={value} func={fnc} value={ren} />
        </div>
      </div>
    </div>
  );
};

Documents.propTypes = {
  value: PropTypes.object,
  fnc: PropTypes.func,
  ren: PropTypes.any,
};
Printout.propTypes = {};
List_of_ele.propTypes = {
  data: PropTypes.array,
};

export default Printout;
