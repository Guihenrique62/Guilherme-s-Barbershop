import React from 'react'

export default function Button({children}:any) {
  return (
    <button 
        className=' flex gap-2 w-80 p-4 text-yellow-500 rounded border-2 border-yellow-500 items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors duration-400'
        > 
        {children}
      </button>
  )
}
