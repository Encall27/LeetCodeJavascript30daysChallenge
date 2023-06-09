/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let returnNumber = x
        while (functions.length > 0) {
            let arrayFunction = functions.pop()
            returnNumber = arrayFunction(returnNumber)
        }
        return returnNumber
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
