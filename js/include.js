// Loads the navigation bar into the page
// !! Put <div id="nav"></div> in each page where you want the menu

function loadNav() {
    fetch("nav.html")
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        document.getElementById("nav").innerHTML = data;
        highlightLink();
    });
}

  // Make the link for the current page look selected
    function highlightLink() {
    var page = window.location.pathname.split("/").pop();

    // if the address ends in "/" there is no file name, so use index.html
    if (page == "") {
    page = "index.html";
    }

    var links = document.getElementsByClassName("nav-link");

    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("href") == page) {
        links[i].className = links[i].className + " active";
        }
    }
}

loadNav();
