var fichier = document.querySelector("input");

document.querySelector(".circle").addEventListener("click", ()=>{
    fichier.click();
})
        
fichier.addEventListener("change",(e)=>{
    if(e.target.files && e.target.files[0]){
        var photo = document.querySelector("img");
        photo.src = URL.createObjectURL(e.target.files[0]);
        photo.style.visibility = 'visible';
        }
    })