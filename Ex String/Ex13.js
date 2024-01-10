//Viết một hàm JavaScript để chèn một chuỗi vào một chuỗi khác ở một vị trí cụ thể 
const str = "We are doing some exercises.";
const str1 = "JavaScript ";
let n = 18;
if (n==0)
{
    console.log(str1 + " " + str);
}
else console.log(str.slice(0,n)+ " " +str1+ " " +str.slice(n));
