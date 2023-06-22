const reverseString = function(string) {
    // create a reversedString that stores the string, it is = "" starting out
    // create a loop that goes thru the string starting from its (length - 1)
    // concatenate each char to reversedString using slice()
    // retrurn the reversedString at the end
    // done
    let reversedString = "";

    for (i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    
    return reversedString;
}
// Do not edit below this line
module.exports = reverseString;