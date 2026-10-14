const balloon = document.getElementById('balloon');

let size = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

// คลิก → ขยาย +10px และเปลี่ยนสีตามลำดับ
balloon.addEventListener('click', function () {
    size += 10;
    colorIndex = (colorIndex + 1) % colors.length;

    // ถ้าใหญ่เกิน 420px → ระเบิด กลับไปขนาดเดิม
    if (size > 420) {
        size = 200;
        colorIndex = 0;
    }

    updateBalloon();
});

// เมาส์ออกจากลูกโป่ง → หด -5px (ไม่ต่ำกว่า 200px) และเปลี่ยนสีย้อนกลับ
balloon.addEventListener('mouseleave', function () {
    size = Math.max(200, size - 5);
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    updateBalloon();
});

function updateBalloon() {
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}