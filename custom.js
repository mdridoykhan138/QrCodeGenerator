// Main javaScript area here 
// let imgBoxQr = document.getElementById("imgBoxQr");
// let imgQr = document.getElementById("imgQr");
// let textQr = document.getElementById("textQr");

// function generateQr(){
//     if(textQr.value.length > 0){
//         imgQr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textQr.value;
//         imgBoxQr.classList.add("imgShow");
//     }else{
//         textQr.classList.add("error");
//         setTimeout(()=>{
//             textQr.classList.remove("error")
//         },1000);
//     }
// }


function qrCodeGeneratorApp() {
    // Get the necessary HTML elements
    let imgBoxQr = document.getElementById("imgBoxQr"); // Container for QR code image
    let imgQr = document.getElementById("imgQr"); // QR code image element
    let textQr = document.getElementById("textQr"); // Input field for QR code text
    let generateBtn = document.getElementById("generateBtn"); // Button to trigger QR generation

    // Function to generate QR code
    function generateQr() {
        // Check if the input field has some text
        if (textQr.value.length > 0) {
            // Set the source of the QR image to the API with the entered data
            imgQr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textQr.value;
            
            // Add a class to show the QR image container
            imgBoxQr.classList.add("imgShow");
        } else {
            // Add an error class to the input field if it's empty
            textQr.classList.add("error");

            // Remove the error class after 1 second
            setTimeout(() => {
                textQr.classList.remove("error");
            }, 1000);
        }
    }

    // Attach the `generateQr` function to the button click event
    generateBtn.addEventListener("click", generateQr);
}

// Initialize the QR Code Generator app when the document is ready
qrCodeGeneratorApp();

// Main javaScript area ends here 