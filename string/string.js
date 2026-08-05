let str = "   Hello World    ";

let b= str.toUpperCase(); // lower case to uppercase
let c = str.toLowerCase();// convert to the lowercase
console.log(b); 
console.log(c);



// remove the withspace
// remove the starting space and end space 
// example "  hello world   "
// str.trim()
let removeSpace = str.trim();
console.log(removeSpace);


//str.slice(startTransition,end?) returns part of string 
let numstr = "1234567";
console.log(numstr.slice(1,6));



// str1.concat(str2) joins str2 with str1
let concatString1 = "Hello";
let concatString2 = "World";
console.log(concatString1.concat(concatString2));


// str.replace(searchVal, newVal)  search a value in the string and replace this value  
let replaceStr = "Hello World";
console.log(replaceStr.replace("Hello","Great"));



// str.charAt(idx) charAt() method একটি নির্দিষ্ট index-এর character বের করার জন্য ব্যবহার করা হয়।
let charAtString = "hellow";
console.log(charAtString.charAt(0));

