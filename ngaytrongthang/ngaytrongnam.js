function checkMonth() {
    var month = parseInt(document.getElementById('month').value);
    var resultElement = document.getElementById('result');
    var daysInMonth;

    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            daysInMonth = 31;
            break;
        case 4: case 6: case 9: case 11:
            daysInMonth = 30;
            break;
        case 2:
            daysInMonth = 28;
            break;
        default:
            resultElement.innerHTML = 'Tháng không hợp lệ';
            return;
    }

    resultElement.innerHTML = 'Tháng ' + month + ' có ' + daysInMonth + ' ngày.';
}