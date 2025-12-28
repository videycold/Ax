/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    shareLinks.style.display =
        shareLinks.style.display === "flex" ? "none" : "flex";
};

shareBtn.onclick = () => {

window.open("https://s.shopee.co.id/1qUwqITVOR");
}

/* REDIRECT */
const video = document.getElementById("video");
video.addEventListener("play", () => {
    setTimeout(() => {
        window.location.href = "https://s.shopee.co.id/8V27Gildgm";
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



