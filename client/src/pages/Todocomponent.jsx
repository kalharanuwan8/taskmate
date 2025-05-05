import React, { useState } from 'react';

const Todocomponent = () => {
  const [starclick, setstarclick] = useState(false);
  const [deleteclick, setdeleteclick] = useState(false);
  const [correctclick, setcorrectclick] = useState(false);

  return (
    <div>
      <div className='flex flex-col bg-white dark:bg-gray-800 w-70 m-5 p-5 text-center items-center rounded-2xl relative text-black dark:text-white border dark:border-gray-600'>
        {/* Star Icon */}
        <div className='absolute top-0 right-0 mt-1 mr-5'>
          <img
            src='src/assets/star.jpg'
            className={`w-5 h-5 mt-2 cursor-pointer ${starclick ? 'opacity-100' : 'opacity-60'}`}
            onClick={() => setstarclick(!starclick)}
            alt="Star"
          />
        </div>

        {/* Task Title */}
        <h2 className='mt-3'>I want to clean the house</h2>

        {/* Action Icons */}
        <div className='flex flex-row justify-center gap-8 mt-3'>
          <img
            src='src/assets/delete.jpg'
            className={`w-5 h-5 mt-2 cursor-pointer ${deleteclick ? 'opacity-100' : 'opacity-60'}`}
            onClick={() => setdeleteclick(!deleteclick)}
            alt="Delete"
          />
          <img
            src='src/assets/correct.jpg'
            className={`w-5 h-5 mt-2 cursor-pointer ${correctclick ? 'opacity-100' : 'opacity-60'}`}
            onClick={() => setcorrectclick(!correctclick)}
            alt="Complete"
          />
        </div>
      </div>
    </div>
  );
};

export default Todocomponent;
