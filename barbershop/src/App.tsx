
import { Clock, MessageSquare } from 'lucide-react'
import './output.css'
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Button from './components/Button';

function App() {

  

  return (
    <>
      
      <Header/>

      {/* Component Home */}
      <Home/>


      {/* Component Sobre */}
      <div className='bg-black h-full text-white p-12 grid grid-cols-2' id='sobre'>
        <div className=' flex flex-col gap-7 px-20'>
          <div className='flex text-2xl roboto-medium items-start flex-col gap-0 p-0'>
            <h2 className='text-5xl'>Sobre</h2>
            <img src="bigode.png" alt="" className='w-28'/>
          </div>
          <div className='flex flex-col gap-4 text-lg'>
            <p>Com uma pegada mais moderna, a Guilherme's Barbearia vai na contramão do tradicional estilo das barbearias e aposta na originalidade.</p>
            <p>Localizada em um dos bairros mais conhecidos e badalados de Goiânia.</p>
            <p>Desde 2024, buscando pelo bem estar de todos os clientes através dos serviços de qualidade e com os melhores profissionais.</p>
          </div>
          <Button>SAIBA MAIS</Button>
        </div>

        <div>
          <img src="wp02.jpg" alt="salao"  />
        </div>
      </div>


      {/* Component Equipe */}

      <div>
        <h2>Conheça nossa equipe</h2>
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

