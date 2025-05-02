import React, { useState, useEffect } from 'react'

const Todocomponent = () => {
  const [starclick, setstarclick] = useState(false);
  const [deleteclick, setdeleteclick] = useState(false);
  const [correctclick, setcorrectclick] = useState(false);

  return (
    <div>
      <div className='flex flex-col bg-white w-70 m-5 p-5 text-center items-center rounded-2xl relative'>
        <div className='absolute top-0 right-0 mt-1 mr-5'> 
          <img 
            src='src/assets/star.jpg' 
            className='w-5 h-5 mt-2'
            onClick={() => setstarclick(!starclick)}
          />
        </div>
        <h2 className='mt-3'>I want to clean the house</h2>
        <div className='flex flex-row justify-center space-between gap-25 mt-3'>
          <img 
            src='src/assets/delete.jpg' 
            className='w-5 h-5 mt-2'
            onClick={() => setdeleteclick(!deleteclick)}
          /> 
          <img 
            src='src/assets/correct.jpg' 
            className='w-5 h-5 mt-2'
            onClick={() => setcorrectclick(!correctclick)}
          /> 
        </div>  
      </div>
    </div>
  )
}

export default Todocomponent