//number type
var num = 19;
console.log("I'm " + num + " years old");
//string type
var firstName = "Natasha";
var lastName = "Zywczyk";
console.log("My name is " + firstName + " " + lastName);
//boolean type
var college = true;
console.log("I'm in second year of college, which is " + college);
//array type
var birthDate = [11, 2, 2004];
console.log("My date of birth is " + birthDate[0] + "/" + birthDate[1] + "/" + birthDate[2]);
var birthDate2 = [11, 2, 2004];
birthDate2.forEach(function (item) {
    console.log("My date of birth is: " + item);
});
//any type- try to use specific types over this
var unknownType = "Unknown";
console.log("The value of unknwonType is: " + unknownType);
