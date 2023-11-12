function xacdinhtheky() {
    let nam = parseInt(prompt("Nhập năm:"));
    if (isNaN(nam) || nam <= 0) {
        alert(" nhập một năm hợp lệ.");
        return;
    }
    let theKy = Math.ceil(nam / 100);
    let result = document.createElement("p");
    result.innerHTML = "Năm " + nam + " thuộc thế kỷ " + theKy;
    document.body.appendChild(result);
}
window.onload = xacdinhtheky;