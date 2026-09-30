const quadrado1 = document.getElementById("quadrado1");
 
quadrado1.addEventListener("mouseover", () => {
    quadrado1.style.backgroundColor = "blue";
});

const quadrado2 = document.getElementById("quadrado2");

quadrado2.addEventListener("mouseout", () => {
    quadrado2.style.backgroundColor = "black";
});