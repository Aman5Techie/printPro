import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { delOrder, updateStatus } from "../rotues";
import { toast } from "react-toastify";

const ProgressDonebtn = ({ object, func, value }) => {
  const [btn, setbtn] = useState(0);

  const setProgress = async () => {
    toast.success("Click on Done when task Done");
    setbtn(btn + {});
    const body = {
      orderId: object._id,
      status: "progress",
    };
    await axios.patch(updateStatus, body);
  };

  const taskDone = async () => {
    const body = {
      title: object.title,
      objectId: object._id,
      userId: object.owner,
      price: object.price,
      uniqueId: object.uniqueId,
    };
    console.log(body);
    const { data } = await axios.delete(delOrder, { data: body });
    func(!value);
    console.log(data);
  };

  return (
    <div>
      <div>
        {btn != 0 ? (
          <button
            type="button"
            onClick={taskDone}
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Done
          </button>
        ) : (
          <button
            onClick={setProgress}
            type="button"
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
};

ProgressDonebtn.propTypes = {
  object: PropTypes.object,
  func : PropTypes.func,
  value : PropTypes.any
};

export default ProgressDonebtn;
