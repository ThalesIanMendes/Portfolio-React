import './App.css'
import { Cabeçalho } from './components/Cabeçalho'
import { Sobre } from './components/Sobre'
import { Conhecimentos } from './components/Conhecimentos'
import { Projetos } from './components/Projetos'


function App() {

  return (
    <div className='body'>
      <Cabeçalho />
      <Sobre />
      <Conhecimentos />
      <Projetos />
    </div>
  )
}

export default App
