
/**
 *
 * @author Solomon Gebreslasie
 */

//-------------------------soltion 1 --on time complexity-- --------------------------------

function maxRep(str) {
    let charObj = {};
    let max = 0;
    let maxChar = '';
    for (let item of str) {
        charObj[item] = charObj[item] + 1 || 1;
    }

    for (let item in charObj) {
        if (charObj[item] > max) {
            max = charObj[item]
            maxChar = item
        }
    }
    return maxChar
}

console.log(maxRep('aaaaaabbcbbbbbcccccccc'));

//-------------------------soltion 2 --on2 time complexity-- --------------------------------


// let data = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// function maxRep(arr) {

//     let mf = 1;
//     let m = 0;
//     let item;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (arr[i] == arr[j]) m++;
//             if (mf < m) {
//                 mf = m;
//                 item = arr[i];
//             }
//         }

//         m = 0;
//     }
// }
// console.log(maxRep(data))
// alert(item + " ( " + mf + " times ) ");