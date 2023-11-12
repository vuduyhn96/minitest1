function tinhTong() {
    let a = parseInt(prompt("Nhập giá trị a:"));
    let b = parseInt(prompt("Nhập giá trị b:"));

    if (isNaN(a) || isNaN(b)) {
        alert("Vui lòng nhập số nguyên.");
        return;
    }
    let tong = 0;
    for (let i = a; i <= b; i++) {
        tong += i;
    }
    let result= document.createElement("p");
    result.innerHTML = "Tổng các số từ " + a + " đến " + b + " là: " + tong;
    document.body.appendChild(result);
}
window.onload = tinhTong;