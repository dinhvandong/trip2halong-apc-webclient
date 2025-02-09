import axios from "axios";
import { API_URL } from "./api";

const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/product/public/getAll`, {
      params: {
        page: 0,
        size: 10,
        numberOfAdult: 99,
        numberOfChildren: 10,
        numberOfInfant: 1,
        departureDate: "2025-01-01",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;

// const API_URL = 'https://trip-api.delimart.com.vn/api/product/public/getAll?page=0&size=10&numberOfAdult=99&numberOfChildren=10&numberOfInfant=1&departureDate=2025-01-01'; 
