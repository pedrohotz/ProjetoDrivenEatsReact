
export default function Content(){
    return(
<div class="conteudo">
        <div class="pratos">
            <p class="titulo-comida">Primeiro, seu prato</p>
            <div class="pratos-conteudo comida">
                <div class="prato-individual comida esconder" onclick="selecionar(this);" >
                    <img src="css/img/filepiamontese.jpg"></img>
                    <p class="titulo-prato">Filé Mignon a piamontese</p>
                    <span class="legenda-prato">File mignon ao molho madeira acompanhado de arroz a piamontese</span>
                    <div class="baixo-prato">
                        <div class="valores">
                            <p class="real">R$</p>
                            <p class="preco">35.90</p>
                        </div>
                        <div class="icone">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                    </div>     
                </div>
                <div class="prato-individual comida esconder"  onclick="selecionar(this);">
                    <img src="css/img/salmaomaracuja.jpg"></img>
                    <p class="titulo-prato">Salmão ao molho de maracujá</p>
                    <span class="legenda-prato">Salmão grelhado ao molho de maracujá</span>
                    <div class="baixo-prato">
                        <div class="valores">
                            <p class="real">R$</p>
                            <p class="preco">26.50</p>
                        </div>
                        <div class="icone">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                    </div>
                </div>
                <div class="prato-individual comida esconder"  onclick="selecionar(this);">
                    <img src="css/img/conchiglione-cogumelos.jpg"></img>
                    <p class="titulo-prato">Conchiglione de Cogumelos</p>
                    <span class="legenda-prato">Conchiglione recheado de cogumelos shitake</span>
                    <div class="baixo-prato">
                        <div class="valores">
                            <p class="real">R$</p>
                            <p class="preco">22.90</p>
                        </div>
                        <div class="icone">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pratos">
            <p class="titulo-comida">Agora, sua bebida</p>
            <div class="pratos-conteudo bebida ">
                <div class="prato-individual bebida esconder"  onclick="selecionarBebida(this);">
                    <img src="css/img/coquinha_gelada 1.png"></img>
                    <p class="titulo-prato">Coca Cola</p>
                    <span class="legenda-prato">Lata 350ml</span>
                    <div class="baixo-prato">
                        <div class="valores">
                            <p class="real">R$</p>
                            <p class="preco">4.50</p>
                        </div>
                        <div class="icone">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                    </div>

                </div>
                <div class="prato-individual bebida esconder" onclick="selecionarBebida(this);">
                    <img src="css/img/sucolata.jpg"></img>
                    <p class="titulo-prato">Suco</p>
                    <span class="legenda-prato">Lata 350ml</span>
                    <div class="baixo-prato">
                        <div class="valores">
                            <p class="real">R$</p>
                            <p class="preco">3.90</p>
                        </div>
                        <div class="icone">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                    </div>
                </div>
                <div class="prato-individual bebida esconder" onclick="selecionarBebida(this);">
                    <img src="css/img/pepsi.jpg"></img>
                    <p class="titulo-prato">Pepsi</p>
                    <span class="legenda-prato">Lata 350ml</span>
                    <div class="baixo-prato">
                        <div class="valores">
                            <p class="real">R$</p>
                            <p class="preco">2.90</p>
                        </div>
                        <div class="icone">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pratos">
            <p class="titulo-comida">Por fim, sua sobremesa</p>
            <div class="pratos-conteudo sobremesa">
                <div class="prato-individual sobremesa esconder" onclick="selecionarSobremesa(this);">
                    <img src="css/img/petitgateu.jpg"></img>
                    <p class="titulo-prato">Petit Gateu</p>
                    <span class="legenda-prato">Petit gateu com acompanhmento de sorvete</span>
                    <div class="baixo-prato">
                        <div class="valores">
                            <p class="real">R$</p>
                            <p class="preco">12.90</p>
                        </div>
                        <div class="icone">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                    </div>

                </div>
                <div class="prato-individual sobremesa esconder" onclick="selecionarSobremesa(this);">
                    <img src="css/img/bananasorvete.jpg"></img>
                    <p class="titulo-prato">Banana Flambada</p>
                    <span class="legenda-prato">Banana flambada com sorvete</span>
                    <div class="baixo-prato">
                        <div class="valores">
                            <p class="real">R$</p>
                            <p class="preco">9.90</p>
                        </div>
                        <div class="icone">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                    </div>

                </div>
                <div class="prato-individual sobremesa esconder" onclick="selecionarSobremesa(this);">
                    <img src="css/img/romeuejulieta.jpg" ></img>
                    <p class="titulo-prato">Romeu e Julieta</p>
                    <span class="legenda-prato">Queijo minas com goiabada</span>
                    <div class="baixo-prato">
                        <div class="valores">
                            <p class="real">R$</p>
                            <p class="preco">5.90</p>
                        </div>
                        <div class="icone">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="selecionar">
            <button class="selet">Selecione os 3 itens para fechar o pedido</button>
            <button class="botao-habilitado habilitado desabilitado" onclick="confirmarPedido();">Fechar Pedido</button>
        </div>
    </div>
    );
}