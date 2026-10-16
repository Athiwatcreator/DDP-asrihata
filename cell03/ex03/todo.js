// ฟังก์ชันบันทึก cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

// ฟังก์ชันอ่าน cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}

// ฟังก์ชันบันทึก list ลง cookie
function saveTodos() {
    const list = document.getElementById('ft_list');
    const todos = [];
    const children = list.children;
    for (let i = 0; i < children.length; i++) {
        todos.push(children[i].textContent);
    }
    setCookie('todo_list', JSON.stringify(todos), 7);
}

// ฟังก์ชันโหลด list จาก cookie
function loadTodos() {
    const cookie = getCookie('todo_list');
    if (cookie) {
        const todos = JSON.parse(cookie);
        for (let i = todos.length - 1; i >= 0; i--) {
            addTodo(todos[i], false);
        }
    }
}

// ฟังก์ชันเพิ่ม todo
function addTodo(text, save = true) {
    if (!text || text.trim() === '') return;

    const list = document.getElementById('ft_list');
    const div = document.createElement('div');
    div.textContent = text.trim();

    div.addEventListener('click', function () {
        if (confirm('คุณต้องการลบรายการนี้หรือไม่?')) {
            div.remove();
            saveTodos();
        }
    });

    list.insertBefore(div, list.firstChild);

    if (save) {
        saveTodos();
    }
}

// เมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener('DOMContentLoaded', function () {
    loadTodos();

    document.getElementById('new').addEventListener('click', function () {
        const text = prompt('กรุณาใส่รายการ To Do ใหม่:');
        if (text !== null) {
            addTodo(text);
        }
    });
});