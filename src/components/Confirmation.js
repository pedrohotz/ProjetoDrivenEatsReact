

export default function Confirmation(props){
    function enviarPedido(pedidos){      
        let refeicao;
        let iRef;
        let bebida;
        let iBeb;
        let sobremesa;
        let iSob;
        let nome = prompt("Qual seu nome?");
        let endereço = prompt("Digite o endereço");
       for(let i=0;i<pedidos.length;i++){
           if(pedidos[i].type === "refeicao"){
               refeicao = pedidos[i].titlePrato;
               iRef = i;
           }
           else if(pedidos[i].type === "bebida"){
             bebida = pedidos[i].titlePrato;
             iBeb = i;
           }
           else if(pedidos[i].type === "sobremesa"){
            sobremesa = pedidos[i].titlePrato;
            iSob = i;
          }
       }
        let total = 0;
        for(let i=0; i < pedidos.length;i++){
            total = total + (Number(pedidos[i].price) * (pedidos[i].qtd + 1));
        }

        const mensagemPardrão = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n
        - Prato: ${refeicao} (${pedidos[iRef].qtd + 1}x)\n
        - Bebida: ${bebida}\n
        - Sobremesa: ${sobremesa}\n
        Total: R$ ${total}\n
        Nome: ${nome}\n
        Endereço: ${endereço}`);
        window.location.href = `https://wa.me/5532984878558?text=${mensagemPardrão}`;
    
    }

    if (props.liberar === true){
        return(
        <div class="selecionar">
            <button class="botao-habilitado habilitado" onClick={()=> enviarPedido(props.pedidos)}>Fechar Pedido</button>
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

