import { useEffect, useState } from "react";
import Submitteddocuments from "../components/submitteddocuments";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userinfo } from "../rotues";
import Button2 from "../small_components/button2";
import Done from "../components/done";
import Sidebar from "../components/sidebar";
import UserDashboard from "../components/userdashboard";
import Loading from "../small_components/loading";

const Frontpage = () => {
  const navigate = useNavigate();
  const [btn, setbtn] = useState(1);
  const [user, setuser] = useState(null);
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
        setuser(data.data);
      } else {
        navigate("/login");
      }
    }
    get_data();
  }, [navigate, btn]);

  return (
    <>
      <div className="grid grid-cols-12">
        <div className=" w-56 col-span-2 border-black">
          <Sidebar func={setbtn} value={btn} />
        </div>
        <div className="col-span-10 ">
          {btn == 1 ? <Submitteddocuments /> : <></>}
          {btn == 2 ? <Done /> : <></>}
          {btn == 0 ? <UserDashboard id={user.id} /> : <></>}
        </div>
      </div>
    </>
  );
};

export default Frontpage;
