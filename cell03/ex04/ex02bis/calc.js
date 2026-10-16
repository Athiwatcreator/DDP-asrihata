$(document).ready(function () {

    // ตรวจสอบว่าเป็นจำนวนเต็มบวก (>= 0) หรือไม่
    function isPositiveInteger(value) {
        return /^\d+$/.test(value);
    }

    $('#calcForm').submit(function (e) {
        e.preventDefault(); // ป้องกันการ reload หน้า

        const left = $('#left').val().trim();
        const operator = $('#operator').val();
        const right = $('#right').val().trim();

        // ตรวจสอบว่าเป็นจำนวนเต็มบวกทั้งสองช่อง
        if (!isPositiveInteger(left) || !isPositiveInteger(right)) {
            alert('Error :(');
            return;
        }

        const num1 = Number(left);
        const num2 = Number(right);
        let result;

        // ตรวจสอบหารหรือ modulo ด้วยศูนย์
        if ((operator === '/' || operator === '%') && num2 === 0) {
            alert("It's over 9000!");
            return;
        }

        // คำนวณตาม operator
        switch (operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num1 / num2; break;
            case '%': result = num1 % num2; break;
        }

        // แสดงผลใน alert และ console
        alert(result);
        console.log(result);
    });

    // ทุก 30 วินาที แสดง alert "Please, use me..."
    setInterval(function () {
        alert('Please, use me...');
    }, 30000);
});