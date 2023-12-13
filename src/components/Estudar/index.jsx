import './Estudar.css'

const Estudar = () => {
    return (
        <>
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
                            Obesidade (grau II)
                        </td>
                    </tr>
                    <tr>
                        <td className='OBG3'>
                            A partir de 40
                        </td>
                        <td className='OBG3'>
                            Obesidade (grau III)
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
        </>
    )
}

export default Estudar