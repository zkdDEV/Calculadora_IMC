import { useState } from 'react'
import './app.css'

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
        <header>
          <h1>Calculadora de IMC</h1>
        </header>
        <form>
          <div>
            <label htmlFor="peso">Seu Peso(KG)</label>
            <input onBlur={evento => setPeso(parseFloat(evento.target.value))} type="number" id="peso"/>
          </div>
          <div>
            <label htmlFor="altura">Sua Altura(M)</label>
            <input onBlur={evento => setAltura(parseFloat(evento.target.value))} type="number" id="altura"/>
          </div>
          <div>
            <button onClick={() => fazConta()} type='button'>Calcular</button>
          </div>
        </form>
        <div className="resposta">
          {retornoDaReposta()}
        </div>
      </div>
      <div className="estudar">
        <table>
          <thead>
            <tr>
              <th>
                IMC
              </th>
              <th>
                Categoria
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='BPG1'>
                Menos de 16
              </td>
              <td className='BPG1'>
                Baixo peso (grau I)
              </td>
            </tr>
            <tr>
              <td className='BPG2'>
                Entre 16 e 16,99
              </td>
              <td className='BPG2'>
                Baixo peso (grau II)
              </td>
            </tr>
            <tr>
              <td className='BPG3'>
                Entre 17 e 18,49
              </td>
              <td className='BPG3'>
                Baixo peso (grau III)
              </td>
            </tr>
            <tr>
              <td className='Normal'>
                Entre 18,50 e 24,99
              </td>
              <td className='Normal'>
                Peso adequado
              </td>
            </tr>
            <tr>
              <td className='Sobrepeso'>
                Entre 25 e 29,99
              </td>
              <td className='Sobrepeso'>
                Sobrepeso
              </td>
            </tr>
            <tr>
              <td className='OBG1'>
                Entre 30 e 34,99
              </td>
              <td className='OBG1'>
                Obesidade (grau I)
              </td>
            </tr>
            <tr>
              <td className='OBG2'>
                Entre 35 e 39,99
              </td>
              <td className='OBG2'>
                Obesidade (grau I)
              </td>
            </tr>
            <tr>
              <td className='OBG3'>
                A partir de 40
              </td>
              <td className='OBG3'>
                Obesidade (grau I)
              </td>
            </tr>
          </tbody>
        </table>
        <div className='explicacao'>
          <h3>
            Para que serve a tabela do IMC?
          </h3>
          <p>
            A tabela do Índice de Massa Corporal (IMC)
            é uma ferramenta utilizada para avaliar se
            uma pessoa está dentro de um intervalo de peso
            considerado saudável para sua altura. Ela ajuda a
            identificar se um indivíduo está abaixo do peso, dentro
            do peso normal, com sobrepeso ou obeso. O cálculo do IMC
            é feito dividindo o peso (em quilogramas) pela altura ao
            quadrado (em metros). Com base nesse valor, a pessoa é
            classificada conforme a tabela ao lado.
          </p>
        </div>
      </div>
      <footer>
        <div className="copyright">
          <p>
            &copy; Copyright IMC - Calculadora 2023 - Todos os direitos reservados
          </p>
        </div>
        <div className='links'>
          <ul>
            <li>
              <a href="https://www.twitch.tv/zkdpro"><img src="./img/twitch.svg" alt="Twitch" /></a>
            </li>
            <li>
              <a href="https://www.youtube.com/@zkdpro"><img src="./img/youtube.svg" alt="Youtube" /></a>
            </li>
            <li>
              <a href="https://github.com/zkdDEV"><img src="./img/github.svg" alt="GitHub" /></a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
