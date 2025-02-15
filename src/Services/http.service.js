import axios from "axios";
import cookies from "../utils/cookies";


console.log("Base URL:", process.env.REACT_APP_BASE_URL);

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    

    // timeout: 500000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(function (config) {
    const storedToken = cookies.get("accessToken");
    console.log(storedToken);
    
    return {
        ...config,
        headers: {
            authorization: storedToken ? `Bearer ${storedToken}` : null,
        },
    };
});

export default instance;
