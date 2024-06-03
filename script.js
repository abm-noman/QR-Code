document.getElementById('generate-btn').addEventListener('click', function() {
    var qr;
    var text = document.getElementById('text-input').value;
    if (!text) {
        alert('Please enter text or URL');
        return;
    }

    qr = new QRious({
        element: document.getElementById('qrcode'),
        value: text,
        size: 200
    });
});
