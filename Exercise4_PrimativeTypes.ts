//number type
let num: number = 19;
console.log("I'm " + num + " years old");

//string type
let firstName: string = "Natasha";
let lastName: string = "Zywczyk"
console.log("My name is " + firstName + " " + lastName);

//boolean type
let college: boolean = true;
console.log("I'm in second year of college, which is " + college);

//array type
let birthDate: number[] = [11, 2, 2004];
console.log("My date of birth is " + birthDate[0] + "/" + birthDate[1] + "/" + birthDate[2]);

let birthDate2: Array<number> = [11, 2, 2004];
//loops for every value
birthDate2.forEach((item)=>{
    console.log("My date of birth is: " + item);
})

//any type- try to use specific types over this
let unknownType:any = "Unknown";
console.log("The value of unknwonType is: " + unknownType);