/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {

    const run_promise = await Promise.all([promise1,promise2])
    .then((res) => {
        let result = 0;
        for (let i = 0; i < res.length; i++) {
            result += res[i]
        }
        return result
    })
    return run_promise
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
