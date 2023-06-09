/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let result = []
    while (arr.length > 0) {
       const chuck_piece  = arr.splice(0,size);
       result.push(chuck_piece);
    }
    return result
};
