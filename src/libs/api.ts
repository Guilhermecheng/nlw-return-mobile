import axios from "axios";

export const api = axios.create({
    // baseURL: "http://192.168.0.9:3333" test local server
    baseURL: "https://nlw-return-server-production-7be1.up.railway.app"
})