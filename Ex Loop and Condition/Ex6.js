//Viết một chương trình JavaScript tính điểm trung bình của các học sinh sau đây
function diemTrungBinh(hocsinh,diem){
    if(diem < 60){
        console.log(hocsinh + " có điểm trung bình F");
    } else if(diem < 70 && diem >60){
        console.log(hocsinh + " có điểm trung bình D");
    } else if(diem < 80 && diem >70){
        console.log(hocsinh + " có điểm trung bình C");
    } else if(diem < 90 && diem >80){
        console.log(hocsinh + " có điểm trung bình B");
    } else if(diem < 100 && diem >90){
        console.log(hocsinh + " có điểm trung bình A");
    }
}
diemTrungBinh(hocsinh,80);
