import axios from "axios";

export const MAINURL = "https://jsonplaceholder.typicode.com";
// export const MAINURL = "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: MAINURL,
});

export default axiosInstance;
