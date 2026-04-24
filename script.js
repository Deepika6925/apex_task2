document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "") {
        error.textContent = "All fields are required!";
    } 
    else if (!email.match(emailPattern)) {
        error.textContent = "Invalid email format!";
    } 
    else {
        error.textContent = "Form submitted successfully!";
    }
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;

    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = function() {
        li.remove();
    };

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

