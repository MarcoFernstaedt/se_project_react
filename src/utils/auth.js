import { request } from "./api";

const baseUrl = process.env.NODE_ENV === "production" 
  ? "https://api.wtwrweatherapp.twilightparadox.com"
  : "https://localhost:3001";

const signup = async ({ name, avatar, email, password }) => {
  try {
    const responce = await request(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, avatar, email, password }),
    });
    return responce.data;
  } catch (error) {
    throw new Error(error.message || "Signup failed");
  }
};

const signin = async ({ email, password }) => {
  try {
    const responce = await request(`${baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return responce;
  } catch (error) {
    throw new Error(error.message || "Signin failed");
  }
};

const checkTokenValidity = async (token) => {
  try {
    const responce = await request(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return responce.data;
  } catch (error) {
    throw new Error(error.message || "Token validation failed");
  }
};

export { signup, signin, checkTokenValidity };
