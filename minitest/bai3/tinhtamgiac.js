function kiemtratamgiac()
{
    let a = parseFloat(prompt(" a:"));
    let b = parseFloat(prompt(" b:"));
    let c = parseFloat(prompt(" c:"));
    if (a + b > c && a + c > b && b + c > a) {
        let result = "Đây là tam giác";
        if (a === b && b === c) {
            result += " đều";
        } else if (a === b || b === c || a === c) {
            result += " cân";
        }
       let result = document.createElement("p");
        result.innerHTML = result;
        document.body.appendChild(result);
    } else {
        alert(" số này không tạo thành tam giác.");
    }
}
window.onload = kiemtratamgiac;