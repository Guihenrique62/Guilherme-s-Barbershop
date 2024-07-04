import { MessageSquare } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={`max-h-24 flex items-center justify-center z-10 fixed w-full transition-colors duration-600 ${isScrolled ? 'header-black' : 'header-transparent'}`} >
        <div 
        className='container h-max px-12 flex justify-between items-center w-full'
        >
          <div className='header-logo-ctn'>
            <img src="logo.png" alt="logo" className='h-24'/>
          </div>
          
          <div className='flex justify-end text-white roboto-medium'>
            <nav className=' flex gap-6 px-14 items-center'>
              <a href="#home">HOME</a>
              <a href="#sobre">SOBRE</a>
              <a href="">EQUIPE</a>
              <a href="">SERVIÇOS</a>
              <a href="">CLUBE</a>
            </nav>

            <button className='flex gap-2 text-yellow-500 rounded border-2 border-yellow-500 p-4 hover:bg-zinc-400 hover:text-white hover:border-zinc-500 transition-colors duration-400'>
            <MessageSquare />
              AGENDE AGORA
            </button>
          </div>
        </div>
      </header>
  )
}
