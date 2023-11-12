let result = 0;
document.getElementById("result").innerText = result;
function messi() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    result = a * b;
    document.getElementById("result").innerText = result;
}