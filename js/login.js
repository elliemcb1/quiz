document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Fetch username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic check (for demo purposes)
    if (username === "quiz" && password === "SimpsonsDisney") {
        // Redirect to quiz selection page
        window.location.href = "choose.html";
    } else {
        alert("Invalid username or password!");
    }
});
