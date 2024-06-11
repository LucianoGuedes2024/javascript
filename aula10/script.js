// getAttribute - OBTER O Valor do atributo (valor da linha)


//seAttribute - definir ou modificar o valor


function changeImage() {

    const img = document. getElementById('myImage'); // Aqui conseguimos armazenar o conteúdo da imagem


    const currentsrc = img. getAttribute("src"); // Aqui pegamos o atributo src da imagem para trabalhar a troca da mesma.


    if (currentsrc === 'imagens/img2.jpg' ) {
 // Se a origem atual da imagem for igual imagem sam execute algo.

img.setAttribute("src", "imagens/img3.JPG") // usando o seAttribute vamos modificar o valor dela , através do src e especificando a outra img.

img.setAttribute ("alt" , "alteral texto da imagem")
 
    } else { // caso contrario faça o processo inverso
        img.setAttribute("src", "imagens/img2.jpg");

        img.setAttribute("alt", "alteral texto da imagem");

    };

}


function changetype() {
const input = document.getElementsByTagName("input")[0];// indice 0, primeiro elemento da lista de input . que são vários.
const currenttype = input.getAttribute("type");


switch (currenttype) {
 case 'text' :
    input.setAttribute('type','number');
    break;

    case "number" :
        input. setAttribute('type','radio');
        break;

        case "radio":
            input.setAttribute("type ", "ranger");
            break;

        default:
       input.setAttribute("type", "text");         
}


}