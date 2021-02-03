let valores = [1,2,3,4,5,6,7,8,9,10,'J','Q','K'];
let pintas = [1, 2, 3, 4];

function nuevaCarta(){
    let numeros = Math.floor(Math.random()*valores.length);
    document.getElementById("numero").innerHTML = numeros; 

    let uno = Math.floor(Math.random()*pintas.length);
    console.log(uno); /*Verificar la pinta y opción*/
    switch(uno){
        case 0:
            var element = document.getElementById("pintas_sup").innerHTML = '<i class="fas fa-heart" style="color: red;"></i>';
            var element = document.getElementById("pintas_inf").innerHTML = '<i class="fas fa-heart" style="color: red;"></i>';
            console.log("Opcion 0, corazon rojo");/*Verificar la pinta y opción*/
            break;
        case 1:
            var element = document.getElementById("pintas_sup").innerHTML = '<i class="fas fa-gem" style="color: red;"></i>';
            var element = document.getElementById("pintas_inf").innerHTML = '<i class="fas fa-gem" style="color: red;"></i>';
            console.log("Opcion 1, diamante rojo");/*Verificar la pinta y opción*/
            break;
        case 2:
            var element = document.getElementById("pintas_sup").innerHTML = '<i class="fas fa-crown" style="color:black"></i>';
            var element = document.getElementById("pintas_inf").innerHTML = '<i class="fas fa-crown" style="color:black"></i>';
            console.log("Opcion 2, corona negra");/*Verificar la pinta y opción*/
            break;
        case 3:
            var element = document.getElementById("pintas_sup").innerHTML = '<i class="fas fa-crown" style="color:black"></i>';
            var element = document.getElementById("pintas_inf").innerHTML = '<i class="fas fa-crown" style="color:black"></i>';
            console.log("Opcion 3, corazon rojo");/*Verificar la pinta y opción*/
            break;
        default:
            console.log("Esta pinta no existe");
    }

}

window.onload = function(){
    nuevaCarta()
}
document.querySelector(".btn").addEventListener("click", nuevaCarta)