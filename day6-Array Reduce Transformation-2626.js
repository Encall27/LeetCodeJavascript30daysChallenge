/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let returnNumber = init
    nums.forEach( (num) => {
        returnNumber = fn(returnNumber,num)
    })
    return returnNumber
};
