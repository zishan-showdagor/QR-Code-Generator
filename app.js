let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');
let errorMsg = document.getElementById('errorMsg');

function generateQR() {
  // Clear previous error messages
  errorMsg.style.display = 'none';
  errorMsg.textContent = '';

  // Check if input is empty
  if (qrText.value.trim().length === 0) {
    errorMsg.textContent = 'Please enter text or a URL';
    errorMsg.style.display = 'block';
    imgBox.classList.remove('show-img');
    qrImage.src = ''; // Clear the image
    return;
  }

  // Generate QR code with encoded input
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText.value)}`;
  qrImage.src = qrUrl;

  // Show the image box only after confirming the image loads
  qrImage.onload = function () {
    imgBox.classList.add('show-img');
  };

  // Handle image load failure
  qrImage.onerror = function () {
    errorMsg.textContent = 'Failed to generate QR code. Please try again.';
    errorMsg.style.display = 'block';
    imgBox.classList.remove('show-img');
  };
}