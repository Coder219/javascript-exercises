const fibonacci = function(num) {
    let intNum = parseInt(num);
    let fibSeq = [null,1,1];

    if (intNum === 0) return 0;
    if (intNum < 0) return "OOPS";
    
    for (let term = 3; term <= num; term ++) fibSeq.push(fibSeq[term-1] + fibSeq[term-2]);
    return fibSeq[intNum]
};

// Do not edit below this line
module.exports = fibonacci;
