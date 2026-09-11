import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const createUser = async (newUser) => {
  const { data } = await axios.post(`${BASE_URL}/users`, newUser);
  return data;
};

export const updateUser = async ({ userId, ...updatedUser }) => {
  const { data } = await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  return data;
}

export const fetchUsers = async (userId) => {
    const { data } = await axios.get(`${BASE_URL}/users/${userId}`);
    return data
}

export const deleteUser = async (userId) => {
    await axios.delete(`${BASE_URL}/users/${userId}`)
    return userId
}