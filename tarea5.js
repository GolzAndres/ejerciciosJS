
// // numero 5
var valor1 = 1.70
var imc = 25
peso =(valor1 * valor1) * imc

if (imc <= 18.5){
  console.log ("es delgado o bajo peso")
}

else if (imc >= 18.5 & imc <= 24.9){
  console.log ("peso normal o peso saludable")
}

else if (imc >= 25.0 & imc <= 29.9){
  console.log ("esta en sobrepeso")  
}
  

else if(imc >= 30.0){
  console.log ("esta en obesidad")
}

