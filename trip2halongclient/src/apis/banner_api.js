export const fetchImages = async () => {
  try {
    const response = await fetch("https://trip-api.delimart.com.vn/api/banner/public/getAll?page=0&size=20"); // Thay URL này bằng URL API thực tế
    const data = await response.json();

    if (data.code === 200 && data.result) {
      // Lọc các ảnh có trạng thái "status: true"
      const images = data.result
        .filter((item) => item.status)
        .map((item) => ({
          id: item.id,
          src: item.url,
          alt: item.alt || "No description available",
        }));

      return images;
    } else {
      console.error("Failed to fetch images or invalid response structure");
      return [];
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
