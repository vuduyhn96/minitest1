function tinh() {
    var a = parseFloat(prompt("Nhập giá trị a:"));
    var b = parseFloat(prompt("Nhập giá trị b:"));
    if (isNaN(a) || isNaN(b)) {
        alert("Vui lòng nhập số.");
        return;
    }
    let a1 = Math.pow(a, 2);
    let a2 = Math.pow(a, b);
    var result= document.createElement("p");
    result.innerHTML = "a^2 = " + a1 + "<br>"
        + "a^b = " + a2 ;
    document.body.appendChild(result);
}
window.onload = tinh();