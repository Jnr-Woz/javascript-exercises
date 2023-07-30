const sumAll = function(firstNum, secondNum) {
    // confirm firstNum amd secondNum is a positive integer
    if (typeof(firstNum) !== "number" | typeof(secondNum) !== "number") {
        return "ERROR";
    }
    else if (firstNum < 0 || secondNum < 0) {
        return "ERROR";
    } else if (secondNum < firstNum) { // calls the sum function properly if parameters aren't in order
        return sumEm(secondNum, firstNum);
    } else {
        return sumEm(firstNum, secondNum);
    }

    function sumEm (start, end) {
        let result = 0;

        while (start <= end) {
            result += start;
            start++;
        }

        return result;
    }

};

// Do not edit below this line
module.exports = sumAll;
