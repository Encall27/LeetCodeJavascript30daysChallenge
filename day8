Version 1: 

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    return function(...args){
        let result = fn(...args)
        if (result['calls'] === 1) {
            return result
        } else {
            return undefined
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

Version 2:
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let hasRun = false
    return function(...args){
        if (!hasRun) {
            hasRun = true
            return fn(...args)
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
