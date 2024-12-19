import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = UseAuth();
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log("Error caught in interceptors");
      if (error.status === 401 || error.status === 403) {
        console.log("Nedd to logout to user");
        logOutUser()
          .then(() => {
            console.log("Logout user");
            navigate("/signIn");
          })
          .catch((err) => console.log(err));
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default UseAxiosSecure;

// How to implement UseAxios
/**
 * Axios: get,post, put/patch, delete -----> easier
 * interceptor: client ----------------|-----------------> server
 * client <-------------------------?--------------------> server
 * in the interceptor for response == needs two function (response, error)
 *
 */
