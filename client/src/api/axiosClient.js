import axios  from "axios";
import queryString from "query-string";

const baseURL = "https://127.0.0.1/api/v1";
const getToken = () => localStorage.getItem("token");

const axiosClient = axios.create({
    baseURL: baseURL,
    paramsSerializer: params => queryString.stringify({params})
});

axiosClient.interceptors.request.use(async (config) => {

});