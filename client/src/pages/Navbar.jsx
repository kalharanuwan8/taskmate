import React from 'react'
import Todoinput from './Todoinput'
import Todocomponent from './Todocomponent'


function Navbar() {
  return (
    <div className="flex flex-row opacity-80 h-full gap-14">
        <div className="w-60 bg-gray-300 bg-opacity-45 "> 
        <div className='flex flex-col'>
            <div className='h-auto w-auto mb-10 flex justify-center'>
                <img src = 'src/assets/TASKMATE.png' className="w-50 h-50" />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='bg-white text-center flex flex-row justify-center gap-3 p-2 rounded-xl m-2'>
                    <img src = 'src/assets/list.png' className='w-7 h-7'/>
                        All Tasks
                </div>
                <div className='bg-white text-center flex flex-row justify-center gap-3 p-2 rounded-xl m-2'>
                    <img src = 'src/assets/circular.png' className='w-7 h-7'/>
                        Ongoing
                </div>
                <div className='bg-white text-center flex flex-row justify-center gap-3 p-2 rounded-xl m-2'>
                    <img src = 'src/assets/check.png' className='w-7 h-7'/>
                        Completed
                </div>
                <div className='bg-white text-center flex flex-row justify-center gap-3 p-2 rounded-xl m-2'>
                    <img src = 'src/assets/settings.png' className='w-7 h-7'/>
                        Settings
                </div>
                
            </div>
           
            

        </div>
        </div>
        <div className='items-center justify-center'> 
           <Todoinput/>
        </div>

    </div>
  )
}

export default Navbar