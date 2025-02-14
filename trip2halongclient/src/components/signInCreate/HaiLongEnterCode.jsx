import React, { useRef, useState } from 'react'
import { verifyOtp } from "../../apis/login_api";
import { useNavigate } from 'react-router-dom';


const HaiLongEnterCode = ({ email }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const inputs = useRef([]);
    const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text").slice(0, 4).split("");
    const newOtp = [...otp];
    pastedData.forEach((char, i) => {
      if (/^\d$/.test(char) && i < newOtp.length) {
        newOtp[i] = char;
      }
    });
    setOtp(newOtp);

    const lastIndex = Math.min(pastedData.length, inputs.current.length) - 1;
    if (lastIndex >= 0) {
      inputs.current[lastIndex].focus();
    }
  };

  const handleVerifyOtp = async () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 4) {
      setMessage("Please enter a valid 4-digit OTP.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await verifyOtp(email, otpValue);
      setMessage(`OTP verified successfully: ${response.message}`);
      navigate("/sign-in-with-email-password", {
        state: { email: email },
      });

    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  //const { email } = useParams();
  return (
    <div className='flex  mt-[50px] flex-col  items-center w-full h-screen'>
      <div className='flex items-start justify-center mt-9'>
        <h1 className='text-[25px] font-bold'>Veryfi your email address</h1>
      </div>
      <div className='flex items-start justify-center'>
        <p>We sent a verification code to </p>
        <p className='text-[#398FD4] ml-1'> {email}</p>
        <p>.</p>
      </div>
      <div className='flex items-start justify-center'>
        <p>Enter this code to continue </p>
      </div>
      <div
        className="flex justify-center  items-center gap-4"
        onPaste={handlePaste}
      >
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputs.current[index] = el)}
            className="w-12 h-12 bg-white border border-gray-300 rounded-md text-center text-lg"
          />
        ))}
      </div>
      <div className='flex flex-col items-center justify-center mt-6'>
        <button className='bg-[#1470B4] h-[40px] w-[450px] text-white font-bold'
          onClick={handleVerifyOtp}
          disabled={loading}
        >{loading ? "Verifying..." : "Veryfi Email"}</button> {message && <p className="mt-2 text-red-500">{message}</p>}
        <button className='bg-white h-[40px] w-[450px] text-[#1470B4] font-bold border border-[#1494b4] mt-3'>Reques New Code</button>
        <p className='text-black mt-3 text-[15px]'>Email not avaliable?<span className='text-[#1494b4] ml-1 underline font-bold'>Enter Your Password </span></p>
      </div>

      <div className='flex items-start justify-center mt-9'>
        <div className='bg-slate-200 h-[0.1px] w-[450px]'></div>
      </div>

      <div className='flex flex-col items-center justify-center mt-1'>
        <p className=' text-[15px] '>By signing or creating an account,</p>
        <p className=' text-[15px]'>you agree with our<span className='ml-1 mr-1 underline'>Terms & Conditions</span>and<span className='ml-1 underline'>Private Statement</span></p>
        <p className=' text-[15px] mt-3'>All rights reserver.</p>
        <p className=' text-[15px]'>Copy right (2006-2004) - Trip2.com</p>
      </div>

    </div>
  )
}

export default HaiLongEnterCode