function findMax() {
    let num1 = parseInt(prompt("Nhập số thứ nhất:"));
    let num2 = parseInt(prompt("Nhập số thứ hai:"));
    let num3 = parseInt(prompt("Nhập số thứ ba:"));

// Tìm giá trị lớn nhất
    let max = num1;

    if (num2 > max) {
        max = num2;
    }

    if (num3 > max) {
        max = num3;
    }
    document.getElementById("result").innerHTML = "Giá trị lớn nhất là: " + max;
}
findMax();