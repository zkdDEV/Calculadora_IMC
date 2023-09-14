import { useState } from 'react'
import './app.css'

function App() {

  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

  return (
    <>
      <div className="pesquisa">
        <header>
          <h1>Calculadora de IMC</h1>
        </header>
        <form>
          <div>
            <label htmlFor="peso">Seu Peso(KG)</label>
            <input type="number" id="peso"/>
          </div>
          <div>
            <button type='button'>Calcular</button>
          </div>
          <div>
            <label htmlFor="altura">Sua Altura(CM)</label>
            <input type="number" id="altura"/>
          </div>
        </form>
        <div className="resposta">
          <h2>Peso adequado</h2>
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
              <td>
                Menos de 16
              </td>
              <td>
                Baixo peso (grau I)
              </td>
            </tr>
            <tr>
              <td>
                Entre 16 e 16,99
              </td>
              <td>
                Baixo peso (grau II)
              </td>
            </tr>
            <tr>
              <td>
                Entre 17 e 18,49
              </td>
              <td>
                Baixo peso (grau III)
              </td>
            </tr>
            <tr>
              <td>
                Entre 18,50 e 24,99
              </td>
              <td>
                Peso adequado
              </td>
            </tr>
            <tr>
              <td>
                Entre 25 e 29,99
              </td>
              <td>
                Sobrepeso
              </td>
            </tr>
            <tr>
              <td>
                Entre 30 e 34,99
              </td>
              <td>
                Obesidade (grau I)
              </td>
            </tr>
            <tr>
              <td>
                Entre 35 e 39,99
              </td>
              <td>
                Obesidade (grau I)
              </td>
            </tr>
            <tr>
              <td>
                A partir de 40
              </td>
              <td>
                Obesidade (grau I)
              </td>
            </tr>
          </tbody>
        </table>
        <div>
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
            quadrado (em metros).
          </p>
        </div>
      </div>
    </>
  )
}

export default App
