import { useState } from 'react'
import './app.css'
import logo_twitch from './img/twitch.svg'
import logo_youtube from './img/youtube.svg'
import logo_github from './img/github.svg'
import Pesquisa from './components/Pesquisa'
import Estudar from './components/Estudar'
import Rodape from './components/Rodape'

function App() {

  let [peso, setPeso] = useState(0)
  let [altura, setAltura] = useState(0)
  let [resultado, setResultado] = useState(0)


  function fazConta()
  {
    const alturaAoQuadrado = altura * altura
    setResultado(peso.toFixed(2) / alturaAoQuadrado.toFixed(2))
  }

  function retornoDaReposta()
  {
    if(isNaN(resultado))
    {
      <>
        <h2>Prencha todos os campos!</h2>
      </>
    }
    else if(resultado == 0)
    {
      return (
        <h2></h2>
      )
    }
    else if(resultado < 16)
    {
      return (
        <>
          <h2>{resultado.toFixed(2)}</h2>
          <h2 className='BPG1'>Baixo peso (grau I)</h2>
        </>
      )
    }
    else if(resultado >= 16 && resultado <= 16.99)
    {
      return (
        <>
          <h2>{resultado.toFixed(2)}</h2>
          <h2 className='BPG2'>Baixo peso (grau II)</h2>
        </>
      )
    }
    else if(resultado >= 17 && resultado <= 18.49)
    {
      return (
        <>
          <h2>{resultado.toFixed(2)}</h2>
          <h2 className='BPG3'>Baixo peso (grau III)</h2>
        </>
      )
    }
    else if(resultado >= 18.50 && resultado <= 24.99)
    {
      return (
        <>
          <h2>{resultado.toFixed(2)}</h2>
          <h2 className='Normal'>Peso Adequado</h2>
        </>
      )
    }
    else if(resultado >= 25 && resultado <= 29.99)
    {
      return (
        <>
          <h2>{resultado.toFixed(2)}</h2>
          <h2 className='Sobrepeso'>Sobrepeso</h2>
        </>
      )
    }
    else if(resultado >= 30 && resultado <= 34.99)
    {
      return (
        <>
          <h2>{resultado.toFixed(2)}</h2>
          <h2 className='OBG1'>Obesidade (grau I)</h2>
        </>
      )
    }
    else if(resultado >= 35 && resultado <= 39.99)
    {
      return (
        <>
          <h2>{resultado.toFixed(2)}</h2>
          <h2 className='OBG2'>Obesidade (grau II)</h2>
        </>
      )
    }
    else
    {
      return (
        <>
          <h2>{resultado.toFixed(2)}</h2>
          <h2 className='OBG3'>Obesidade (grau III)</h2>
        </>
      )
    }
  }
  return (
    <>
      <div className="pesquisa">
        <Pesquisa peso={evento => setPeso(parseFloat(evento.target.value))} altura={evento => setAltura(parseFloat(evento.target.value))} fazConta={fazConta} retornaResposta={retornoDaReposta()} />
      </div>
      <div className="estudar">
        <Estudar/>
      </div>
      <footer>
        <Rodape twitch={logo_twitch} youtube={logo_youtube} github={logo_github}/>
      </footer>
    </>
  )
}

export default App
