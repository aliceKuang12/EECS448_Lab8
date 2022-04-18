function validate() {
  var v1 = document.getElementById("p1").value;
  var v2 = document.getElementById("p2").value;


  if(v1 != v2) {
    alert("Password don't match!");
  }

  else if( v1.length < 8 ||v2.length < 8)  {
    alert("Password too short, must be at least 8 characters.")
  }
  else
  {
	  alert("Success, valid password!")
  }
}