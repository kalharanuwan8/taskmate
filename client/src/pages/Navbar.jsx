import React from 'react';
import Todoinput from './Todoinput';
import Todocomponent from './Todocomponent';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <div className={`flex flex-row opacity-80 h-full gap-14 ${darkMode ? 'dark' : ''}`}>
      {/* Dark mode toggle */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {darkMode ? '🌞' : '🌙'}
      </button>

      {/* Sidebar */}
      <div className="w-60 bg-gray-300 dark:bg-gray-800 bg-opacity-45">
        <div className="flex flex-col">
          <div className="h-auto w-auto mb-10 flex justify-center">
            <img src="src/assets/TASKMATE.png" className="w-50 h-50" alt="Logo" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-white dark:bg-gray-700 text-center flex flex-row justify-center gap-3 p-2 rounded-xl m-2 text-black dark:text-white">
              <img src="src/assets/list.png" className="w-7 h-7" />
              All Tasks
            </div>
            <div className="bg-white dark:bg-gray-700 text-center flex flex-row justify-center gap-3 p-2 rounded-xl m-2 text-black dark:text-white">
              <img src="src/assets/circular.png" className="w-7 h-7" />
              Ongoing
            </div>
            <div className="bg-white dark:bg-gray-700 text-center flex flex-row justify-center gap-3 p-2 rounded-xl m-2 text-black dark:text-white">
              <img src="src/assets/check.png" className="w-7 h-7" />
              Completed
            </div>
            <div className="bg-white dark:bg-gray-700 text-center flex flex-row justify-center gap-3 p-2 rounded-xl m-2 text-black dark:text-white">
              <img src="src/assets/settings.png" className="w-7 h-7" />
              Settings
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="items-center justify-center">
        <Todoinput />
      </div>
    </div>
  );
}

export default Navbar;
