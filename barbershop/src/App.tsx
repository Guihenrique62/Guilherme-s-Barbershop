
import { Clock, MessageSquare } from 'lucide-react'
import './output.css'
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Button from './components/Button';
import About from './components/About';

function App() {

  

  return (
    <>
      
      <Header/>

      {/* Component Home */}
      <Home/>


      {/* Component Sobre */}
      <About/>


      {/* Component Equipe */}

      <div className='bg-black text-white '>
        <h2 className='text-5xl roboto-bold'>Conheça nossa equipe</h2>
        <p>Um time de feras, cada qual com o seu estilo, com seu jeito particular.Mas todos com muita bagagem e capazes de cuidar do seu visual de forma única, um atendimento personalizado.</p>
        
        <div>
          <div>
            <img src="" alt="" />
            <span>Nome</span>
          </div>

        </div>
        
      </div>

      <div>
        <h2>Nossos serviços</h2>

        <div>
          <div>
            <p>Barba</p>
            <span>R$ 55,00</span>
          </div>

          <div>
            <p>Barba</p>
            <span>R$ 55,00</span>
          </div>

        </div>

        <button>AGENDE SEU HORARIO</button>
      </div>





      <footer>
        <div>
          <img src="" alt="" />
          <span>Ico</span>
          <span>Ico</span>
          <span>Ico</span>

        </div>

        <div>
          <p>Funcionamento</p>
          <p>Segunda a Sexta - 09h às 20h</p>
          <p>Sábado - 08h às 18h</p>
        </div>

        <div>
          <p>Localização</p>
          <p>Av. Ipanema - Jd Atlântico - Goiânia GO</p>
          <p>{"Tel. (62) 98643-7924"}</p>
        </div>
      </footer>

    </>
  )
}

export default App

