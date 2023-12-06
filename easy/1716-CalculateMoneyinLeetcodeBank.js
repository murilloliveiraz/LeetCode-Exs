var totalMoney = function(n) {
    if(!n) return 0;

    let day = 0;
    let weeks = 0;
    let counter = 0;
    let total = 0;
    for (let i = 0; i < n; i++) {
        if(0 == day){
            weeks += 1;
            counter = weeks;
        }
        total += counter;
        day = (day + 1)% 7;
        counter ++;
    }
    return total;
};

console.log(totalMoney(10));