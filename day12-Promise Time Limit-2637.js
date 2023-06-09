/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        return new Promise((resolve,reject) => {
            // create a bomb timeout 
            const bomb_timeout = setTimeout(()=> {
                return reject('Time Limit Exceeded');
            },t)

            // run the fn function
            fn(...args)
            .then(res => {
                // defuse the bomb
                clearTimeout(bomb_timeout)

                // success then resolve
                resolve(res)
            })
            .catch(err => {
                // defuse the bomb
                clearTimeout(bomb_timeout)
                // failed then reject
                reject(err)
            })

        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
