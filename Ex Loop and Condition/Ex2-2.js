//Viết một chương trình JavaScript để tính tổng của các bội số của 3 và 5 nhỏ hơn 1000.
function tongBoiSo() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    console.log(sum);
}
tongBoiSo();