/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let current_num = init
    let obj_functions = {
        increment : () => ++current_num,
        decrement : () => --current_num,
        reset : () => {
            current_num = init
            return init
        }
    };
    return obj_functions
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
