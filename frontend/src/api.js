import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const fetchHomesForUser = async (username, page = 1) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/home/find-by-user`, null, {
      params: { username, page }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching homes for user');
  }
};

export const updateUsersForHome = async (streetAddress, users) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/home/update-users`, { streetAddress, users });
    return response.data;
  } catch (error) {
    throw new Error('Error updating users for home');
  }
};

export const fetchAllUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/find-all`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching all users');
  }
};

export const fetchUsersForHome = async (streetAddress) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/find-by-home`, null, {
      params: { street_address: streetAddress }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users for home');
  }
};
