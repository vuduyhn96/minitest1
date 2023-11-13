function checkAge() {
    var age = document.getElementById("age").value;
    var htmlElement = document.getElementById("result");
    if (age >= 16) {
        htmlElement.innerText = " Bạn đủ điều kiện .";
    } else {
        htmlElement.innerText = "bạn chưa đủ tuổi .";
    }
}