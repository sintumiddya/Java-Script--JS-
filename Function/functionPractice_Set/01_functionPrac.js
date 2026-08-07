/*
Q1.  Create a function using the "function" keyword 
     that takes a Strign as an argument & returns 
     the number of vowels in the string.
*/

function countVowels(str) {
    let count = 0;

    for (let char of str) {
        // console.log(char);
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }

    return count;
}
let totalVowels = countVowels("sintu middya");
console.log(`Total Vowel in the string are = ${totalVowels}`);