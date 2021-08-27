
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

let sobremesa = [
    {
        imgPrato:"css/img/petitgateu.jpg",
        titlePrato:"Petit Gateau",
        subtitle:"Petit gateau com acompanhmento de sorvete",
        price:"12.90",
    },
    {
        imgPrato:"css/img/bananasorvete.jpg",
        titlePrato:"Banana Flambada",
        subtitle:"Banana flambada com sorvete",
        price:"9.90",
    },
    {
        imgPrato:"css/img/romeuejulieta.jpg",
        titlePrato:"Romeu e Julieta",
        subtitle:"Queijo minas com goiabada",
        price:"5.90",
    }
    ]

    let bebidas = [
        {
            imgPrato:"css/img/coquinha_gelada 1.png",
            titlePrato:"Coca Cola",
            subtitle:"Lata 350ml",
            price:"4.50",
        },
        {
            imgPrato:"css/img/sucolata.jpg",
            titlePrato:"Suco",
            subtitle:"Lata 350ml",
            price:"35.90",
        },
        {
            imgPrato:"css/img/pepsi.jpg",
            titlePrato:"Pepsi",
            subtitle:"Lata 350ml",
            price:"2.90",
        }
        ]
        


export default function Refeicao(){
    return(
    <> 
        <div class="pratos">
            <p class="titulo-comida">Primeiro, seu prato</p>
            <div class="pratos-conteudo comida">          
            {pratos.map((prato) => (<Prato imgPrato={prato.imgPrato} titlePrato={prato.titlePrato} subtitle={prato.subtitle} price={prato.price}/>))}
            </div>
        </div>
        <div class="pratos">
            <p class="titulo-comida">Agora, sua bebida</p>
            <div class="pratos-conteudo bebida ">
            {bebidas.map((prato) => (<Prato imgPrato={prato.imgPrato} titlePrato={prato.titlePrato} subtitle={prato.subtitle} price={prato.price}/>))}
            </div>
        </div>
        <div class="pratos">
            <p class="titulo-comida">Por fim, sua sobremesa</p>
            <div class="pratos-conteudo sobremesa">
            {sobremesa.map((prato) => (<Prato imgPrato={prato.imgPrato} titlePrato={prato.titlePrato} subtitle={prato.subtitle} price={prato.price}/>))}
            </div>
        </div>
    </>









       
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