/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let hasRun = false
    let runTimes = 0
    return function() {
        if (!hasRun) {
            hasRun = true
            return n
        } else {
            return n + (++runTimes)
        }
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
