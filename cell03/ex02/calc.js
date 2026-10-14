// ฟังก์ชันตรวจสอบว่าเป็นจำนวนเต็มบวก (>= 0) หรือไม่
function isPositiveInteger(value) {
    // ต้องเป็นตัวเลข และเป็นจำนวนเต็ม และ >= 0
    return /^\d+$/.test(value) && Number(value) >= 0;
}

document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault(); // ป้องกันการ reload หน้า

    const left = document.getElementById('left').value.trim();
    const operator = document.getElementById('operator').value;
    const right = document.getElementById('right').value.trim();

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
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
    }

    // แสดงผลใน alert และ console
    alert(result);
    console.log(result);
});

// ทุก 30 วินาที แสดง alert "Please, use me..."
setInterval(function() {
    alert('Please, use me...');
}, 30000); // 30000 มิลลิวินาที = 30 วินาที
