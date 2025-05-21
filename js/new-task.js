document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const desc = document.getElementById('desc').value;
    // تبدیل نام کاربری فارسی به فینگلیش
    const userMap = {
        "آرتا": "arta",
        "راستین": "rastin",
        "آرمین": "armin"
    };
    const faUser = localStorage.getItem('currentUser');
    const responsible = userMap[faUser] || faUser;
    const responsibles = [responsible];
    const status = document.getElementById('status').value;
    const fatNumber = document.getElementById('fat-number').value;
    let finalStatus = status;
    if (status === "FAT" && fatNumber) {
        finalStatus = status + " | " + fatNumber;
    }
    const task = {
        date,
        desc,
        responsibles,
        status: finalStatus
    };
    const currentUser = localStorage.getItem('currentUser');
    let tasks = JSON.parse(localStorage.getItem('tasks_' + currentUser) || '[]');
    tasks.push(task);
    localStorage.setItem('tasks_' + currentUser, JSON.stringify(tasks));
    window.location.href = "../index.html";
});