/*
var char = prompt("Enter a character");

if((char == "a") || (char == "A")) {
alert("It is a vowel");
}
else if((char == "e") || (char == "E")){
alert("It is a vowel");
}
else if((char == "i") || (char == "I")){
alert("It is a vowel");
}
else if((char == "o") || (char == "O")){
alert("It is a vowel");
}
else if((char == "u") || (char == "U")){
alert("It is a vowel");
}
else{
alert("It is a consonant");
}
*/
 
var char = prompt("Enter a character");

switch(char){
case 'a' :
case 'A' :
alert("It is a vowel");
break;
case 'e' :
case 'E' :
alert("It is a vowel");
break;
case 'i' :
case 'I' :
alert("It is a vowel");
break;
case 'o' :
case 'O' :
alert("It is a vowel");
break;
case 'u' :
case 'U' :
alert("It is a vowel");
break;

default :
alert("It is a consonant");
break;
}





