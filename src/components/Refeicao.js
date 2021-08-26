
let pratos = [
{
    imgPrato:"css/img/salmaomaracuja.jpg",
    titlePrato:"Salmão ao molho de maracujá",
    subtitle:"Salmão grelhado ao molho de maracujá",
    price:"26.50",
},
{
    imgPrato:"css/img/filepiamontese.jpg",
    titlePrato:"Filé Mignon a piamontese",
    subtitle:"File mignon ao molho madeira acompanhado de arroz a piamontese",
    price:"35.90",
},
{
    imgPrato:"css/img/conchiglione-cogumelos.jpg",
    titlePrato:"Conchiglione de Cogumelos",
    subtitle:"Conchiglione recheado de cogumelos shitake",
    price:"22.90",
}
]




export default function Refeicao(){
    return(
        pratos.map((prato) => (<Prato imgPrato={prato.imgPrato} titlePrato={prato.titlePrato} subtitle={prato.subtitle} price={prato.price}/>))
    );
}


function Prato(props){
    return (
    <div class="prato-individual comida esconder">
                <img src={props.imgPrato}></img>
                <p class="titulo-prato">{props.titlePrato}</p>
                <span class="legenda-prato">{props.subtitle}</span>
                <div class="baixo-prato">
                    <div class="valores">
                        <p class="real">R$</p>
                        <p class="preco">{props.price}</p>
                    </div>
                    <div class="icone">
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                </div>
    </div>     
    );
}