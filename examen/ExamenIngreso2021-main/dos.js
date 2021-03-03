function mostrar()
{let cursada;
  let cantidadMaterias;
  let sexo;
  let notaPromedio;
  let edad;
  let seguir = "s";
  let promedioMasculinoMax;
  let nomprom;
  let nombre;
  let nomlibre;
  let edadmin;
  let acumpromedioMasculino = 0;
  let acumpromF = 0;
  let acumpromN = 0;
  let promedioMasculino;
  let promedioFemenino;
  let promN;
  let alumnoMasculino;
  let alumnoFemenino;
  let alumN;
  let totalMaterias;
  let materiasMaxima;
  let nombreMateria;
  let edadmat;
  
  do{
    nombre = prompt("Ingrese su nombre:");
  
    cursada = prompt("Ingrese tipo de cursada('libre', 'presencial', 'remota'):");
  
    cantidadMaterias = prompt("Ingrese cantidad de materias(mas de 0, menos de 8):");
  
    sexo = prompt("Ingrese sexo (femenino(f)/masculino(m)/no binario(n)):").toLowerCase();
    while(sexo != "m" && sexo != "f" && sexo != "n"){
      sexo = prompt("Dato inválido.Ingrese sexo (femenino(f)/masculino(m)/no binario(n)):");
    }
  
   notaPromedio = parseInt(prompt("Ingrese la nota promedio(entre 0 y 10):"));
    while(! notaPromedio>=0 && notaPromedio<=10)){
     notaPromedio = parseInt(prompt("Dato inválido. Ingrese la nota promedio(entre 0 y 10):"));
    }
  
    edad = parseInt(prompt("Ingrese la edad:"));
    while( edad>= 0 && isNaN(edad)){
      edad = parseInt(prompt("Dato inválido. Ingrese edad."))
    }
  
    if(sexo != "m"){
      if(prom>promedioMasculinoMax){
        promedioMasculinoMax = prom;
        nomprom = nombre;
      }
  
    }
  
    if(cursada == "libre"){
      if(edad<edadmin){
        edadmin = edad;
        nomlibre = nombre;
      }
  
    }
  
    if(sexo == "m"){
      acumpromedioMasculino += notaPromedio;
      alumnoMasculino
  ++;
    }else if(sexo == "f"){
      acumpromF += notaPromedio;
      alumnoFemenino++;
    }else{
      acumpromN += notaPromedio
      alumN++;
    }
  
    promedioMasculino = acumpromedioMasculino / alumnoMasculino
;
    promedioFemenino = acumpromF / alumnoFemenino;
    promN = acumpromN / alumN;
  
    if(cursada != "remota"){
      totalMaterias + cantidadMaterias;
      if(totalMaterias>materiasMaxima){
        materiasMaxima = totalMaterias;
        nombreMateria = nombre;
        edadmat = edad;
  
      }
  
  
    }
  
  
  
  
    seguir = prompt("Desea seguir ingresando productos?  s/n");
  
  }while( seguir == "s")
  
  alert("El nombre del mejor promedio no masculino es:" + nomprom +"<br>")
  alert("El nombre del más joven de los alumnos que la dan libre es:" + nomlibre +"<br>")
  alert("El promedio de nota por sexo es: masculino:" + promedioMasculino + "femenino:" + promedioFemenino + "no binario:" + promN +"<br>" )
  alert("La edad y el nombre del que curse más materias de forma no remota es:" + nombreMateria + "y tiene" + edadmat + "años." + "<br>")
}
