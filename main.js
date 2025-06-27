
const btn = document.querySelector(".qr-button");

const qr_code_element = document.querySelector(".qr-code");

const downloadLink = document.getElementById("downloadLink");

btn.addEventListener("click", () => { 
  const user_input = document.querySelector("#input_text");

 
  if (user_input.value !== "") {
    
    if (qr_code_element.childElementCount === 0) {
      generate(user_input);
    } else {
    
      qr_code_element.innerHTML = "";
      generate(user_input);
    }
  } else {
 
    console.log("Invalid input");
    qr_code_element.style.display = "none";
    downloadLink.style.display = "none";
  }
});


function generate(user_input) {

  qr_code_element.style.display = "block";
  qr_code_element.style.marginTop = "20px";
  qr_code_element.style.marginBottom = "20px";

  
  const qrcode = new QRCode(qr_code_element, {
    text: `${user_input.value}`,      
    width: 180,                        
    height: 180,                       
    colorDark: "#000000",              
    colorLight: "#FFFFFF",             
    correctLevel: QRCode.CorrectLevel.H 
  });

  
  setTimeout(() => {
    const qr_code_canvas = document.querySelector("canvas");
    const paddedCanvas = addPaddingToQRCode(qr_code_canvas, 20); 

    
    downloadLink.style.display = "block";
    downloadLink.href = paddedCanvas.toDataURL("image/png");
    downloadLink.download = "qrcode.png"; 
  }, 300);
}


function addPaddingToQRCode(originalCanvas, padding) {
  const canvas = document.createElement("canvas");
  canvas.width = originalCanvas.width + padding * 2;
  canvas.height = originalCanvas.height + padding * 2;

  const context = canvas.getContext("2d");


  context.fillStyle = "#FFFFFF";
  context.fillRect(0, 0, canvas.width, canvas.height);


  context.drawImage(originalCanvas, padding, padding);

  return canvas;
}


tippy('#About', {
  arrow: true, 
  content: 'Created By Habib', 
  animation: 'fade' 
});


document.getElementById("About").addEventListener("click", () => {
  window.open("https://github.com/Fikr-Habib", "_blank"); 
});

