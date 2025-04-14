import axios from "axios";

const api = axios.create(
    {
        baseURL: "https://reqres.in/api",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
    }
);

export const login = async (credentials) => {
    const response = await api.post("/login/", credentials);
    return response;
};