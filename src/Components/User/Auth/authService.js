import axios from "axios";
import { config } from "../../../config/config";


export const login = async (value) => {
  try {
    const response = await axios.post(`${config.userApi}/login`,value);
   
    if (response.status===200) {
     localStorage.setItem("token",response.data.token)
      return true;
    } else {
      throw new Error("Invalid username or password");
    }
  } catch (error) {
    console.error("Login failed:", error.message);
    throw new Error(error.message);
  }
};


export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
export const logout = () => {
  localStorage.removeItem("token");
};
