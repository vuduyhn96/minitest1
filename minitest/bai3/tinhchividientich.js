function tinhchuvi() {
    let a = parseFloat(prompt("Nhập độ dài cạnh hình vuông (a):"));
    if (isNaN(a) || a <= 0) {
        alert("Vui lòng nhập số .");
        return;
    }
    let chuVi = 4 * a;
    let dienTich = a * a;
    var result = document.createElement("p");
    result.innerHTML = "Chu vi của hình vuông : " + chuVi + "<br>"
        + "Diện tích của hình vuông : " + dienTich + "<br>"
        + "Độ dài cạnh của hình vuông : " + a;
    document.body.appendChild(result);
}
window.onload = tinhchuvi();