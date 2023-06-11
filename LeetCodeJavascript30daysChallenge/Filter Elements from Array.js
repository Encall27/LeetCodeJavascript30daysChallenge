/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let returnArray = [];
    arr.forEach( (num,index) => {
        if (fn(num,index)) {  // if(0) // This code will not be executed because 0 is falsey
            returnArray.push(num)
        }
    })
    return returnArray
};
