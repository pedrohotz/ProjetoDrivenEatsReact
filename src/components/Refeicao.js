
import React from "react";
import Product from "./Product";


export default function Refeicao({title,products,changeQuantity}){
    return(
    <> 
        <div class="pratos">
            <p class="titulo-comida">{title}</p>
            <div class="pratos-conteudo comida">          
                {products.map((product, index) => <Product  product={product} key={index} changeQuantity={changeQuantity} /> )}
            </div>
        </div>
    </> 
    );
}

