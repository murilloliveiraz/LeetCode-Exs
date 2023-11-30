Array.prototype.last = function() {
    if (this.length) {
        return this[this.length -1]
    }
    return -1;
};


const arr = [1, {}, 5];
console.log(arr.last()) // 3