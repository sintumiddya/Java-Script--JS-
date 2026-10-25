let btnAlrt = document.querySelector("#btn1");

btnAlrt.onclick = function (e) {
    alert("This is setp 2");
    console.log(e);
    console.log(e.clientX, e.clientY);
}




// mostlly used event handelling 

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", ()=>{
//     alert("Hello ")
// })


// mousehover event

let box = document.querySelector(".box");

box.addEventListener("mouseover", (e)=>{
    console.log("hover");
    console.log(e);
    box.classList.add("box_demo2");

})