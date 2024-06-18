const hamburgerButton = document.querySelector("#hamburgerButton");// estamos recuperando o botão de hamburguer (fora da div)

const closeButton = document.querySelector("#closeButton");
// estamos recuperando o botão de fechamnento.

const mobileMenu = document.querySelector("#mobileMenu");
// estamos recuperando a caixa preta(quando aberta menu hamburguer)


//aqui adicionamos um evento de escutar o click do mouse sobre oícone de hamburguer.
hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");

    //criamos uma função que a ouvir o click do mouse, ele adicione uma class,que está fazendo nossa caixa (div) aparecer, ou seja ,ficar visivel
});



closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
});