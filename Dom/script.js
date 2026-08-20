

// function showVal() {
//     let val = document.getElementById("a").value;
//     alert(val);
//     console.log(val);
// }

// function clickMe() {
//     let getval = document.querySelector("#hedding");
//     getval.style.color = "red";
//     console.log(getval);
// }

// function darkMod() {
//     let getVal = document.querySelector("body");

//     getVal.style.backgroundColor = "black";
// }
// function lightMod() {
//     let getVal = document.querySelector("body");
//     getVal.style.backgroundColor = "white";
// }



// let h1 = document.querySelector("h1");
// console.log(h1);

// h1.innerText = "Hello World";

// let para = document.querySelector("#para");
// para.innerText = "This is a new paragraph";
// console.log(para);
// para.style.color = "blue";


//-------------------------------------------------------------------------

// access the attribute 

// let attr = document.querySelector("#para");
// console.log(attr);


// console.log(attr.getAttribute("id"));
// console.log(attr.setAttribute("id", "newpara"));


//-----------------------------------------------------------------------------------------

// style

/*

       node.style

*/
// let div = document.querySelector(".box");

// div.style.backgroundColor ="purple";
// div.style.border = "5px dotted black"

// div.innerHTML = "Hello";
// div.style.fontSize = "40px";
// div.style.color = "white";



//--------------------------------------------------------------
                      /*  Insert Emelement in a node  */


/*
1. node.append(el)  adds at the end of node (inside)

2. node.prepend(el) add at the strat of node(inside)

3. node.before(el) add before the node (outside)

4. ndoe.after(el) add after the node (outside)
*/


let newbtn = document.createElement("button");
newbtn.innerText = "Button";
console.log(newbtn);


// add the button top the ul 
let btn = document.querySelector(".box");
btn.append(newbtn);
btn.prepend(newbtn);

btn.before(newbtn);
btn.after(newbtn);

let newheading = document.createElement("h1");
newheading.innerHTML = "<h1>Hi my name is sintu </h1>";


let h1 = document.querySelector("h1");
h1.prepend(newheading);




//-------------------------------------------
//--------------Delete The Node ------------------
/*
     node.remove() removes the node
*/

let para = document.querySelector("h1");
para.remove();
console.log(para);