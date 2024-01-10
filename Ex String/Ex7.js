const string = "Robin Singh from USA.";
const string1 = string.split(" ");
const string2 = string1[0].toLowerCase();
const string3 = string1[1].toLowerCase();
const string4 = string1[2].toLowerCase();
const string5 = string1[3].toLowerCase();
console.log(string2+"-"+string3+"-"+string4+"-"+string5.slice(0,3));

