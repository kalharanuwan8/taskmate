import React from 'react'
import Todocomponent from './Todocomponent'

const Todoinput = () => {
  return (
    <div className=' h-screen bg-white dark:bg-gray-800'>
      <div className='flex flex-col items-center w-300'>
        <div className='justify-center'>
          <h1 className='text-center font-bold text-5xl mt-2 text-black dark:text-white'>
            Todo
          </h1>
        </div>

        <div className='flex flex-row'>
          <input
            type="text"
            placeholder='Add a new task'
            className='w-80 h-10 rounded-xl bg-white dark:bg-gray-700 text-black dark:text-white mt-5 ml-5 pl-3 border border-black dark:border-gray-500'
          />
          <img src='src/assets/plus.png' className='w-10 h-10 mt-5 ml-2' alt="Add Task" />
        </div>
      </div>

      {/* Todo List */}
      <Todocomponent />
    </div>
  )
}

export default Todoinput
