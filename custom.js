// Main javaScript area here 
let imgBoxQr = document.getElementById("imgBoxQr");
let imgQr = document.getElementById("imgQr");
let textQr = document.getElementById("textQr");

// function generateQr(){
//     imgQr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textQr.value;
//     imgBoxQr.classList.add("imgShow");
// }

function generateQr(){
    if(textQr.value.length > 0){
        imgQr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textQr.value;
        imgBoxQr.classList.add("imgShow");
    }else{
        textQr.classList.add("error");
        setTimeout(()=>{
            textQr.classList.remove("error")
        },1000);
    }
}