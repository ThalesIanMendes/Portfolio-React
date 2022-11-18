import './sobre.css';
import rosto from '../../assets/rosto.jpg'
import linkedin from '../../assets/mdi_linkedin.png'
import github from '../../assets/mdi_github.png'

export const Sobre = () => {
    
    return (
        <div className='body-sobre'>
            <div className="box-text">
                <p>Olá, me chamo Thales Ian e sou apaixonado por tudo que envolva a área de TI, no começo da minha juventude eu comecei a trabalhar em uma mecânica automotiva para poder comprar alguns aparelhos como celular e notebook e
                    trabalhei nesta empresa por 12 anos onde tive um bom acesso a comunicações e montagem de motores complexos. No meu tempo livre eu estudava sobre software e hardware, mas acabei mesmo sendo capturado pela ideia fascinante de criar meus próprios softwares.
                </p>
                <p>
                    Meu caminho pelos códigos finalmente teve início aos 14, onde sem muito conhecimento eu decidi aprender linguagem C e cheguei a desenvolver uma simples calculadora, quando mais velho me interessei por Python onde aprendi a criar alguns games e desenvolver bancos de dados com sql. 
                    Tudo isso me ajudou a desenvolver um pouco mais sobre a lógica de programação, e hoje me ajuda muito.
                </p>
            </div>
            <div className="box-img">
                <img src={rosto}  />
                <div className="box-nome">
                    <p>Thales Ian Carlesso</p>
                </div>
                <div className="box-logo">
                    <a href="https://www.linkedin.com/in/thales-ian-carlesso-975014214/" target="_blank"><img className='logo' src={linkedin}  /></a>
                    <a href="https://github.com/ThalesIanMendes" target="_blank"><img className='logo' src={github}  /></a>
                </div>
            </div> 
        </div>
    )
}