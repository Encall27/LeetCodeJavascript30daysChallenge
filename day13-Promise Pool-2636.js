/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
    
    return new Promise((resolve,reject) => {
      
        let index = 0; 
        let inProgress = 0;
        
        function runFunctions() {
          
            // all functions start run and no function inprogress => all done
            if (index === functions.length && inProgress === 0) {
                resolve();
            }
            
            // 
            while (index < functions.length && inProgress < n) {
                console.log('now index: ', index, ' now inProgress :', inProgress)
                const tS = new Date();
                functions[index++]()
                    .then(() => {
                        const tE = new Date();
                        console.log('functions', (index-1),  'duration', tE - tS)
                        console.log('functions end time at :', tE - tStart)
                        inProgress--;
                        runFunctions();
                   })
                inProgress++;
            }
    
        }
        runFunctions();
    });
};
