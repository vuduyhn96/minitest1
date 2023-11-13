function checkNumber() {
    let  inputElement = document.getElementById("inputNumber");
    let inputValue = parseInt(inputElement.value);
    if (inputValue > 0) {
    document.getElementById("result").innerHTML = "Số này lớn hơn 0.";
    } else if (inputValue <0) {
    document.getElementById("result").innerHTML = "số này nhỏ hơn 0";}
    else {
        document.getElementById("result").innerHTML = "số này bằng 0.";
        }

}