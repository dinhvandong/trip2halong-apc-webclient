import axios from 'axios'; 
import { API_URL } from "./api";


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

export async function login(email, password) {
  const response = await fetch(`${API_URL}/api/auth/signin`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Đăng nhập thất bại");
  }

  return response.json();
}