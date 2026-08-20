
// question 1
// create a button 

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";


let div = document.querySelector(".demoB");
div.prepend(newBtn);



// question 2 
let el = document.querySelector("p");
console.log(el);

// let attr = el.getAttribute("class");
// console.log(attr);

// el.setAttribute("class", "newPara"); set attribute remove the old class

el.classList.add("newPara");