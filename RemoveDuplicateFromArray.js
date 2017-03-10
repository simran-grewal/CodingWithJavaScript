function unique(array) {
  
  var arr = array.reduce((res, a) => {
      
      if(!res.find(num => num === a))
      res.push(a);
      
      return res;
      
  }, [])
  
  return arr;
  
}
