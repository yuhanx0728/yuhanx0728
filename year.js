function year() {
  var d = new Date();
  var yearStarted = 2017;
  var perfix;
  var n;

  if (d.getMonth() < 6) {
  	prefix = ""
    n = d.getFullYear() - yearStarted;
  }
  else if (d.getMonth() < 9) {
  	prefix = "rising "
    n = d.getFullYear() - yearStarted + 1;
  }
  else {
  	prefix = ""
  	n = d.getFullYear() - yearStarted + 1;
  }
  
  if (n == 1) return prefix+"freshman";
  else if (n == 2) return prefix+"sophomore";
  else if (n == 3) return prefix+"junior";
  else return prefix+"senior";
}