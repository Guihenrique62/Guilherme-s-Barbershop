import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  

  return (
    <>
      <header>
        <div>
          <img src="" alt="" />
        </div>

        <div>
          <div>
            <a href="">HOME</a>
            <a href="">SOBRE</a>
            <a href="">EQUIPE</a>
            <a href="">SERVIÇOS</a>
            <a href="">CLUBE</a>
          </div>

          <button>
            AGENDE AGORA
          </button>
        </div>
      </header>

      {/* Component Home */}
      <div>
        <h1>Seu Estilo em boas mãos.</h1>
        <h3>Espaço personalizado e climatizado para te oferecer uma experiência sem igual.</h3>
        <button>AGENDE SEU HORÁRIO</button>
      </div>

      {/* Component Sobre */}
      <div>
        <div>
          <h2>Sobre</h2>
          <img src="" alt="" />
        </div>
        <div>
          <p>Com uma pegada mais moderna, a Guilherme´s Barbearia vai na contramão do tradicional estilo das barbearias e aposta na originalidade.</p>
          <p>Localizada em um dos bairros mais conhecidos e badalados de Goiânia.</p>
          <p>Desde 2024, buscando pelo bem estar de todos os clientes através dos serviços de qualidade e com os melhores profissionais.</p>
        </div>

        <button>
          SAIBA MAIS
        </button>
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
