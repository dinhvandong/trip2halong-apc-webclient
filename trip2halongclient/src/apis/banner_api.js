import axios from "axios";
import { API_URL } from "./api";

export const fetchImages = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/banner/public/getAll`, {
      params: {
        page: 0,
        size: 20,
      },
    });

    console.log("API Response:", response.data);

    if (response.data.code === 200 && response.data.result) {
      return response.data.result
        .filter((item) => item.status) // Lọc ảnh có status = true
        .map((item) => ({
          id: item.id,
          src: item.url,
          alt: item.alt || "No description available",
        }));
    } else {
      console.error("Failed to fetch images or invalid response structure");
      return [];
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
