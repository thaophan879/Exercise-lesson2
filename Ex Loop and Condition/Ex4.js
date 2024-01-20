//Viết một câu lệnh điều kiện JavaScript để tìm số lớn nhất trong năm số.
function lonNhat(array) {
    let max = array[0];
    for (let i = 0; i < array.lenght; ++i) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    console.log(max);
}
let array1 = [-5, -2, -6, 0, -1];
lonNhat(array1);