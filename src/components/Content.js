
import Refeicao from "./Refeicao";
import React from "react";
import Confirmation from "./Confirmation";
export default function Content(){

  const [Btn, setBtn] = React.useState(false);
  const [arrayPedidos,setArray] = React.useState([]);
function validarBotao(array){
    const opcoes = [];
    array.map((opcao) => (opcoes.push(opcao.type)))
    if (opcoes.includes("refeicao") &&  opcoes.includes("bebida") && opcoes.includes("sobremesa")){
        setBtn(true);
        console.log("teste")
    }
}
    return(
<div class="conteudo">
        <Refeicao  validarBotao={validarBotao} arrayPedidos={arrayPedidos} setArray={setArray}/>
        <Confirmation liberar={Btn} pedidos={arrayPedidos} />
</div>
    );
}