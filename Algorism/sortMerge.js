

/**
 *
 * @author Solomon Gebreslasie
 */

 //  Merge two sorted arrays into one sorted array: nt[] A = {1,5,7,12,18,32} int[] B = {2,4,9,16,27,76,98}

//-----------------Solution One ---------------------
// let input1 = [1,5,7,12,18,32];
// let input2 = [2,4,9,16,27,76,98];

// let output = [...input1, ...input2]
// output.sort((a,b)=>a-b)
// console.log("Solution-1", output)


//-----------------Solution two ---------------------

 const _mergeArrays = (arr1, arr2) => {
    const outPut  = []
  
    while (arr1.length && arr2.length) {
        outPut.push(arr1[0] > arr2[0] ? arr2.shift() : arr1.shift())
    }
  
    //if we still have values, let's add them at the end of `c`
    while (arr1.length) {
        outPut.push(arr1.shift())
    }
    while (arr2.length) {
        outPut.push(arr2.shift())
    }
  
    return outPut
  }
  
  const mergeSort = (a) => {
    if (a.length < 2) return a
    const middle = Math.floor(a.length / 2)
    const a_l = a.slice(0, middle)
    const a_r = a.slice(middle, a.length)
    const sorted_l = mergeSort(a_l)
    const sorted_r = mergeSort(a_r)
    return _mergeArrays(sorted_l, sorted_r)
  }

  let dataA = [1,5,7,12,18,32];
  let dataB = [2,4,9,16,27,76,98];
    console.log("Solution-2", _mergeArrays(dataA, dataB))
  
