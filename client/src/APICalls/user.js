import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/app/v1/users/register",
      payload
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/app/v1/users/login", payload);
    return response?.data;
  } catch (error) {
    return error;
  }
};
