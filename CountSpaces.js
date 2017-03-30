// Count No of Spaces But not the beginning spaces and end spaces and also not more than one spaces in string should be count
var str = "  my  name  is  simran   jit       singh ";

str = str.trim();
str = str.replace(/\s\s+/g, " ");
var res = (str.match(/\s/g) || []).length;
console.log(res);
