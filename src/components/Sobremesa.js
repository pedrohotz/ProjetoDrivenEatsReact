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
    


    export default function Sobremesas(){
        return(
           sobremesa.map((prato) => (<Prato imgPrato={prato.imgPrato} titlePrato={prato.titlePrato} subtitle={prato.subtitle} price={prato.price}/>))
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