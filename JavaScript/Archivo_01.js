/*
function mostrarMensaje(){
    alert("Hola, JavaScript es divertido")
}

function leerValor(){
    const input=document.getElementById("unInput");
    const valor=input.value;
    alert("El valor es "+ valor);

}
*/

/*Reto 2: Leer dos valores enteros desde dos inputs e imprimir
          la suma en un alert*/

/* parseFloat para decimal */

function suma(){
    const num1=Number(document.getElementById("num11").value);
    const num2=Number(document.getElementById("num22").value);
    const resu=(num1+num2);
    
    alert("La suma es " +resu);
}