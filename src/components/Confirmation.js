

export default function Confirmation(props){
    if (props.liberar === true){
        return(
        <div class="selecionar">
            <button class="botao-habilitado habilitado" onclick="confirmarPedido();">Fechar Pedido</button>
        </div> 
        )
    }
    else{
        return(
            <div class="selecionar">
            <button class="selet">Selecione os 3 itens para fechar o pedido</button>
        </div>
        );
    }
}