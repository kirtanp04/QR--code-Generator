let qr_code = document.querySelector("#qr-code");
let code_img = document.querySelector("#code-img");
let loader = document.querySelector("#loading");

qr_code.addEventListener("click", ()=>{

    loader.style.display = "block";

    code_img.onload = function(){
        loader.style.display = "none"
    }

    let input = document.querySelector("input").value;
    // let api = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input}`

    code_img.setAttribute("src",`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input}`);
})