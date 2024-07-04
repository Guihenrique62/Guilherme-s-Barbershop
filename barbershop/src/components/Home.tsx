import { Clock } from 'lucide-react'
import React from 'react'
import Button from './Button'

export default function Home() {
  return (
    <div 
    id='home'
    className='h-screen wp-001 text-white roboto-regular flex  flex-col justify-center gap-5 px-20'
    >
        <h1 className='text-7xl roboto-bold '>Seu Estilo em boas mãos.</h1>
        <h3 className='text-2xl roboto-medium'>Espaço personalizado e climatizado para te oferecer uma experiência sem igual.</h3>
        
        <Button> <Clock /> AGENDE SEU HORÁRIO</Button>
    </div>
  )
}


