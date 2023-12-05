let num = prompt("Enter your number : ");

if (num>=101) {
    console.log("invalid number");
} else if (num>=90 && num<=100) {
    console.log("your grate is 'A+'");
} else if(num>=80 &&  num<=89) {
    console.log("your grate is 'A' ");
} else if (num>=70 && num<=69) {
    console.log("your grate is 'A-' ");
} else if (num>=60 && num<=59) {
    console.log("your grate is 'B' ");
} else if (num>=50 && num<=59) {
    console.log("your grate is 'c' ");
} else if (num>=40 && num<=39) {
    console.log("your grate is 'd' ");
} else if (num>=38 && num<=33) {
    console.log("your grate is 'E' ");
} else {
    console.log("your are fail");
}

let num1 = prompt("Enter num1 : ")
let num2 = prompt("Enter num2 : ")
let num3 = prompt("Enter num3 : ")

if (num1>num2 && num1<num3) {
    console.log("Small number " + num1);
} else if (num2>num1 && num2<num3) {
    console.log("Large number " + num2);
} else {
    console.log("large number 3 " + num3); 
}



// @switch use 

let lette1 = prompt("Enter a letter : ");

    letter = letter.toLowerCase();

switch (lette1) {
    case "a":
       console.log("vowel");
       break;
    case "e":
       console.log("vowel");
       break;
    case "i":
       console.log("vowel");
       break;
    case "o":
       console.log("vowel");
       break;
    case "u":
       console.log("vowel");
       break;
    default : 
       console.log("consonant")  
}



let letter = prompt("Enter a letter : ");

    letter = letter.toLowerCase();

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "a e i o u":    
       console.log("vowel");
       break;

    default : 
       console.log("consonant")   
}