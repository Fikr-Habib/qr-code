
document.getElementById("addInputBtn").addEventListener("click", () => {
  const inputContainer = document.getElementById("input-container");

  
  const inputGroup = document.createElement("div");
  inputGroup.className = "input-group";

  // Create a new input field
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "input_text";
  newInput.className = "qr-input";
  newInput.placeholder = "Enter text or URL";
  newInput.autocomplete = "off";

  // Create a remove button
  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.textContent = "Remove";
  removeBtn.setAttribute("onclick", "removeInput(this)");

  
  inputGroup.appendChild(newInput);
  inputGroup.appendChild(removeBtn);


  inputContainer.appendChild(inputGroup);
});


function removeInput(element) {
  element.parentElement.remove(); 
}

// Function to generate QR codes for all input fields
document.getElementById("generateBtn").addEventListener("click", () => {
  const inputElements = document.querySelectorAll(".qr-input");
  const qrCodesContainer = document.getElementById("qr-codes-container");

 
  qrCodesContainer.innerHTML = "";

  
  inputElements.forEach((inputElement, index) => {
    const inputValue = inputElement.value.trim();

    if (inputValue !== "") {
    
      const qrDiv = document.createElement("div");
      qrDiv.className = "qr-code";
      qrCodesContainer.appendChild(qrDiv);

      // Generate the QR code using qrcode.js
      const qrCode = new QRCode(qrDiv, {
        text: inputValue,
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.H
      });

      // After rendering the QR code, create a download link for it
      setTimeout(() => {
        const qrImage = qrDiv.querySelector("img");
        const downloadLink = document.createElement("a");
        downloadLink.className = "download-link";
        downloadLink.href = qrImage.src;
        downloadLink.download = `qrcode_${index + 1}.png`;
        downloadLink.textContent = `Download QR Code ${index + 1}`;
        qrDiv.appendChild(downloadLink);
      }, 300); 
    }
  });
});


document.getElementById("downloadAllBtn").addEventListener("click", () => {
  const qrImages = document.querySelectorAll(".qr-code img");

  
  qrImages.forEach((qrImg, index) => {
    const link = document.createElement("a");
    link.href = qrImg.src;
    link.download = `qrcode_${index + 1}.png`;
    link.click();
  });
});

tippy('#About', {
  arrow: true, 
  content: 'Created By Habib', 
  animation: 'fade' 
});


document.getElementById("About").addEventListener("click", () => {
  window.open("https://github.com/Fikr-Habib", "_blank"); 
});
