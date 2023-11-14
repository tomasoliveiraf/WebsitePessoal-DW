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

  
  document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("drawCanvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let isDrawing = false;

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    function startDrawing(e) {
      isDrawing = true;
      draw(e);
    }

    function draw(e) {
      if (!isDrawing) return;

      context.lineWidth = 5;
      context.lineCap = "round";
      context.strokeStyle = "#000";

      context.lineTo(e.clientX, e.clientY);
      context.stroke();
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);
    }

    function stopDrawing() {
      isDrawing = false;
      context.beginPath();
    }

    window.addEventListener("resize", function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  });

