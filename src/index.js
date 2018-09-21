module.exports = function getZerosCount(number, base) {
  var a = base;
  var aa = 0;
  var c = 0;
  var b;
  var s = 0;
  var j = 2;
  var p =1;
  function num(e){
    for(var u = e-1; u>1; u--){
      if(e%u == 0){
        return false;
      }
    }
    return true;
  }
      for(var o = a; o>1; o--){
        if(a%o == 0){
          if(num(o) == true){
            b = o;
            break;
          }
        }
      }
  var x,y;
  aa = Math.floor(number/(b));
  s = aa;
  while(aa/b>=1){
    aa = Math.floor(aa/(b));
    x = aa*p*(-1);
    y = aa*j;
    s = s + x + y;
    p++;
    j++;
  }
  return s;
}