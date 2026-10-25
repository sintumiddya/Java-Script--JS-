let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let them = "light";

mode.addEventListener("click", () => {
    if (them === "light") {
        console.log("dark");
        them = "dark";
        body.classList.add("dark");
    } else {

        console.log("light");
        them = "light";
        body.classList.remove("dark");

    }
})   