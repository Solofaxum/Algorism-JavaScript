

/**
 *
 * @author Solomon Gebreslasie
 */
//3. Write a small method  to do the below task.. this is not in sorted order.. 
//all negative characters in left and positive on the right..
// input = { 4, -3, 2, -5, 5, -1, 3}  output= {-3,-5, -1, 4, 2, 5, 3}

function numArrange(arr) {
    let pivot = 0;
    let i = -1;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < pivot) {
            i++;
            let temp = arr[i];
            arr[i]=arr[j];
            arr[j]= temp;
            //swap(arr[i], arr[j])
        }
    }
}

let myData = [-1, 2, -3, 4, -1, 0]
console.log(numArrange(myData))