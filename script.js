document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");

    calculateButton.addEventListener("click", calculateBMI);

    function calculateBMI() {
        const height = parseFloat(document.getElementById("height").value);
        const weight = parseFloat(document.getElementById("weight").value);

        if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
            const bmi = weight / ((height / 100) ** 2);
            const bmiResult = document.getElementById("bmiResult");
            bmiResult.textContent = bmi.toFixed(2);

            const healthStatus = document.getElementById("healthStatus");
            if (bmi < 18.5) {
                healthStatus.textContent = "น้ำหนักน้อย/ผอม";
            } else if (bmi >= 18.5 && bmi < 24.9) {
                healthStatus.textContent = "น้ำหนักปกติ";
            } else if (bmi >= 25 && bmi < 29.9) {
                healthStatus.textContent = "น้ำหนักเกิน";
            } else {
                healthStatus.textContent = "อ้วน";
            }
        } else {
            alert("กรุณากรอกข้อมูลส่วนสูงและน้ำหนักให้ถูกต้อง");
        }
    }
});
