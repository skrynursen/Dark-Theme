const gecebtn = document.querySelectorAll("button")[0];
const newBody = document.body;

gecebtn.addEventListener("click" , function(){
    gecebtn.classList.toggle("gece");
    newBody.classList.toggle("dark-mode");

    if(gecebtn.classList.contains("gece")){        
        gecebtn.innerText = "Gündüz Modu"
    }
    else{
        gecebtn.innerText = "Gece Modu";

    }  
    console.log(newBody);
    
});