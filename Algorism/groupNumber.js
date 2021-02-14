

/**
 *
 * @author Solomon Gebreslasie
 */
//3. Write a small method  to do the below task.. this is not in sorted order.. 
//all negative characters in left and positive on the right..
// input = { 4, -3, 2, -5, 5, -1, 3}  output= {-3,-5, -1, 4, 2, 5, 3}


function filterNumbers(arr) {
    let negatives = [];
    let positives = [];
    for(let num of arr) {
       if(num < 0) {
         negatives.push(num);
          }else {
         positives.push(num);
        }}
     return negatives.concat(positives);
 }
 console.log(filterNumbers([4, -3, 2, -5, 5, -1, 3]));
