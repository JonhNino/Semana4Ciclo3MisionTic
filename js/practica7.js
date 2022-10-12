/*
    Dada una lista con letras, halla la cantidad de letras a
*/

var letra =['a','a','d','a','f','d','x','r','g','v','x','e','d','g','a','w','r','e','a','s',]
var cantidad_a=0
for(var i=0;i<letra.length;i++){
    if(letra[i]==='a'){
        cantidad_a++
    }
}
alert("Cantidad de letras a: "+cantidad_a)