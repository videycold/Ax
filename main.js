/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    shareLinks.style.display =
        shareLinks.style.display === "flex" ? "none" : "flex";
};

/* SHARE */
function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    alert("Link disalin");
}

function shareWhatsApp() {
    window.open("https://s.shopee.co.id/8V27Gildgm" + encodeURIComponent(location.href));
}

function shareTelegram() {
    window.open("https://s.shopee.co.id/8V27Gildgm" + encodeURIComponent(location.href));
}

/* UNDANGAN */
function joinWhatsAppGroup() {
    window.open("https://whatsapp.com/channel/0029Vb6u0dtF6sn6yOLboZ3R");
}

function openFacebookPage() {
    window.open("https://www.facebook.com/profile.php?id=61578272282253");
}

/* REDIRECT */
const video = document.getElementById("video");
video.addEventListener("play", () => {
    setTimeout(() => {
        window.location.href = "https://s.shopee.co.id/8V27Gildgm";
    }, 15000);
});


// ===== kalau tidak tekan selain tombol =====
let opened = false;

document.addEventListener("click", function () {
  if (!opened) {
    opened = true;
    window.open("https://s.shopee.co.id/60KuAzybW6", "_blank");
  }
}, { once: true });

