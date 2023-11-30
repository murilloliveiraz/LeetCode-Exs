var compose = function(functions) {
    return function(x) {
        for(const fn of functions.reverse()) {
            x = fn(x);
        }
        return x;
    }
};

const fn = compose([x => x + 1, x => x * x, x => 2 * x], x = 4)
console.log(fn(4)) // 9