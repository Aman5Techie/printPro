import { useEffect, useState } from "react";
import Submitteddocuments from "../components/submitteddocuments";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userinfo } from "../rotues";
import Button2 from "../small_components/button2";
import Done from "../components/done";

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
    <div>
      <div className="flex ">
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
  );
};

export default Frontpage;
