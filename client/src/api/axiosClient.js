import axios  from "axios";
import queryString from "query-string";

const baseURL = "https://127.0.0.1:5000/api/v1";
const getToken = () => localStorage.getItem("token");

const axiosClient = axios.create({
    baseURL: baseURL,
    paramsSerializer: params => queryString.stringify({params})
});

axiosClient.interceptors.request.use(async (config) => {
    return{
        ...config,
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getToken()}`
        }
    }
});

axiosClient.interceptors.response.use((response) => {
    if(response && response.data){
        return response.data;
    }
    return response;
}, (error) => {
    if (!error.response) {
        return alert("Network error, please try again later");
    }
    return error.response;
});

export default axiosClient;