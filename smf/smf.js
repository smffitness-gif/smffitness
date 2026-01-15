// ---------- NAVIGATION FUNCTIONS ----------

// Home page navigation
function home() {
    event.preventDefault(); // stop page reload
    window.location.href = "ORG smf file.html";
}

// Supplements page navigation
function supp() {
    event.preventDefault(); // stop page reload
    window.location.href = "products.html";
}


// ---------- HAMBURGER MENU AUTO CLOSE ----------

document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu a");
    const menuToggle = document.getElementById("menu-toggle");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (menuToggle) {
                menuToggle.checked = false; // close menu after click
            }
        });
    });
});


// ---------- ORDER BUTTON FUNCTION ----------

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {
        if (btn.innerText.toUpperCase() === "ORDER") {
            btn.addEventListener("click", () => {
                alert("Order placed successfully! We will contact you soon 💪");
            });
        }
    });
});


// ---------- IMAGE CLICK SAFETY ----------
// Prevent broken navigation if image link is missing
document.addEventListener("click", function (e) {
    if (e.target.tagName === "A" && e.target.getAttribute("href") === "") {
        e.preventDefault();
    }
});
