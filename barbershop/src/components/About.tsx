import Button from "./Button";


export default function About(){

    return (
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

        <div className='img-ctn-animate'>
          <img src="wp02.jpg" alt="salao"  />
        </div>
      </div>
    )
}