/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;



function comenzar()
{   let numero;
    numero= Math.round(Math.random() * 2 + 1);
    //alert(eleccionMaquina);
    if (numero == 1){
        eleccionMaquina="Piedra";
    }
    else if( numero == 2){
        eleccionMaquina="Papel";
    }
    else{
        eleccionMaquina="Tijera";
    }


}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina == "Piedra"){
        alert( "empate");
    }
    else if(eleccionMaquina == "Papel"){
        alert("perdiste");
    }
    else{
        alert("ganaste");
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    if (eleccionMaquina == "Pidra"){
        alert( "ganaste");
    }
    else if( eleccionMaquina == "Papel"){
        alert ("empate")
    }
    else{
        alert( "perdiste");
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
    if (eleccionMaquina == "Piedra"){
        alert( "perdiste");
    }
	if (eleccionMaquina == "Papel"){
        alert( "Empate");
    }
    else{
        alert("empateganaste");
    }

}//FIN DE LA FUNCIÓN