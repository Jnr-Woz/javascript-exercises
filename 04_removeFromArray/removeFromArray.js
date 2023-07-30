const removeFromArray = function(array, ...elements) {
    // array.filter to remove highlighted numbers in the rest parameter
    const filteredArray = array.filter(element => {

        for(let i = 0, length = elements.length; i < length; i++) {
            if (element === elements[i]) {
                return false; 
            }
        }

        return true;
    });
    // return filtered array
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;