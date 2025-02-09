import axios from "axios";
import { API_URL } from "./api";


const favoriteDealsData = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/home/favoriteDeals/public/getAll`, {
      params: {
        page: 0,
        size: 20,
        lang: "en",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching favorite deals:", error);
    throw error;
  }
};

export default favoriteDealsData;



// const API_URL ='https://trip-api.delimart.com.vn/api/home/favoriteDeals/public/getAll?page=0&size=20&lang=en';