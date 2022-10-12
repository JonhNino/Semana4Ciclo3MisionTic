/*
Se tiene la siguiente informacion sobre los n vendedores 
de una empresa
-Nombre
-Tipo Vendedor(1:Puerta Puerta, 2:Telemercadeo)
-Valor Ventas del Mes
Se pide calcular el valor de las comisiones de cada vendedor y el 
total de comisionte (Todos los vendedore), de acuerdo a al a siguiente tabla:
Tipo de vendedro        (%) comision (aplica al valor de las ventas )
1                        25%
2                        20%       
Entrada :
    -nombre,tipo,ventas
    -N:canditada de vendedores
salida:
    -comision de cada vendedor
    -total comisiones(acumulador-sumador)
proceso:
    -ciclo :For para los N vendedores
    -Condicional : tipo de vendedro (calula la comision)                        
*/
var nombre,tipo,ventas,n, comision=0,total=0
n=parseInt(prompt("Cantidad vendedores"))
for(var i =0;i<n;i++){
    nombre=prompt("Nombre del vendedor ")
    tipo=parseInt(prompt("tipo Vendedor:(1:Puerta puerta, 2:telemercadeo)"))
    ventas=parseInt(prompt("Ventas del mes: " ))
    if(tipo==1){
        comision =ventas*0.25

    }else{
        comision=ventas*0.20
    }
    total+=comision
    alert("El vendedro "+nombre+" Gana una comision de : "+comision)

}
alert("total comisiones "+total)