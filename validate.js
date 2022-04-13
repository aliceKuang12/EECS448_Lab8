function validate() {
  var v1 = document.getElementById("p1").value;
  var v2 = document.getElementById("p2").value;

  if(v1 != v2) {
    alert("Password don't match!");
  }

  if( v1.length < 8 ||v2.length < 8)  {
    alert("Your password is too short.")
  }
}