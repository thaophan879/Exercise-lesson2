//Viết một vòng lặp for JavaScript để duyệt từ 0 đến 15. Đối với mỗi lần lặp, kiểm tra xem số hiện tại là số chẵn hay số lẻ
function chanle(){
    for(i=0; i<=15;i++){
        if(i%2==0){
            console.log(i+ " là số chẵn");
        } else console.log(i+ " là số lẻ")
    }
}
chanle();