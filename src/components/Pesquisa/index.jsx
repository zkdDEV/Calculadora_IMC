import './Pesquisa.css'

function Pesquisa (props) {
    return (
        <>
            <header>
                <h1>Calculadora de IMC</h1>
            </header>
            <form>
                <div>
                    <label htmlFor="peso">Seu Peso(KG)</label>
                    <input onBlur={props.peso} type="number" id="peso" />
                </div>
                <div>
                    <label htmlFor="altura">Sua Altura(M)</label>
                    <input onBlur={props.altura} type="number" id="altura" />
                </div>
                <div>
                    <button onClick={props.fazConta} type='button'>Calcular</button>
                </div>
            </form>
            <div className="resposta">
                <p>{props.retornaResposta}</p>
            </div>
        </>
    )
}

export default Pesquisa