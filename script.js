const btn = document.getElementById("design");
var x = document.getElementById("design2");
const btn2 = document.getElementById("musica");
var y = document.getElementById("musica2");
const btn3 = document.getElementById("audiovisual");
var z = document.getElementById("audiovisual2");


btn.onclick = function myFunction() {
  x.style.display = "none";
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
    }
}

btn2.onclick = function myFunction() {
  y.style.display = "none";
    if (y.style.display === "none") {
      y.style.display = "block";
      z.style.display = "none";
      x.style.display = "none";
    } else {
      y.style.display = "none";
      z.style.display = "none";
      x.style.display = "none";
    }
  }

btn3.onclick = function myFunction() {
  z.style.display = "none";
    if (z.style.display === "none") {
      z.style.display = "block";
      x.style.display = "none";
      y.style.display = "none";
    } else {
      z.style.display = "none";
      x.style.display = "none";
      y.style.display = "none";
    }
  }
