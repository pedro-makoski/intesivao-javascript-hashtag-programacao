export function Navegacao({alternartipodecomida}) {
    return <div className="navegacao">
        <input type="radio" id="0-opcao" name="opcao" onClick={() => alternartipodecomida(0)} defaultChecked/>
        <label htmlFor="0-opcao" className="botao-navegacao">Pratos principais</label>
        <input type="radio" id="1-opcao" name="opcao" onClick={() => alternartipodecomida(1)} />
        <label htmlFor="1-opcao" className="botao-navegacao" name="opcao">sobremesas</label>
        <input type="radio" id="2-opcao" name="opcao"/>
        <label htmlFor="2-opcao" className="botao-navegacao" onClick={() => alternartipodecomida(2)}>bebidas</label>
    </div>
}