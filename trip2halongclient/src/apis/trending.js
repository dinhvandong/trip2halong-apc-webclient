import { API_URL } from "./api";
import axios from "axios";

const trendingData = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/home/trending/public/getAll`, {
      params: {
        page: 0,
        size: 20,
        lang: "en",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching trending data:", error);
    throw error;
  }
};
export default trendingData;

// const API_URL = 'https://trip-api.delimart.com.vn/api/home/trending/public/getAll?page=0&size=20&lang=en';
