/* =========================
   MOBILE MENU AUTO CLOSE
========================= */
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (menuToggle) {
                menuToggle.checked = false;
            }
        });
    });
});


/* =========================
   ORDER NOW (WHATSAPP)
========================= */
function orderNow(productName) {
    const phoneNumber = "919999999999"; // 🔴 CHANGE TO YOUR NUMBER
    const message = `Hello SMF Fitness, I want to order ${productName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}


/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


/* =========================
   IMAGE ERROR FALLBACK
========================= */
document.querySelectorAll("img").forEach(img => {
    img.onerror = () => {
        img.src = "img/no-image.png"; // optional fallback image
    };
});


/* =========================
   SIMPLE PAGE LOADER (OPTIONAL)
========================= */
window.addEventListener("load", () => {
    console.log("SMF Fitness Website Loaded Successfully");
});
