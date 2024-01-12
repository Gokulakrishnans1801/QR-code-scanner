let inputText = document.getElementById("textinput");
let qrContainer = document.getElementById("qr-container");
let ImgQRCode = document.getElementById("qrCodeImg");
function on() {
  if (inputText.value.length > 0) {
    // src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=projectQR"
    ImgQRCode.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=projectQR =" +
      inputText.value;
      qrContainer.classList.add("addClassName");
    console.log(ImgQRCode.src);
  }
  else{
      qrContainer.classList.remove("addClassName");

  }
}
