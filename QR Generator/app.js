const url=document.querySelector("#url");
const qrCode=document.querySelector("#qr-code img");
const btn=document.querySelector("#btn");

btn.addEventListener("click",()=>{
    if(url.value.length>0){
        qrCode.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+url.value;
    }
    else{
        alert("Please Enter Something");
    }
})