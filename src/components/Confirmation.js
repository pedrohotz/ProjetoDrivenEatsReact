import React from "react";
import ReactModal from "react-modal";
export default function Confirmation({categories}){
    const enableButton = checkIfCategorySelected(categories);
    const [isOpen,setIsOpen] = React.useState(false);
    ReactModal.setAppElement(document.getElementById('root'))
    let selectedProducts = checkoutProducts(categories);
    let total = 0 ;
    function FecharModal(){
        setIsOpen(false);
    }
    function showCart(){
        setIsOpen(true);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            background: '#FFFFFF',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50px',
            width: '300px',
            height: '450px',
            display:'flex',
            justifyContent: 'center',
            boxShadow:'0px 0px 10px 1px rgba(0, 0, 0, 0.15)'
        },
        overlay: {zIndex: 6},
      };


    return( 
        <>
        <ReactModal
                isOpen={isOpen}
                onRequestClose={FecharModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                    <div className="modal">
                        <h1 className="title-modal">Revise seu pedido</h1>
                        {selectedProducts.map(product => {
                           total += product.quantity * product.price;
                        }) 
                        }
                        {selectedProducts.map((product) => {
                            return ( <div className="modal-products">
                                <h2 className="product-text">{product.name}</h2>
                                <h2 className="product-text">{product.quantity}x</h2>
                                <h2 className="product-text">R$ {(product.price * product.quantity).toFixed(2)}</h2>
                            </div>)
                        })}
                      
                        <h1 className="total">Total: R$ {total.toFixed(2)}</h1>
                        <button className="checkoutOrder" onClick={() => {sendToWpp(selectedProducts,enableButton)}}>Finalizar Pedido</button>
                        <button className="close-modal" onClick={FecharModal}>Cancelar</button>
                    </div>
        </ReactModal>
          {enableButton ?   
        <div className="selecionar">
                <button className="botao-habilitado habilitado" onClick={showCart}>Fechar Pedido</button>
        </div> : 
         <div className="selecionar">
            <button className="selet">Selecione os 3 itens para fechar o pedido</button>
        </div>} 
        </> 
         )
}

function checkIfCategorySelected(categories){
    const selectedCategories = categories.filter(category => {
        return category.products.find(product => product.quantity > 0)
    })
    return selectedCategories.length === categories.length;   
}


function checkoutProducts(categories){
  
    let selectedProducts = [];
     categories.forEach((category) => {
        category.products.filter( (product) => 
            product.quantity > 0
        ).forEach(elem => selectedProducts.push(elem))
    })
    return selectedProducts;
}


function sendToWpp(selectedProducts,enableButton){
    if(!enableButton){
        return;
    }

    let message = "Olá gostaria de fazer o pedido:\n";
    let total = 0;
    selectedProducts.map(product => {
        total += product.quantity * product.price;
            })
    selectedProducts.map((product) => { 
        message += `- ${product.name}\n ${product.quantity > 1 ? `(${product.quantity}x)` : ''}\n`;
    })
    message += `Total: R$ ${total.toFixed(2)}`;
    let numberToSend = 5532984878558;
    message = encodeURIComponent(message);
    window.open(`https://wa.me/${numberToSend}?text=${message}`, '_blank');
}