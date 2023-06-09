/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    yield 0;
    yield 1;
    let last_one = 1;
    let last_last_one = 0;
    while (true) {
        const current_one = last_one + last_last_one
        yield current_one;
        last_last_one = last_one;
        last_one = current_one;        
    }
    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
