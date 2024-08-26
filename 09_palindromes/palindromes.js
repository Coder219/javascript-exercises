const palindromes = function (str) {
    let reversedStr = str.replace(/[\.,?!]/g,"").split("").reverse().join("").toLowerCase().split(" ").join("");
    return reversedStr === str.replace(/[\.,?!]/g, "").toLowerCase().split(" ").join("")
};

// Do not edit below this line
module.exports = palindromes;
