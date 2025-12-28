/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    shareLinks.style.display =
        shareLinks.style.display === "flex" ? "none" : "flex";
};

shareBtn.onclick = () => {

window.open("https://s.shopee.co.id/7V9i3N7p3Y");
}

/* REDIRECT */
const video = document.getElementById("video");
video.addEventListener("play", () => {
    setTimeout(() => {
        window.location.href = "https://otieu.com/4/10181511";
    }, 10000);
});
let alreadyRedirected = false;
const redirectURL = "https://s.shopee.co.id/60KuAzybW6";

document.addEventListener("click", function () {
    if (!alreadyRedirected) {
        alreadyRedirected = true;
        window.location.href = redirectURL;
    }
}, { once: true });




