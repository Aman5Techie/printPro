import Downloadbutton from "../small_components/downloadbutton";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userinfo } from "../rotues";

import PropTypes from "prop-types";

const temp_data = [
  { id: 5685, product: "CSE120", file: "file", paid: "sucess", status: "sss" },
  { id: 1458, product: "CSE820", file: "file", paid: "sucess", status: "sss" },
  { id: 8957, product: "CSE020", file: "file", paid: "sucess", status: "sss" },
  {
    id: 8957,
    product: "CSE02d0asdbjashbdjksdjalkdnkjsadjaslndlsandknalsandkj",
    file: "file",
    paid: "sucess",
    status: "sss",
  },
];

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
      }else{
        navigate("/login")
      }
    }
    get_data();
  }, []);
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
          <List_of_ele data={temp_data} />
        </div>
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
            <Documents
              key={index}
              product={obj.product}
              file={obj.file}
              status={obj.status}
              paid={obj.status}
              id={obj.id}
            />
          );
        })}
      </div>
    </>
  );
};
const Documents = ({ id, product, file, status, paid }) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-4 flex justify-between items-center  ">
        <div className="flex justify-between space-x-32  ">
          <h2 className="text-lg font-semibold ">{id}</h2>
          <div className=" w-44  truncate">
            <h2 className="text-lg  font-semibold">{product}</h2>
          </div>
        </div>
        <div className="flex justify-center space-x-44">
          <Downloadbutton />

          <h2 className="text-lg font-semibold">{paid}</h2>
          <p className="text-gray-700">${status}</p>
        </div>
      </div>
    </div>
  );
};

Printout.propTypes = {};
List_of_ele.propTypes = {
  data : PropTypes.array
};

export default Printout;
