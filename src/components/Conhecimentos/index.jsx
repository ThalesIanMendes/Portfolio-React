import './conhecimentos.css';
import cerebro from '../../assets/cerebro.jpg'

export const Conhecimentos = () => {
    
    return (
        <div className='body-conhecimentos'>
            <div className="box-text-conhecimentos">
                <p>ALGUNS</p>
                <p>CONHECIMENTOS</p>
            </div>
            <div className="texto-img">
                <div className="img-div">
                    <img src={cerebro} />
                    <p className='p'>...</p>
                </div>
                <p>Javascript vanilla e sua biblioteca React-Js, Css e o seu framework Tailwindcss, Html, Node-js na contrução de Api's e utilizo algumas ferramentas como Git e Github no versionamento. Inglês iniciante.
                </p>
                <p>
                    Pelo fato de amar oque faço, procuro meu primeiro emprego na area. Eu desenvolvi 
                    alguns projetos com meus breves conhecimentos, são eles:
                </p>
            </div>
        </div>
    )
}