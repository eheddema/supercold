document.addEventListener("DOMContentLoaded", function(e) {
    var container = document.getElementById("container"),
        button    = document.getElementById("sidebtn"),
        visible   = false,
        ignore    = true;

    var toggleButton = function() {
        container.className = visible ? "slide out" : "slide in";
        button.className = visible ? "icon" : "icon active";

        visible = !visible;
        ignore  = false;
    };

    button.addEventListener("touchstart" in window ? "touchstart" : "mousedown", function(e) {
        history.pushState(null, null);
        toggleButton();
        e.preventDefault();
    });

    window.addEventListener("popstate", function(e) {
        !ignore && toggleButton();
    });
}, false);
