const leapYears = function(year) {
    
    // divisible by 100 method
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            return true;
        } else {
            return false;
        }
    }
    
    // divisible by 4 method
    if (year % 4 == 0) {
        return true;
    } else {
    return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

