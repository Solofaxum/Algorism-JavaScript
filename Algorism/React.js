
/**
 *
 * @author Solomon Gebreslasie
 */


// [1,2,0,1,2,1,2,1,0,1,2,1,2,1,1,0]

// [0,0,0,2,2,2,2,2,2,1,1,1,1,1,1,1]

// var zeros = 3;
// var twos = 6;
// var ones = 7;

// 1. create 3 Int vars, each representing count of 0, 1, or 2
// 2. loop over collection, increment 0 when I see a 0 (same for 1 and 2)
// 3. loop up to the number of zeros in the array, and insert a zero at each position (index 0 to 3)
// 4. loop over the array from the zero count (which is index 3) up to the sum of zero count and twos count (index 9)
//    inserting twos 
// 4. loop from index 9 to the end of the arary inserting ones 
// 5. return the given array 

function partitionZerosTwosOnes(ints) {
       
    //create 3 Int vars, each representing count of 0, 1, or 2
    let zeroCount = 0, twoCount = 0, oneCount = 0;
    for (let i = 0; i < ints.length; i++) {
        let currInt = ints[i];

        if (currInt === 0) zeroCount++;
        else if (currInt === 1) oneCount++;
        else twoCount++;
    }

    // Takes care of the zeros
    for (let i = 0; i < zeroCount; i++) {
        ints[i] = 0;
    }

    // Takes care of the twos
    for (let i = zeroCount; i < zeroCount + twoCount; i++) {
        ints[i] = 2;
    }

    // Takes care of the ones
    for (let i = zeroCount + twoCount; i < ints.length; i++) {
        ints[i] = 1;
    }

    return ints;
}

let myData = [1,2,0,1,2,1,2,1,0,1,2,1,2,1,1,0]
console.log(partitionZerosTwosOnes(myData))