import './projetos.css';
import ignite1 from '../../assets/ignite1.png'
import ignite2 from '../../assets/ignite2.png'
import smile1 from '../../assets/ss1.png'
import smile2 from '../../assets/ss2.png'

export const Projetos = () => {
    

    return (
        <div className='body-projetos'>
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
    )
}