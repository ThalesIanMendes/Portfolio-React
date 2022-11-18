import './cabeçalho.css';


export const Cabeçalho = () => {

    return (
        <>
            <header>
                <nav>
                    <ul className='nav-ul'>
                        <a className='ul-link' href="#"><li>INICIO</li></a>
                        <a className='ul-link' href="#"><li>SOBRE</li></a>
                        <a className='ul-link' href="#"><li>PROJETOS</li></a>
                    </ul>
                </nav>
            </header>
            <div className="front-end-text">
                <p>Front-end</p>
            </div>
        </>
    )
}