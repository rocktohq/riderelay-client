import axios from "axios";
import useAuth from "./useAuth";

const axiosHook = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  const { signOutUser } = useAuth();

  axiosHook.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      if (err.response.status === 401 || err.response.status === 403) {
        signOutUser();
      }
    }
  );

  return axiosHook;
};

export default useAxios;
