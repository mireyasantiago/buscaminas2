//alert("mensaje");
//inicia una variable global
var arreglo= [];
var vacios=document.getElementsByClassName('vacio').length;
var bombas=document.getElementsByClassName("explosion").length;
var numero=document.getElementsByClassName('num').length;
var tabla = document.getElementById('tabla');

//checar como hacer con solo con un for


for(var i =0; i<vacios;i++){
	arreglo[i] = document.getElementsByClassName('vacio')[i];
}
for ( var i = 0; i<vacios; i++){
	// hasta que se haga clisk se ejecuta la funcion
	arreglo[i].addEventListener("click",cambiarColor)
}

function cambiarColor(){
		this.style.backgroundColor = "blue";
}
/*----------------------------*/


	for ( var j = 0; j< bombas; j++){
		arreglo[j]= document.getElementsByClassName("explosion")[j];
	}
  for ( var j = 0; j<bombas; j++){
		// hasta que se haga clisk se ejecuta la funcion
  	arreglo[j].addEventListener("click",bomba)
  }
  function bomba(){
  //  this.src="logo.png"
  this.style.backgroundColor = "red";
  }
/*----------------------------*/

function funcion_reiniciar(){
document.getElementById("id_formulario").reset();
}
