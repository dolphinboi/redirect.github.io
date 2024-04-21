// Check if localStorage is supported
if (typeof(Storage) !== "undefined") {
    // Check if user is already present
    if (localStorage.getItem("userLoggedIn")) {
        alert("Sorry, another user is already on this website.");
        // Redirect user or show appropriate message
        // For simplicity, we'll just disable the enter button
        document.getElementById("enterButton").disabled = true;
    } else {
        // Set user as logged in
        localStorage.setItem("userLoggedIn", true);
        // Add event listener to clear localStorage when the user leaves the website
        window.addEventListener("beforeunload", function() {
            localStorage.removeItem("userLoggedIn");
        });
    }
} else {
    alert("Sorry, your browser does not support web storage. This website requires it to function properly.");
}
