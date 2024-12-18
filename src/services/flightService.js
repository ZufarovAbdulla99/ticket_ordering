import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_FLIGHTS_API}/fligths`;
export const createFlightOrder = async (order) => {
  try {
    const response = await axios.post(BASE_URL, order);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserFlightOrders = async (userId) => {
  try {
    console.log(`${BASE_URL}?userId=${userId}`)
    const response = await axios.get(`${BASE_URL}?userId=${userId}`);
    console.log(response, "*")
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateFlightOrder = async (orderId, updatedOrder) => {
  try {
    const response = await axios.put(`${BASE_URL}/${orderId}`, updatedOrder);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteFlightOrder = async (orderId) => {
  try {
    await axios.delete(`${BASE_URL}/${orderId}`);
  } catch (error) {
    throw error.response.data;
  }
};