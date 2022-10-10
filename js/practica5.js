/*
Dado el nombre y el estrato de un usario, calcular el pago de 
tarifa basica del servicio de agua, con base en la siguiente tabla_
estrato         tarifa basica
1               $15000
2               $20000
3               $30000
4               $45000
5               $60000
*/

var nombre, estrato, tarifa=0
nombre =prom("Nombre Usuario: ")
estrato=parseInt(prompt("Estrato (1,2,3,4,5): "))
switch(estrato){
    case 1 :
        tarifa=15000;
    break
    case 2 :
        tarifa=20000;
    break
    case 3 :
        tarifa=30000;
    break
    case 4 :
        tarifa=45000;
    break
    case 5 :
        tarifa=60000;
    break
}
alert("El Usuario "+nombre+" Paga una tariga basica de "+tarifa)
