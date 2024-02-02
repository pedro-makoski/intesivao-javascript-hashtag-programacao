import './App.css'
import MonacoImg from './assets/hashtaurante.webp'
import { Navegacao } from './Navegacao'
import {pratosPrincipais, sobremesas, bebidas} from './cardapio'
import { ItemCardapio } from './ItemCardapio'
import { useState } from 'react'

function App() {
  const Listas_de_tipo_de_comida = [pratosPrincipais, sobremesas, bebidas]
  const [tipodecomidaatual, setTipodecomidaatual] = useState(0)
  return (
    <>
      <h1>Hashtaurante</h1>
      <img src={MonacoImg} alt="" className='capa'/>
      <Navegacao alternartipodecomida={setTipodecomidaatual}></Navegacao>
      <div className="menu">
        {Listas_de_tipo_de_comida[tipodecomidaatual].map((item) => {return <ItemCardapio nome={item.nome} imagem={item.imagem} descricao={item.descricao} preco={item.preco} />})}
      </div>
    </>
  )
}

export default App
