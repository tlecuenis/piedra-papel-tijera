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
let n = 0;



playerPiedra.addEventListener('click', piedra);
playerPapel.addEventListener('click', papel);
playerTijera.addEventListener('click', tijera);

console.log("esto es lo que llega a n " + n);

function piedra(){
    playerMostrando.innerHTML = "✊";
    const player = 0;
    pc(player);
    
}
function papel(){
    playerMostrando.innerHTML = "✋";
    const player = 1;
    pc(player);


}
function tijera(){
    playerMostrando.innerHTML = "✌";
    const player = 2;
    pc(player);

}

function pc(player){
    let seleccionPc = aleatorio(0,2);
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
        chequeo(n);
    } else if (player == 2 && seleccionPc == 1){
        let gana = document.createElement('p');
        gana.innerHTML = "🟢";
        contador.append(gana);
        n++;
        chequeo(n);
    } else if (player == 1 && seleccionPc == 2){
        let pierde = document.createElement('p');
        pierde.innerHTML = "🔴";
        contador.append(pierde);
        n++;
        chequeo(n);
    } else if (player == 0 && seleccionPc == 2){
        let gana = document.createElement('p');
        gana.innerHTML = "🟢";
        contador.append(gana);
        n++;
        chequeo(n);
    } else if (player == 1 && seleccionPc == 0){
        let gana = document.createElement('p');
        gana.innerHTML = "🟢";
        contador.append(gana);
        n++;
        chequeo(n);
    } else if (player == 2 && seleccionPc == 0){
        let pierde = document.createElement('p');
        pierde.innerHTML = "🔴";
        contador.append(pierde);
        n++;
        chequeo(n);
    } 
}

function chequeo(n){
    if (n >= 3){
        playerPiedra.disabled = true;
        playerPiedra.setAttribute("id", "block"); 
        playerPapel.disabled = true;
        playerPapel.setAttribute("id", "block"); 
        playerTijera.disabled = true;
        playerTijera.setAttribute("id", "block"); 
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
