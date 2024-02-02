export function ItemCardapio(props){
    return <div className="container-item-cardapio">
        <div className="informacoes-item-cardapio">
            <h2>{props.nome}</h2>
            <p>{props.preco}</p>
            <p>{props.descricao}</p>
        </div>
        <img src={props.imagem} alt="" className="imagem-item-cardapio" />
    </div>
}