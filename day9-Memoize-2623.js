/**
 * @param {Function} fn
 */
function memoize(fn) {
    const hasRunArgs = new Map();
    return function(...args) {
        // convert args into a key
        const key = JSON.stringify(args)

        // check it has run before or not
        if (hasRunArgs.has(key)) {
           return hasRunArgs.get(key)
        } else {
            const result = fn(...args)
            hasRunArgs.set(key, result)
            return result
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
