//read the amount of characters in a string, including spaces
let word: string = "Natasha Zywczyk";
let charNum: number;

function charCount(value:string): number
{
    charNum = value.length;
    return charNum;
}

charCount(word);

console.log("In '" + word + "', there is " + charNum + " letters");

//read amount of character in a string, ignoring spaces at beginning and end
let word2: string = " Natasha Zywczyk ";

function charCount2(value:string): number
{    
    return value.replace(" ", "").length;
}

console.log(charCount2("Natasha Zywczyk"));

//read amount of character in a string, giving the option of whether or not to include spaces
let charNum3: number;

//'?' makes it an optional parameter
function charCount3(value:string, spaces?:boolean)
{
    if(spaces)
    {
        charNum3 = value.length;
    }
    else
    {
        charNum3 = value.replace(" ", "").length;
    }
    
    return charNum3;
}

console.log(charCount3("Natasha Zywczyk", true));
console.log(charCount3("Natasha Zywczyk"));
