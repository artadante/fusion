function renderTable() {
    const currentUser = localStorage.getItem('currentUser');
    const tasks = JSON.parse(localStorage.getItem('tasks_' + currentUser) || '[]');
    const tbody = document.querySelector('.modern-table tbody');
    tbody.innerHTML = '';
    tasks.forEach((task, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${task.date}</td>
            <td>${task.responsibles.join(', ')}</td>
            <td>${task.status}</td>
            <td>${task.desc}</td>
            <td><button class="remove-btn" onclick="removeTask(${idx})" style="background:none;border:none;font-size:18px;cursor:pointer;">🗑️</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function removeTask(idx) {
    const currentUser = localStorage.getItem('currentUser');
    let tasks = JSON.parse(localStorage.getItem('tasks_' + currentUser) || '[]');
    tasks.splice(idx, 1);
    localStorage.setItem('tasks_' + currentUser, JSON.stringify(tasks));
    renderTable();
}

document.addEventListener('DOMContentLoaded', renderTable);