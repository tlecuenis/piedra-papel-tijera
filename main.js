const playerMostrando = document.querySelector(".player__mostrando");
const pcMostrando = document.querySelector(".pc__mostrando");

//Selección Jugador
const playerSeleccion = document.querySelector(".player__seleccion");
const playerPiedra = document.querySelector(".player__piedra");
const playerPapel = document.querySelector(".player__papel");
const playerTijera = document.querySelector(".player__tijera");

//Selección PC
const pcSeleccion = document.querySelector(".pc__seleccion");
const pcPiedra = document.querySelector(".pc__piedra");
const pcPapel = document.querySelector(".pc__papel");
const pcTijera = document.querySelector(".pc__tijera");

let contador = document.querySelector(".contador");

var n = 0;
var ganaRonda = 0;
var pierdeRonda = 0;
var seleccionPc



playerPiedra.addEventListener('click', piedra);
playerPapel.addEventListener('click', papel);
playerTijera.addEventListener('click', tijera);

console.log("esto es lo que llega a n " + n);

function piedra(){
    playerMostrando.innerHTML = "✊";
    const player = 0;
    animacion(player);
    
}
function papel(){
    playerMostrando.innerHTML = "✋";
    const player = 1;
    animacion(player);


}
function tijera(){
    playerMostrando.innerHTML = "✌";
    const player = 2;
    animacion(player);

}

function animacion(player){
    pcPiedra.classList.add("border")
    setTimeout(() =>{ 
        pcPiedra.classList.remove("border")
        pcPapel.classList.add("border")
        setTimeout(() =>{
            pcPapel.classList.remove("border")
            pcTijera.classList.add("border")
            setTimeout(() =>{
                pcTijera.classList.remove("border")
                seleccionPc = aleatorio(0,2)
                pc(seleccionPc, player)
            }, 500)
        }, 500)
    }, 500)
    
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function pc(seleccionPc, player){
    if (seleccionPc === 0){
        pcMostrando.innerHTML = "✊";
        combate(player, seleccionPc);
    }
    if (seleccionPc === 1){
        pcMostrando.innerHTML = "✋";
        combate(player, seleccionPc);
    }
    if (seleccionPc === 2){
        pcMostrando.innerHTML = "✌";
        combate(player, seleccionPc);
    }
}

function combate(player, seleccionPc){
    if (player == 0 && seleccionPc == 1){
        let pierde = document.createElement('p');
        pierde.innerHTML = "🔴";
        contador.append(pierde);
        n++;
        pierdeRonda++;
        chequeo(n,ganaRonda,pierdeRonda);
    } else if (player == 2 && seleccionPc == 1){
        let gana = document.createElement('p');
        gana.innerHTML = "🟢";
        contador.append(gana);
        n++;
        ganaRonda++;
        chequeo(n,ganaRonda,pierdeRonda);
    } else if (player == 1 && seleccionPc == 2){
        let pierde = document.createElement('p');
        pierde.innerHTML = "🔴";
        contador.append(pierde);
        n++;
        pierdeRonda++;
        chequeo(n,ganaRonda,pierdeRonda);
    } else if (player == 0 && seleccionPc == 2){
        let gana = document.createElement('p');
        gana.innerHTML = "🟢";
        contador.append(gana);
        n++;
        ganaRonda++;
        chequeo(n,ganaRonda,pierdeRonda);
    } else if (player == 1 && seleccionPc == 0){
        let gana = document.createElement('p');
        gana.innerHTML = "🟢";
        contador.append(gana);
        n++;
        ganaRonda++;
        chequeo(n,ganaRonda,pierdeRonda);
    } else if (player == 2 && seleccionPc == 0){
        let pierde = document.createElement('p');
        pierde.innerHTML = "🔴";
        contador.append(pierde);
        n++;
        pierdeRonda++;
        chequeo(n,ganaRonda,pierdeRonda);
    } 
}

function chequeo(n, ganaRonda, pierdeRonda){
    console.log(n)
    if (n >= 3){
        playerPiedra.disabled = true;
        playerPiedra.setAttribute("id", "block"); 
        playerPapel.disabled = true;
        playerPapel.setAttribute("id", "block"); 
        playerTijera.disabled = true;
        playerTijera.setAttribute("id", "block"); 
        if(ganaRonda > pierdeRonda){
            let contador = document.querySelector(".contador");
            let final = document.createElement('p');
            final.innerHTML = "GANASTE";
            final.classList.add("ganador")
            contador.append(final);
        } else{
            let contador = document.querySelector(".contador");
            let final = document.createElement('p');
            final.innerHTML = "PERDISTE";
            final.classList.add("perdedor")
            contador.append(final);
        }

        let reiniciar = document.querySelector(".reiniciar");
        let botonReiniciar = document.createElement('button');
        botonReiniciar.innerHTML = "Reiniciar partida";
        botonReiniciar.classList.add("boton-reiniciar")
        reiniciar.append(botonReiniciar);
        botonReiniciar.addEventListener('click', reinicio);

        
        
    }

}

function reinicio(){
    

    playerPiedra.disabled = false;
    playerPiedra.removeAttribute("id", "block"); 
    playerPapel.disabled = false;
    playerPapel.removeAttribute("id", "block"); 
    playerTijera.disabled = false;
    playerTijera.removeAttribute("id", "block");

    //borra todos los hijos de contador
    contador.replaceChildren()
    
    let botonReiniciar = document.querySelector(".boton-reiniciar");
    botonReiniciar.remove()

    n = 0
    ganaRonda = 0
    pierdeRonda = 0
}




