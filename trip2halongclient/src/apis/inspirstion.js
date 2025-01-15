import axios from 'axios';

export const inspirationData = async () => {
    try {
        const response = await axios.get('https://trip-api.delimart.com.vn/api/home/inspiration/public/getAll?page=0&size=20&lang=en');

        // Kiểm tra trạng thái HTTP và dữ liệu trả về
        if (response.status === 200 && response.data?.code === 200) {
            const result = response.data.result;
            if (Array.isArray(result) && result.length > 0) {
                return result; // Trả về mảng dữ liệu nếu không rỗng
            } else {
                console.warn('No data in result array.');
                return []; // Trả về mảng rỗng nếu không có dữ liệu
            }
        } else {
            console.error('API error:', response.data?.message || 'Unknown error');
            return [];
        }
    } catch (error) {
        // Log lỗi chi tiết hơn để debug
        console.error('Error fetching data from API:', error.message || error);
        return [];
    }
};
