/*const animation_elements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    })
}, {
    treshold: 0.5
});

for (let i = 0; animation_elements.length; i++) {
    const el = animation_elements[i];

    observer.observe(el);
}*/

const btn = document.getElementById("design");
var x = document.getElementById("design2");
const btn2 = document.getElementById("musica");
var y = document.getElementById("musica2");
const btn3 = document.getElementById("audiovisual");
var z = document.getElementById("audiovisual2");

x.style.display = "none";

btn.onclick = function myFunction() {
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


