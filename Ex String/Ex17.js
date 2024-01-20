//Viết một hàm JavaScript để đếm số lần xuất hiện của một chuỗi con trong một chuỗi.

const str = "The quick brown fox The jumps over the lazy dog"
const str1 = "The";
const dem = str.split(str1).length - 1;
console.log(dem);
