/*
Dada la informacion dosbre N docentes de una idstitucion educativa:
-Nombre 
-Categoria(1,2,3)
-Horas laboradas en el mes
Se pide calcular el valor  honoriarios a pagar a cada
docente y el total,
Categoria           Valor hora
    1                   $40000
    2                   $60000
    3                   $80000
  Utilizar Funciones
  Entrada:
  -n:cantidad de doncenetes
  -nombre,categoria,horas
Salida:
-Honorarios de cada docente
-total honorarios (Acumuludar-Sumandor)
Proceso
    -Ciclo: For para los n docentes
    -Condicional : Switch para la categoria del docente

Funcion (Modularidad)
Nombre: CalcularHonorario(para un docente)
Salida: Honorios del docente
entrada : categoria y horas laboradas
proceso: switch 
 
    */

function CalcularHonorario(categoria,horas){
    var honorarios = 0
    switch(categoria){
        case 1:
            honorarios=40000*horas;
            break
            case 2:
            honorarios=60000*horas;
            break
            case 3:
            honorarios=80000*horas;
            break
    }
    return honorarios
}

var n,nombre,categoria,horas,honorarios=0,total=0
n=parseInt(prompt("cantidad de docnetes: "))
for(var i=0;i<n;i++){
    nombre=prompt("Nombre docente : ")
    categoria=parseInt(prompt("Categoria Docente(1,2,3)"))
    horas=parseInt(prompt("horas Laboradas en el mes"))
    // Llamado a la funcion
    honorarios=CalcularHonorario(categoria,horas)
    total+=honorarios
    alert("El Doncente "+nombre+" gana por honorarios"+honorarios)
}
alert("total Comisiones: "+total)