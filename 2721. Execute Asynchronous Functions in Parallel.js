/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {

    return new Promise((resolve,reject) => {

        let result = [];
        let executedFucntions = 0;

        const runFunction = () => {
            if (functions.length === 0) {
                reject();
            }

            for (let i = 0; i < functions.length;i++) {
                functions[i]()
                    .then((res)=> {
                        executedFucntions++;
                        result[i] = res;
                        if (executedFucntions === functions.length) {
                            resolve(result);
                        }
                    })
                    .catch((err)=> {
                        reject(err);
                    })
            }
        }
        runFunction();

    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
