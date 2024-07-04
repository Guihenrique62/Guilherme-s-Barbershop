import { Clock } from 'lucide-react'
import React from 'react'

export default function Home() {
  return (
    <div className='h-screen wp-001 text-white roboto-regular flex  flex-col justify-center gap-5 px-20'>
        <h1 className='text-7xl roboto-bold '>Seu Estilo em boas mãos.</h1>
        <h3 className='text-2xl roboto-medium'>Espaço personalizado e climatizado para te oferecer uma experiência sem igual.</h3>
        <button 
        className=' flex gap-2 w-80 p-4 text-yellow-500 rounded border-2 border-yellow-500 items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors duration-400'
        > 
        <Clock /> AGENDE SEU HORÁRIO</button>
    </div>
  )
}
