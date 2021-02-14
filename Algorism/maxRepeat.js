
/**
 *
 * @author Solomon Gebreslasie
 */

//1. find maximum consecutive repeating character in string.

//-------------------------soltion 1 --on2 time complexity-- --------------------------------


// Input : str = "aaaaaabbcbbbbbcbbbb"
// Output :a
// function to find out the maximum repeating 
// character in given string 

// function maxRepeating(str) { 
//     let len = str.length; 
//     let count = 0; 

// Find the maximum repeating character 
// starting from str[i] 
//     let res = str.charAt(0); 
//     for (let i=0; i<len; i++) { 
//         let cur_count = 1; 

//         for (let j=i+1; j<len; j++) { 
//             if (str.charAt(i) != str.charAt(j)) 
//                 break; 
//             cur_count++; 
//         } 

//         // Update result if required 
//         if (cur_count > count){ 
//             count = cur_count; 
//             res = str.charAt(i); 
//         } 
//     } 
//     return res; 
// } 

// let myItem = "aaaaaabbcbbbbbcbbbb";
// console.log(maxRepeating(myItem))

//-------------------------soltion 2 --on time complexity-- --------------------------------

function maxRep(str) {
    let count = 0;
    let result = str.charAt(0);
    let n = str.length;
    let currentCounter = 1;
    for (let i = 0; i < n; i++) {
        if (i < n - 1 && str.charAt(i) === str.charAt(i + 1)) {
            currentCounter++;
        } else {
            if (currentCounter > count) {
                count = currentCounter;
                result = str.charAt(i)

            }
            currentCounter = 1;
        }

    }
    return result;
}
console.log(maxRep('aaaaaabbcbbbbbcbbbb'));


