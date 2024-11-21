import { axiosInstance } from "./index";

export const registerUser = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/users/register", payload);
        return response.data;
    } catch (error) {
        return error.message;
    }
};

export const loginUser = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/users/login", payload);
        console.log(response);
        return response.data;
    } catch (error) {
        return error.message;
    }
};

export const authUser = async () => {
    try {
        const response = await axiosInstance.get("/api/users/auth-user");
        return response.data;
    } catch (error) {
        return error.message;
    }
};
