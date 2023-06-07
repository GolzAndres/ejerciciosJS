
// //numero4 
let renta = 62000;
let total = 0;
 if (renta < 10000){
  total=renta * 0.05;
}

 else if (renta >= 10000 && renta < 20000 ){
  total=renta * 0.15;
}


else if (renta >= 20000 && renta < 35000 ){
  total=renta * 0.20;
}


else if (renta >= 35000 && renta < 60000 ){
  total=renta * 0.30;
}

else {
  total=renta * 0.45;
}
  console.log ("debes pagar"+ total)
