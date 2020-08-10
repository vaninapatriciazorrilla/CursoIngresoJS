/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{
  let tipo;
  let cantidad;
  let precio;
  let seguir;
  let descuento;
  let importeBruto;
  let importDesc;
  let importeTotal;
  let tipoMasCaro;
  let contCal = 0;
  let contArena = 0;
  let contCemento =0;
  let acumCal = 0;
  let acumCemento = 0;
  let acumArena = 0;

  do {
    tipo= prompt('ingrese el tipo "arena";"cal";"cemento"');
    while (!(tipo == "cal" || tipo =="arena"|| tipo =="cemento")) {
      tipo= prompt('ingrese el tipo "arena";"cal";"cemento"');
    }
    cantidad= parseInt(prompt("Ingrese la cantidad de bolsas"));
    while (cantidad <= 0 || isNaN(cantidad)) {
      cantidad= parseInt(prompt("Ingrese una cantidad correcta  de bolsas"));
    }
    precio =parseFloat(prompt("ingrese el precio de las bolsas"));
    while (precio <= 0 || isNaN(precio)) {
      precio =parseFloat(prompt("ingrese el precio correcto de las bolsas"));
    }
    switch (tipo) {
      case ("arena"):
        importeBruto = precio * cantidad;
        acumArena += cantidad;
        contArena ++;
        

        break;
    
      case("cal"):
        importeTotal = precio * cantidad;
        acumCal += cantidad;
        contCal ++;
        break;
      case ("cemento"):
        importeTotal = precio * cantidad;
        acumCemento += cantidad;
        contCemento ++;
        break;
    }
    
    seguir = prompt('ingrese "si" si desea continuar o "no" si desea salir').toLowerCase();
  } while (seguir == "si");
  
  if (cantidad > 10) {
    descuento = 15;
  }
  else if(cantidad >30){
    descuento = 15;
  }
  else{
    importeTotal;
  }
  importDesc = precio - precio * descuento /100; 
  

/*

 switch (tipo) {
      case ("arena"):
        cantidad= parseInt(prompt("Ingrese la cantidad de bolsas"));
        precio =parseFloat(prompt("ingrese el precio de las bolsas"));

        
        break;
    
      case("cal"):
        cantidad= parseInt(prompt("Ingrese la cantidad de bolsas"));
        precio =parseFloat(prompt("ingrese el precio de las bolsas"));
        break;
      case ("cemento"):
        cantidad= parseInt(prompt("Ingrese la cantidad de bolsas"));
        precio =parseFloat(prompt("ingrese el precio de las bolsas"));
        break;
    }
  tipo= prompt('ingrese el tipo "arena";"cal";"cemento"');
  while (tipo == "cal" || tipo =="arena"|| tipo =="cemento") {
    seguir = prompt('ingrese "si" si desea continuar o "no" si desea salir').toLowerCase();
    while (seguir == "si") {
    
    

      seguir = prompt('ingrese "si" si desea continuar o "no" si desea salir').toLowerCase();

    }tipo= prompt('ingrese el tipo "arena";"cal";"cemento"');
  }
  
  
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
  
  */
}
