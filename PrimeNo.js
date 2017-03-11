function isPrime(n) {
  //TODO
   return n < 2 ? false : !/^(11+?)\1+$/.test(Array(n + 1).join('1'));
}



http://www.noulakaz.net/2007/03/18/a-regular-expression-to-check-for-prime-numbers/
