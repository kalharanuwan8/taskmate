import React, { useState } from 'react';

const Login = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`flex flex-row items-center rounded-xl h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {darkMode ? '🌞' : '🌙'}
      </button>

      <div className="flex flex-col justify-center items-center h-screen">
        <img src="src/assets/bg2.jpg" className="h-full" alt="Background" />
      </div>   
      <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-800  h-full w-[1000px]">
        <div>
          <form className="flex flex-col items-center w-[320px]">
            <img src="src/assets/TASKMATE.png" alt="Taskmate Logo" />
            <input
              type="text"
              placeholder="email"
              className="w-80 h-10 rounded-xl bg-white dark:bg-gray-700 mt-5 pl-3 
                border border-gray-300 dark:border-gray-600 
                text-gray-900 dark:text-gray-100"
            />
            <input
              type="password"
              placeholder="password"
              className="w-80 h-10 rounded-xl bg-white dark:bg-gray-700 mt-5 pl-3 
                border border-gray-300 dark:border-gray-600
                text-gray-900 dark:text-gray-100"
            />
            <button 
              type="button"
              className="text-blue-800 dark:text-blue-400 font-bold mt-2 self-end hover:text-blue-600"
            >
              Forgot Password?
            </button>
            <button
              type="submit"
              className="w-50 h-10 rounded-xl mt-3 border border-black
                dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              Login
            </button>
            <div className="flex flex-row mt-2">
              <p className="text-gray-500 dark:text-gray-400">Don't have an account?</p>
              <button 
                type="button"
                className="text-blue-600 dark:text-blue-400 font-bold ml-2 hover:text-blue-500"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;