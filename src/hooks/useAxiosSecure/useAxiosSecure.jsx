import axios from "axios";
import UseAuth from "../UseAuth/UseAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://https://job-box-server-orcin.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
    const {logOutUser} = UseAuth();
    const navigate = useNavigate()

axiosInstance.interceptors.response.use(response => {
    return response;
}, error => {
    if(error.status === 401 || error.status === 403){
        console.log('logout the user');
        logOutUser()
        .then(() => {
            console.log('logged out user');
        })
        .catch(error => console.log(error))
        navigate('/login');
    }
    return Promise.reject;
})   

  return axiosInstance;
};

export default useAxiosSecure;
