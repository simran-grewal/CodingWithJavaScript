function tripledouble(num1, num2){
  for(var i = 0; i < 10; i++){
    var triple = new RegExp (i + "{3}")
    var double = new RegExp (i + "{2}")
    
    if(triple.test(num1) && double.test(num2)){
       return 1
    }
  }
  return 0
}

***************************************
function tripledouble(num1, num2) {
  for (let i = 0; i < 10; i++) {
    if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
      return 1;
    }
  }
  return 0;
}
