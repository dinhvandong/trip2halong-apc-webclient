import { API_URL } from "./api";
import axios from "axios";

const homehome = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/home/bestTrip/public/getAll`, {
      params: {
        page: 0,
        size: 20,
        lang: "en",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching best trips:", error);
    throw error;
  }
};

export default homehome;
// const API_URL = 'https://trip-api.delimart.com.vn/api/home/bestTrip/public/getAll?page=0&size=20&lang=en';

