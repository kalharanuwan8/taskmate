import React from 'react'
import Todocomponent from './Todocomponent'

const Todoinput = () => {
  return (
    <div>
    <div className='flex flex-col items-center  w-300'>
        <div className= 'justify-center'>         
            <h1 className='text-center font-bold text-5xl mt-2 '>Todo</h1>
        </div>
        <div className='flex flex-row border-black'> 
            <input type="text" placeholder='Add a new task' className='w-80 h-10 rounded-xl bg-white mt-5 ml-5 pl-3 border-black '/>
            <img src = 'src/assets/plus.png' className='w-10 h-10 mt-5 ml-2'/>
        </div>
       
            
        </div>
        <Todocomponent/>
    </div>
  )
}

export default Todoinput