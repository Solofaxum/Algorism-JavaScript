

/**
 *
 * @author Solomon Gebreslasie
 */

 // -------------------- solution one nlogn --------------------------

 const sumTwo =(arr,targetSum) => {
    if ((arr && arr.length === 0) || targetSum === undefined) {
        return false;
    } else {
        for (let x = 0; x <=arr.length -1; x++) {
            let partnerInPair = targetSum - arr[x];
            let start = x+1;
            let end = (arr.length) - 2;

             while(start <= end) {
                let mid = parseInt(((start + end)/2));
                if (arr[mid] === partnerInPair) {
                    console.log(`Pairs are ${arr[x]} and ${arr[mid]} `);
                    break;
                } else if(partnerInPair < arr[mid]) {
                    end = mid - 1;
                } else if(partnerInPair > arr[mid]) {
                    start = mid + 1;
                }
             }
        };

    };
}
let myArray =[0,1,2,3,4,5,6,7,8,9]
console.log(sumTwo(myArray, 11))

 // -------------------- solution two nlogn --------------------------

//arr = [1,2,5.7,8]
//write code to find two numbers who addition  = 9

// function pairSum(arr){

// }
// let twoSum = (array, sum) => {
//     let hashMap = {},
//       results = []

//         for (let i = 0; i < array.length; i++){
//             if (hashMap[array[i]]){
//                 results.push([hashMap[array[i]], array[i]])
//             }else{
//                 hashMap[sum - array[i]] = array[i];
//             }
//           }
//           return results;
//     }
// console.log(twoSum([10,20,10,40,50,60,70,30],50));

// function twoSum(arr, S) {
//     const sum = [];
//      for(let i = 0; i< arr.length; i++) {
//        for(let j = i+1;  j < arr.length; j++) {
//          if(S == arr[i] + arr[j]) sum.push([arr[i],arr[j]])
//        }
//      }
//     return sum
//    }
//    console.log(twoSum([10,20,10,40,50,60,70,30],50));


