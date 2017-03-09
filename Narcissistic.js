/*
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.
*/

function isNarcissistic(n){
  return n === +n.toString().split('').reduce((s, v, i, arr) => s + Math.pow(v, arr.length),0)
}




// no strings!

function isNarcissistic(n) {
  const exp = Math.floor(Math.log10(n) + 1);
  let sum = 0;
  
  for (let i = 0; i < exp; i++) {
    let digit = Math.floor(n / Math.pow(10, i)) % 10;
    sum += Math.pow(digit, exp);
  }
  
  return sum === n;
}







function isNarcissistic(n, s = n.toString(), p = s.length){
  return [...s].reduce((x, y) => x + Math.pow(+y, p), 0) === n
}






function isNarcissistic(n){
  return n === n.toString().split('').map(num => Math.pow(parseInt(num),n.toString().length)).reduce(function(sum,i){
    return sum + i;
  },0);
}







function isNarcissistic(value) {
    var sum = 0;
    var strValue = value.toString();

    for (var i = 0; i < strValue.length; ++i)
        sum += Math.pow(strValue.charAt(i), strValue.length);

    return (sum === parseInt(strValue));
}







function isNarcissistic(n){
  let len = n.toString().length;
  return (n === Array.from(n.toString()).reduce((a, b) => {
    return a + Math.pow(b, len);
  }, 0));
}











function isNarcissistic( value ) {
  // Code me
  var power = value.toString().length;
  var numbers = [];
  var math = 0
  for (i = 0; i < power; i++) { 
      numbers.push(value.toString().slice(i,i+1));
      math = parseInt(math) + parseInt(Math.pow(numbers[i], power));
  }
  return value == math;
}










function isNarcissistic(n){
  var s = n.toString();
  var l = s.length;
  var total = 0;
  for(var i = 0; i < s.length; i++) 
    total += Math.pow(Number(s[i]), l);
  return total == n ? true : false;  
}





function isNarcissistic(n){
  var digits = n.toString().length,
      numbers = n.toString().split(""),
      sum = 0;

  for(var i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], digits);
  }

  return sum === n;
}





