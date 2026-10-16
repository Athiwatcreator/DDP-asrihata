$(document).ready(function () {

    const $list = $('#ft_list');

    // ฟังก์ชันบันทึก cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + "=" + encodeURIComponent(value) +
            ";expires=" + date.toUTCString() + ";path=/";
    }

    // ฟังก์ชันอ่าน cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            const c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) {
                return decodeURIComponent(c.substring(nameEQ.length));
            }
        }
        return null;
    }

    // ฟังก์ชันบันทึก list ลง cookie
    function saveTodos() {
        const todos = [];
        $list.children().each(function () {
            todos.push($(this).text());
        });
        setCookie('todo_list', JSON.stringify(todos), 7);
    }

    // ฟังก์ชันเพิ่ม todo
    function addTodo(text, save = true) {
        if (!text || text.trim() === '') return;

        const $div = $('<div></div>').text(text.trim());

        $div.click(function () {
            if (confirm('คุณต้องการลบรายการนี้หรือไม่?')) {
                $(this).remove();
                saveTodos();
            }
        });

        $list.prepend($div);

        if (save) {
            saveTodos();
        }
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

    // โหลดรายการเก่าตอนเปิดหน้า
    loadTodos();

    // ปุ่ม New
    $('#new').click(function () {
        const text = prompt('กรุณาใส่รายการ To Do ใหม่:');
        if (text !== null) {
            addTodo(text);
        }
    });
});