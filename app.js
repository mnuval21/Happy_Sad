const h1 = document.querySelector('h1');
setInterval(function() {
  if(h1.classList.contains('big')) {
    h1.innerText = "SAD";
  } else {
    h1.innerText = "HAPPY";
  }
  h1.classList.toggle('big');
  h1.classList.toggle('small');
}, 1000);

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`
}

const colors = document.querySelectorAll(".header");
for(let color of colors){
  setInterval(function () {
    color.style.color = randomRGB();
  }, 1000);
}