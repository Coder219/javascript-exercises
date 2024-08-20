const repeatString = function(string,repeats) {
    let output='';
    if (repeats<0){
        return'ERROR';
    }
    for (let num=0; num<repeats; num++){
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
