/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    let numberOfArgs = 0;
    let argsArray = [];
    return function curried(...args) {
        numberOfArgs += args.length
        argsArray.push(...args)
        if (numberOfArgs >= fn.length) {
            return fn(...argsArray)
        } else {
            return curried
        }
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
