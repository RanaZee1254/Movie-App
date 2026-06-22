import React from 'react'
const Navbar = ({ title }) => {

  return (
    <div className='flex justify-between items-center'>
      <div className='flex flex-col'>
        <h4 className='bg-black text-white px-3 rounded-full uppercase text-2xl font-bold'>{title}</h4>
     
       
           
            <ul className='flex gap-10 text-sm text-white border-rounded border-solid'>
            <li className='hover:text-blue-500 cursor-pointer'>Home</li>
            <li className='hover:text-blue-500 cursor-pointer'>About</li>
            <li className='hover:text-blue-500 cursor-pointer'>Contact</li>
                </ul>
      </div>
    
    </div>
  )
}

export default Navbar
