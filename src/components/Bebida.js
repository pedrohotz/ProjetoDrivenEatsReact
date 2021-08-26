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
    
    
    export default function Bebidas(){
        return(
           bebidas.map((prato) => (<Prato imgPrato={prato.imgPrato} titlePrato={prato.titlePrato} subtitle={prato.subtitle} price={prato.price}/>))
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