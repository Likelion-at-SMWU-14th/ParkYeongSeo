import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const createUser = async (newUser) => {
  const { data } = await axios.post(`${BASE_URL}/users`, newUser);

  return data;
};