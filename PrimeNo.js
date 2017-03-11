function isPrime(n) {
  //TODO
   return n < 2 ? false : !/^(11+?)\1+$/.test(Array(n + 1).join('1'));
}
