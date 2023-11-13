function calculateBMI() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2);
}