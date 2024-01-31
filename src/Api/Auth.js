import { useMutation } from 'react-query';
import axios from 'axios';

const URL = 'https://onlinecourse-k0gx.onrender.com';

const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${URL}/login`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error('Login failed');
    }

    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};

const useLoginMutation = () => {
  return useMutation(loginUser);
};

export { useLoginMutation, loginUser };
