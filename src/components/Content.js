
import Refeicao from "./Refeicao";
import Bebidas from "./Bebida";
import Sobremesas from "./Sobremesa";
export default function Content(){
    return(
<div class="conteudo">
        <div class="pratos">
            <p class="titulo-comida">Primeiro, seu prato</p>
            <div class="pratos-conteudo comida">          
            <Refeicao />
            </div>
        </div>
        <div class="pratos">
            <p class="titulo-comida">Agora, sua bebida</p>
            <div class="pratos-conteudo bebida ">
            <Bebidas />
            </div>
        </div>
        <div class="pratos">
            <p class="titulo-comida">Por fim, sua sobremesa</p>
            <div class="pratos-conteudo sobremesa">
            <Sobremesas />
            </div>
        </div>
        <div class="selecionar">
            <button class="selet">Selecione os 3 itens para fechar o pedido</button>
            <button class="botao-habilitado habilitado desabilitado" onclick="confirmarPedido();">Fechar Pedido</button>
        </div>
    </div>
    );
}