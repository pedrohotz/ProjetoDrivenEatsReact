

export default function Product({product,changeQuantity}){
    
    function selectedProduct() {
        if (product.quantity === 0) {
          changeQuantity(product, 1);
        }
      }
     
      function incrementQuantity(e) {
        e.stopPropagation();
        changeQuantity(product, product.quantity + 1);
      }
    
      function decrementQuantity(e) {
          e.stopPropagation();
        changeQuantity(product, product.quantity - 1);
      }

    return (
        <div className={product.quantity > 0 ? 'prato-individual comida selecionado' : `prato-individual comida esconder `}  onClick={selectedProduct}>
            <img src={product.imageUrl} alt="imgProduct"></img>
            <p className="titulo-prato">{product.name}</p>
            <span className="legenda-prato">{product.description}</span>
            <div className="baixo-prato">
                <div className="valores">
                    <p className="real">R$</p>
                    <p className="preco">{product.price.toFixed(2)}</p>
                </div>
                <div className="icone">
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            </div>
            {product.quantity > 0 ? <div className={`Botoes`}>
                <button onClick={e => incrementQuantity(e)} className='plusButton'>+</button>
                <button onClick={e => decrementQuantity(e)} className='minusButton'>-</button>
                <span style={{fontFamily:'Roboto,sans serif'}}>{product.quantity}</span>
            </div> : ''}
        </div>    
    )
}
    
