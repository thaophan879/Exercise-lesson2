//Viết một hàm JavaScript để cắt chuỗi nếu nó dài hơn một số ký tự cụ thể.
const str = "We are doing JS string exercises.";
const str1 = "!!";
const n = 19;
if (str.length >n )
{
    if (str1 ==='')
    {
        console.log(str.slice(0,n)+" "+"...");
    }
    else console.log(str.slice(0,n)+" "+str1);
} 
else console.log(str);