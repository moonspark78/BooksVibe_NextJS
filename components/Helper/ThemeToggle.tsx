import React from 'react'
import { BiSun } from 'react-icons/bi'

const ThemeToggle = () => {
  return (
    <button className='p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition'>
        <BiSun className='text-yellow-500 w-6 h-6'/>
    </button>
  )
}

export default ThemeToggle