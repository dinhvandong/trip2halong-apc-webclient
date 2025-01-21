import axios from 'axios'; 

const API_URL =`https://trip-api.delimart.com.vn`

export const requestOtp = async (email) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/auth/requestOtp`,
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 5000, // giới hạn thời gian chờ
         
        }
      );
      console.log('OTP request successful:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error requesting OTP:', error);
      if (error.response) {
        console.error('Response Error:', error.response.data);
      } else if (error.request) {
        console.error('No Response received:', error.request);
      } else {
        console.error('Request Setup Error:', error.message);
      }
      throw error;
    }
  };

  export const verifyOtp = async (email, otp) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/verifyOtp`, {
        email,
        otp,
        
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
       
      }
    );
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Server Error");
      } else {
        throw new Error("Network error. Please try again.");
      }
    }
  };

// Gửi yêu cầu đăng ký cho seller
export const signupSeller = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/signupSeller`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error signing up seller:', error);
    throw error;
  }
};

// Gửi yêu cầu đăng ký cho người dùng
export const signupUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/signup`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error signing up user:', error);
    throw error;
  }
}