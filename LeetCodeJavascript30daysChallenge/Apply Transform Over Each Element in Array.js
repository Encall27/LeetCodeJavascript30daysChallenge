/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var returnedArray = [];
    arr.forEach( (num,index) => {
        returnedArray[index] = fn(arr[index],index)
    })
    return returnedArray
};
