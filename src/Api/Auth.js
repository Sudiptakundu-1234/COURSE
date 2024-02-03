// import { useMutation } from 'react-query';
// import axios from 'axios';

// const URL = 'https://onlinecourse-k0gx.onrender.com';

// const loginUser = async (formData) => {
//   try {
//     const response = await axios.post(`${URL}/signIn`, formData);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.message);
//   }
// };

// const signupUser = async (formData) => {
//   try {
//     const response = await axios.post(`${URL}/signUp`, formData);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.message);
//   }
// };

// const useLoginMutation = () => {
//   return useMutation(loginUser);
// };

// const useSignupMutation = () => {
//   return useMutation(signupUser);
// };

// export { useLoginMutation, useSignupMutation };

import axios from "axios";

import { useMutation } from "react-query";

const API_URL = "https://onlinecourse-k0gx.onrender.com";

const signupUser = async (formData) => {
  return await axios.post(`${API_URL}/signUp`, formData);
};

const loginUser = async (formData) => {
  return await axios.post(`${API_URL}/signIn`, formData);
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  signupUser,
  loginUser,
  logout,
};

const useLoginMutation = () => {
  return useMutation(authService.loginUser);
};

const useSignupMutation = () => {
  return useMutation(authService.signupUser);
};

export { useLoginMutation, useSignupMutation };
