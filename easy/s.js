var largestOddNumber = function(num) {
    if(!num) {
        return "";
    } else {
        let biggest = 0;
        if(num%2 !== 0) {
            return num;
        } else {
            num.toString().split("").filter((i) => {
                if(i%2 !== 0 && i > biggest && i !== 0){
                    biggest = i;
                }  
            });
        }
            return biggest == 0 ? "" : biggest;
    }
};

console.log(largestOddNumber(52));
