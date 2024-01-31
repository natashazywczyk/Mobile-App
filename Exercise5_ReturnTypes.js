//read the amount of characters in a string, including spaces
var word = "Natasha Zywczyk";
var charNum;
function charCount(value) {
    charNum = value.length;
    return charNum;
}
charCount(word);
console.log("In '" + word + "', there is " + charNum + " letters");
//read amount of character in a string, ignoring spaces at beginning and end
var word2 = " Natasha Zywczyk ";
function charCount2(value) {
    return value.replace(" ", "").length;
}
console.log(charCount2("Natasha Zywczyk"));
//read amount of character in a string, giving the option of whether or not to include spaces
var charNum3;
function charCount3(value, spaces) {
    if (spaces) {
        charNum3 = value.length;
    }
    else {
        charNum3 = value.replace(" ", "").length;
    }
    return charNum3;
}
console.log(charCount3("Natasha Zywczyk", true));
console.log(charCount3("Natasha Zywczyk"));
