import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_FRONDEND_KEY;
axios.defaults.withCredentials = true;

export default axios;