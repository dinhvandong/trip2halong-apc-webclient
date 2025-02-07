import { API_URL } from "./api";
const homehome =  async () => {
    try {
        const response = await fetch(`${API_URL}/api/home/bestTrip/public/getAll?page=0&size=20&lang=en`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
}

export default homehome;
// const API_URL = 'https://trip-api.delimart.com.vn/api/home/bestTrip/public/getAll?page=0&size=20&lang=en';

