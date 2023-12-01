var arrayStringsAreEqual = function(word1, word2) {
    if(word1.join("") == word2.join("")) return true;
    return false;
};

var w1 = ["a", "bc"];
var w2 = ["ab", "c"];

console.log(arrayStringsAreEqual(w1, w2))