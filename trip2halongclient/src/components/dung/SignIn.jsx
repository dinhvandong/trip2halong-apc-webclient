import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const SignInX = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
  };

  return (
    <div className="min-h-screen  bg-white">
      <div className="max-w-md px-4 mx-auto mt-[100px]">
        <h1 className="mb-2 text-2xl font-semibold text-center text-gray-700">
          Sign in your account
        </h1>
        <p className="mb-8 text-center text-gray-600">
          Sign in using your Trip2 account to access our services.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-gray-700">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700">
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative"> 
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your Password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-gray-500 transform -translate-y-1/2 right-3 top-1/2"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-6 text-sm text-center text-gray-600">
          <p>
            By signing in or creating an account,<br />
            you agree with our{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Terms & Conditions
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Statement
            </a>
          </p>
          <p className="mt-4">All rights reserved.</p>
          <p>Copyright (2006-2024) – Trip2.com</p>
        </div>
      </div>
    </div>
  );
};

export default SignInX;