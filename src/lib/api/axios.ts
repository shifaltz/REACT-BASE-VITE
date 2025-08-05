import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/v1/autoatendimento",
    timeout: 10000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Request-Headers": "*",
        "Access-Control-Allow-Methods":
            "GET, POST, PUT, DELETE,  HEAD , TRACE, CONNECT",
    },
});
