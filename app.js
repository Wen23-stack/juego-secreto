let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        console.log(intentos);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ===1)? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // el usuario no aciierta
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCampoNumero();
    }

    return;
}

function limpiarCampoNumero(){
    document.querySelector("#valorUsuario").value = "";
    return;
}

    function generarNumeroSecreto() {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);

        // si ya se sortearon todos los números
        if(listaNumerosSorteados.length == numeroMaximo){
            asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
        } else {
            // si el número generado está en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
            } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }

    
    }

    function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
    return;
}

function reiniciarJuego() {
    //limpiar campo
    limpiarCampoNumero();

    //indicar mensaje de intervalos del número
    condicionesIniciales();

    //desabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

