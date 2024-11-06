// JavaScript to handle preloader with a 12-second delay
window.addEventListener("load", function () {
    setTimeout(function() {
        // Hide Deadpool preloader
        const preloader = document.getElementById("preloader");
        preloader.style.display = "none";

        // Show main content after the delay
        const content = document.getElementById("content");
        content.style.display = "block";
    }, 12000); // 12 seconds delay
});