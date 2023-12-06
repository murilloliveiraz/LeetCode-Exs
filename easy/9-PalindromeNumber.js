var isPalindrome = function(x) {
    let reversed = x.toString().split("").reverse().join("");
    if(reversed == x) {
        return true;
    }
    return false;
};

console.log(isPalindrome(123))
