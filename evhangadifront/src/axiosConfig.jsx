import axios from "axios"
const axiosUrl = axios.create({
    baseURL: "http://localhost:6214/api",
  })
  export default axiosUrl;