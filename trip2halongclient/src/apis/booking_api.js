import { API_URL } from "./api";

const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/api/product/public/getAll?page=0&size=10&numberOfAdult=99&numberOfChildren=10&numberOfInfant=1&departureDate=2025-01-01`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;
// const API_URL = 'https://trip-api.delimart.com.vn/api/product/public/getAll?page=0&size=10&numberOfAdult=99&numberOfChildren=10&numberOfInfant=1&departureDate=2025-01-01'; 
