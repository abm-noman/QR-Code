let qrcode = document.getElementById("qrcode");
let qrImg = document.getElementById("qrImg");
let textInput = document.getElementById("text-input");

function generateQR() {
    document.getElementById("text").innerHTML = "Here is Your QR Code";
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textInput.value;
}
