import { useEffect, useState } from "react";
import Submitteddocuments from "../components/submitteddocuments";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userinfo } from "../rotues";
import Button2 from "../small_components/button2";
import Done from "../components/done";
import Sidebar from "../components/sidebar";

const Frontpage = () => {
  const navigate = useNavigate();
  const [btn, setbtn] = useState(0);
  function clicked(ele) {
    setbtn(ele);
  }
  useEffect(() => {
    async function get_data() {
      const bearer_token = localStorage.getItem("authorization");
      if (bearer_token) {
        const { data } = await axios.get(userinfo, {
          headers: { authorization: bearer_token },
        });
        if (data.data.role !== "user") {
          localStorage.removeItem("authorization");
          navigate("/login");
          return;
        }
      } else {
        navigate("/login");
      }
    }
    get_data();
  }, [navigate]);

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="bg-red-500 w-56 col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10">
          <div className="flex py-2 px-32">
            <Button2
              fnc={() => {
                clicked(0);
              }}
              text={"Orders"}
            />
            <Button2
              fnc={() => {
                clicked(1);
              }}
              text={"Done"}
            />
          </div>
          {btn == 0 ? <Submitteddocuments /> : <Done />}
        </div>
      </div>
    </>
  );
};

export default Frontpage;
