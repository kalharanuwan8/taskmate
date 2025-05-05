import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Signup = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Replace this with your actual API call
    console.log('Signup Email:', email);
    console.log('Signup Password:', password);

    // Navigate to login or home after signup
    navigate('/');
  };

  return (
    <div className={`flex flex-row items-center rounded-xl h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Dark mode toggle */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {darkMode ? '🌞' : '🌙'}
      </button>

      {/* Left image */}
      <div className="flex flex-col justify-center items-center h-screen">
        <img src="src/assets/bg2.jpg" className="h-full object-cover" alt="Background" />
      </div>

      {/* Right form */}
      <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-800 h-full w-[1000px]">
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-[320px]">
          <img src="src/assets/TASKMATE.png" alt="Taskmate Logo" className="mb-5" />

          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-80 h-10 rounded-xl bg-white dark:bg-gray-700 mt-5 pl-3 
              border border-gray-300 dark:border-gray-600 
              text-gray-900 dark:text-gray-100"
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-80 h-10 rounded-xl bg-white dark:bg-gray-700 mt-5 pl-3 
              border border-gray-300 dark:border-gray-600
              text-gray-900 dark:text-gray-100"
          />

          <input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-80 h-10 rounded-xl bg-white dark:bg-gray-700 mt-5 pl-3 
              border border-gray-300 dark:border-gray-600
              text-gray-900 dark:text-gray-100"
          />

          <button
            type="submit"
            className="w-50 h-10 rounded-xl mt-4 border border-black
              dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            Sign Up
          </button>

          <div className="flex flex-row mt-2">
            <p className="text-gray-500 dark:text-gray-400">Already have an account?</p>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="text-blue-600 dark:text-blue-400 font-bold ml-2 hover:text-blue-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
