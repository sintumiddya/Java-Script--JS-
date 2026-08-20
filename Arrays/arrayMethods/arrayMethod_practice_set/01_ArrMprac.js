/*
Q. We are given array of marks of students. Filter out 
    of the marks of students that scored 90+
*/


let marks = [99, 98, 70, 89, 91, 65];

let graterMark = marks.filter((val) => {
    return val > 90;
})

console.log(graterMark);