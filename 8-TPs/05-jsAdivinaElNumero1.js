/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos;
let flag=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
  //contadorIntentos +=1;
  /*contadorIntentos++;
  alert(contadorIntentos);*/
  numeroSecreto= Math.round(Math.random() * 99 + 1);
  contadorIntentos = 0;
  document.getElementById("txtIdIntentos").value=contadorIntentos;
  document.getElementById("txtIdNumero").focus();
  flag=1;
  
}

function verificar()
{
  let numero;
  if(flag == 0){
    alert("debes promero poner el boton comenzar")
  }
  else{
    numero = parseInt(document.getElementById("txtIdNumero").value);
    contadorIntentos++;
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    
    if(numero == numeroSecreto){
      //ACA VA EL GANADOR
      alert(`usted es ganador y en solo ${contadorIntentos} +intento`);
      flag = 0;
    }
    else if(numero > numeroSecreto){
      //aca va el codigo que informa que el usuario se paso    
      alert("se pasoo...");   
    }
    else{
      //aca va el codigo donde informo que le falta
      alert("le falta...."); 
    }
    //document.getElementById("txtIdIntentos").value=contadorIntentos;
    document.getElementById("txtIdNumero").value= "";
    document.getElementById("txtIdNumero").focus();
  }
	
}