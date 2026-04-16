function greetUser() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("message").innerHTML = "Hello, " + name + "!";
}
