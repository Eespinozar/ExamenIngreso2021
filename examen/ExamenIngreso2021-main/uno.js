/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos */ 
function mostrar()
{ 
  let producto;
  let promedio;
  let inflamable; 
  let promedio;
  let marca; 
  let acumulador = 1000; 
  let respuesta; 
  let precio; 
  let cantidad; 
  let marca;
  let acumuladorAlchohol = 0;
  let acumuladorIac = 0;
  let acumuladorQuiat = 0;
   let contadorAlcohol = 0;
   let contadorIac = 0;
   let contadorQuat = 0;
   let acumuladorIgnifugo = 0;
   let contadorIgnifugo = 0;
   let acumuladorInflamable = 0;
   let contadorInflamable = 0;
   let acumuladorCombustible = 0;
   let contadorCombustible = 0;


for (let i = 0; i < 5; i++){
 producto= prompt("Ingrese producto : 'Alcohol', 'IAC' o 'QUAT' ");

 while ( producto != "Alcohol" && producto != "IAC" &&  producto != "QUAT")
producto = prompt (" Producto Invalido. Ingresetipo 'Alcohol', 'IAC' o 'QUAT");

seguir = prompt(" ¿Quiere Ingresar Otro Producto?:" )}

while ( precio < 100 || precio > 300 || isNaN(precio)){


 precio = parseFloat( prompt( "Ingrese precio $ ( 0 - 1000):"));

}


while (!(cantidad > 0 && cantidad <= 1000 )) {

	cantidad = parseInt ( prompt ( "Error. Ingrese cantidad maxima de 1000"))
}

while ( inflamable != "ignifugo" && inflamable != "inflamable" &&  inflamable != "combustible" ){ 
infamable = prompt ( "Ingrese otro tipo de Inflamable");
}
marca = prompt ( "Ingrese Marca"); 

switch( producto){

	case "Alcohol":
		acumuladorAlchohol += cantidad;
         contadorAlcohol ++; 


		 if flagAlcohol == 00 

		 break;


		 case "IAC":
		acumuladorIac += cantidad;
         contadorIac ++; 


		 break;


		 case "QUAT":
		acumuladorQuat += cantidad;
         contadorQuat ++; 


		 break;
}

switch (inflamable ){

case "ignifugo":
acumuladorIgnifugo += cantidad;
 contadorIgnifugo ++; 

break;

case "Combustible":
acumuladorCombustible += cantidad;
 contadorc ++; 

break;


case "Inflamable":
acumuladorInflamable += cantidad;
 contadorInflamable ++; 

 break;




}



}