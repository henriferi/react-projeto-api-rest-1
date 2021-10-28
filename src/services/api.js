import axios from "axios";

const Api = axios.create({
    baseURL: "https://randomuser.me/api/?results=20"
})

export default Api;