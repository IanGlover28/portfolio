// JavaScript to hide the pre-loader after 2 seconds
window.onload = function() {
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
        AOS.init();
    }, 2000); // 2000 milliseconds = 2 seconds
};