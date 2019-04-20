function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("head");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  if(y.className === "head") {
    y.className += " responsive-header";
  } else {
    y.className = "head";
  }
}
