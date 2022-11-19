import './App.css'
import rosto from './assets/rosto2.jpg'
import linkedin from './assets/mdi_linkedin.png'
import github from './assets/mdi_github.png'
import cerebro from './assets/cerebro.jpg'
import ignite1 from './assets/ignite1.png'
import ignite2 from './assets/ignite2.png'
import smile1 from './assets/ss1.png'
import smile2 from './assets/ss2.png'
import { useRef } from 'react';


function App() {

  const inicio = useRef(null);
  const sobre = useRef(null);
  const projetos = useRef(null);
    
  //const projetos = refProjetos(null);

  const scrollToSection = (elementRef) => {
      window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: 'smooth',
      })
      console.log(inicio)
  }

  return (
    <div className='body'>
        <div ref={inicio} className="body-cabeçalho">
            <header>
                <nav>
                    <ul className='nav-ul'>
                        <a className='ul-link' href="#"><li onClick={() => scrollToSection(inicio)} >INICIO</li></a>
                        <a className='ul-link' href="#"><li onClick={() => scrollToSection(sobre)} >SOBRE</li></a>
                        <a className='ul-link' href="#"><li onClick={() => scrollToSection(projetos)} >PROJETOS</li></a>
                    </ul>
                </nav>
            </header>
            <div className="front-end-text">
                <p>Front-end</p>
            </div>
        </div>
      
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
            <div  ref={sobre} className="box-img">
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

        <div ref={projetos} className='body-projetos'>
            <p className='texto-inicio'>ALGUNS</p>
            <p className='texto-inicio'>PROJETOS</p>
            <div className="ignite">
                <a href="https://github.com/ThalesIanMendes/Ignite-Lab" target="_blank"><p className='ignite-title'>IGNITE LAB</p></a>
                <img className='img1' src={ignite1} />
                <img className='img2' src={ignite2} />
                <p className='ignite-text'> Aplicação web com a Rocktseat: Esta aplicação é para postar conteúdos de vídeos e consiste em duas páginas, a primeira apenas para captação de clientes e a segunda
                    exibe o conteúdo e permanece como uma sala de bate-papo e informações para os inscritos.
                    Tecnologias utilizadas: GraphQl e Graphcms, React e Typescript.
                </p>
            </div>

            <div className="smiles">
            <a href="https://github.com/ThalesIanMendes/SmileSociety-social-network-" target="_blank"><p className='smiles-title'>SMILE SOCIETY</p></a>
                <img className='img3' src={smile1} />
                <img className='img4' src={smile2} />
                <p className='smiles-text'>Uma mini rede social: Contando com backend e frontend feitos por mim, eu utilizei 
                    as tecnologias: Node-js, React-Js, Bcrypt(aplicar hash), Mysql e outras... Este projeto conta com cadastro de 
                    usuario no banco de dados, login e pagina com rota restrita a pessoas autenticadas pelo login e postagens no feed 
                    da pagina principal da rede.
                </p>
            </div>
        </div>
    </div>
  )
}

export default App
