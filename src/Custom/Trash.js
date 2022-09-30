import React from 'react';
import image from './trash.png';
import Navbar from '../Static/Header';
import TaskBar from '../Static/TaskBar';

const Trash=()=>{
    return(
        <div >
            <Navbar />
      <hr className="w-1024px" />
      <TaskBar />
        <div className='mt-8'>
            <span className='text-500 text-4xl'>Trash is Empty</span>
            <div className='mt-3'>
            <input
            type="image"
            img
            src={image}
            alt="photo"
            width="100px"
            height="100px"
          /></div>
        </div>
        </div>
    )
}
export default Trash;