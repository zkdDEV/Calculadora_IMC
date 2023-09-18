import './Rodape.css'

const Rodape = (props) => {
    return (
        <>
            <div className="copyright">
                <p>
                    &copy; Copyright IMC - Calculadora 2023 - Todos os direitos reservados
                </p>
            </div>
            <div className='links'>
                <ul>
                    <li>
                        <a target='_blank' href="https://www.twitch.tv/zkdpro"><img src={props.twitch} alt="Twitch" /></a>
                    </li>
                    <li>
                        <a target='_blank' href="https://www.youtube.com/@zkdpro"><img src={props.youtube} alt="Youtube" /></a>
                    </li>
                    <li>
                        <a target='_blank' href="https://github.com/zkdDEV"><img src={props.github} alt="GitHub" /></a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Rodape