import axios from "axios";

const axiosHook = () => {
  return axios.create({
    baseURL: "https://last-airbender-api.herokuapp.com/",
  });
};

export default axiosHook;
