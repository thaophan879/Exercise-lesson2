function uocChung(a, b) {
    let uocchung = 1;
    for (let i = 0; i < a && i < b; i++) {
        if (a % i === 0 && b % i === 0) {
            uocchung = i;
        }
    }
    console.log("UCLN là " + uocchung);
}
uocChung(15, 6);