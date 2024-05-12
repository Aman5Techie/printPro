import { useEffect } from "react";
import Submitteddocuments from "../components/submitteddocuments";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userinfo } from "../rotues";
const Frontpage = () => {
  const navigate = useNavigate();
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
        }
      } else {
        navigate("/login");
      }
    }
    get_data();
  }, []);
  return <Submitteddocuments />;
};

export default Frontpage;
