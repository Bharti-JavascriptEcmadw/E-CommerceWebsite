// pages/signup.js

'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export const Register = () => {
  const router = useRouter();

  // State to handle input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  // Redirect if user is already authenticated
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      router.push('/home');
    }
  }, [router]);

  // Form change handlers
  const handleChange = (setter) => (e) => setter(e.target.value);

  // Submit form and make API request to register
  const collectData = async () => {
    try {
      const result = await axios.post('', {
        name,
        email,
        password,
      });

      // Save user data in localStorage
      localStorage.setItem('user', JSON.stringify(result.data));

      // Navigate to home or login page after successful registration
      router.push('/');
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-opacity-70 bg-gray-800 p-8 rounded-xl shadow-lg w-full sm:w-96">
        <h1 className="text-3xl text-white text-center mb-6">Create Account</h1>
        <div className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="name" className="text-white">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleChange(setName)}
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-white">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange(setEmail)}
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="text-white">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleChange(setPassword)}
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="cpassword" className="text-white">Confirm Password</label>
            <input
              type="password"
              id="cpassword"
              value={cpassword}
              onChange={handleChange(setCpassword)}
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="button"
            onClick={collectData}
            className="w-full py-3 bg-blue-600 text-white rounded-md mt-4 hover:bg-blue-700"
          >
            Sign Up
          </button>

          <hr className="my-4" />
          <div className="text-center text-white">
            Already have an account?{' '}
            <a href="/signin" className="text-blue-300 hover:underline">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register