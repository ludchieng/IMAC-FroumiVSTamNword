
let opacity = 0;

console.log(Number(window.getComputedStyle(modal).getPropertyValue("opacity")));

function fadeIn() {
    let modal = document.getElementById("modal-container");
    modal.style.display = "inherit";
    intervalID=setInterval(modalShow,20);
}

function fadeOut() {
    let modal = document.getElementById("modal-container");
    intervalID=setInterval(modalClear,20);
}

function modalShow() {
    let modal = document.getElementById("modal-container");
    opacity = Number(window.getComputedStyle(modal).getPropertyValue("opacity"));

    if(opacity<1)
    {
        opacity += 0.1;
        modal.style.opacity=opacity;
        console.log(opacity);
    }
    else clearInterval(intervalID);
    
}

function modalClear()
{
    let modal = document.getElementById("modal-container");
    opacity = Number(window.getComputedStyle(modal).getPropertyValue("opacity"));
    if(opacity>0)
    {
        opacity -= 0.1;
        modal.style.opacity=opacity;
        console.log(opacity);
    }
    else {
        clearInterval(intervalID);
        modal.style.display = "none";
    }
}
