/*built a recursion function*/
function carburante(number){
  if((number/3) <= 2){
    return number;
  }else {
    return number + carburante(Math.floor(number/3)-2);
  }
}

var mioArray=[1969,51360,
95527];

var somma=0;
for(i=0;i<mioArray.length; i++){
  somma = somma+(carburante(mioArray[i])-mioArray[i]);
}
console.log(somma)
  
