
import Refeicao from "./Refeicao";

export default function Content(){
    return(
<div class="conteudo">
        <Refeicao />
        <div class="selecionar">
            <button class="selet">Selecione os 3 itens para fechar o pedido</button>
            <button class="botao-habilitado habilitado desabilitado" onclick="confirmarPedido();">Fechar Pedido</button>
        </div>
    </div>
    );
}