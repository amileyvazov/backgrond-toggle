const inpEl = document.querySelector(".input");

const bodyEl = document.querySelector("body")

inpEl.checked = JSON.parse(localStorage.getItem("mode")); 


updateBody();

function updateBody(){
    if(inpEl.checked){
      bodyEl.style.background = "black";
    }else{
        bodyEl.style.background = "white";
    }
};

inpEl.addEventListener("input", () =>{
    updateBody();
    updateLocalStorage()
});

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inpEl.checked))
}