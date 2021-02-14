

/**
 *
 * @author Solomon Gebreslasie
 */
// 5.  Given an unsorted array and a number n, find if there exists a pair of elements in the array 
// whose difference is n.
// Examples: Input: arr[] = {9, 29,10, 2, 50, 24, 100}, n = 50     Output: Pair Found: (50, 100)

function pairElement(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if ((arr[i] - arr[j] === n) || (arr[i] - arr[j] === -n)) {
                return (`Pair Found: (${arr[i]}, ${arr[j]})`)
            }
        }
    }
}
console.log(pairElement([9, 29, 10, 2, 24, 100, 150, 200], 50));
