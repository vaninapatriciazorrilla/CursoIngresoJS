/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/
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
	  switch(contadorIntentos){
		  case 1:
			alert( "usted es un Psíquico");
			break;
		  case 2:
			alert( "excelente percepción");
			break;  
		  case 3:
			alert( "Esto es suerte");
			break;  
		  case 4:
			alert("Excelente técnica");
			break;
		  case 5:
			alert("usted está en la media");
			break;
		  case 6:
		  case 7:
		  case 8:
		  case 9:
		  case 10:
			alert("falta técnica");
			break;
		  default:
			  alert("Afortunado en el amor!!");
	  }
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