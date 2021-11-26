
import Refeicao from "./Refeicao";
import React from "react";
import Confirmation from "./Confirmation";
import productsList from "../ProductsList/productslist";
export default function Content(){
const [categories, setCategories] = React.useState(productsList);


function changeQuantity (product, newQuantity) {
  
    product.quantity = newQuantity;
    setCategories([...categories])
}
    return(
        <div class="conteudo">
                {categories.map((category, index) => <Refeicao key={index} title={category.title} products={category.products} changeQuantity={changeQuantity} />)}
                <Confirmation  categories={categories}/>
        </div>
    );
}