// Get the button
var mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function loadNavHeader() {
    fetch("nav-header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-header-container").innerHTML = data;
            // Move the event listener logic here, after nav-header loads
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('nav-links');
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        })
        .catch(() => {
            console.error("Failed to load nav-header.html");
        });
}

function loadFooter() {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(() => {
            console.error("Failed to load footer.html");
        });
}
