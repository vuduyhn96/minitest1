function kiemtratamgiac() {
    let a = parseFloat(prompt("a:"));
    let b = parseFloat(prompt("b:"));
    let c = parseFloat(prompt("c:"));

    if (a + b > c && a + c > b && b + c > a) {
        var result = "Đây là tam giác";

        if (a * a + b * b === c * c || b * b + c * c === a * a || c * c + a * a === b * b) {
            result += " và là tam giác vuông";
        }

        var messi = document.createElement("p");
        messi.innerHTML = result;
        document.body.appendChild(messi);
    } else {
        alert("Số này không tạo thành tam giác.");
    }
}

window.onload = kiemtratamgiac;