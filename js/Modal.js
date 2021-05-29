let opacity = 0;
let intervalID=0;

class Modal {

    constructor(){
        this.title = "";
        this.content = "";
        this.isActivated = false;
        this.back_modal = document.getElementById("back");
        this.front = document.getElementById("front");
        this.effect = () => {alert("bite")};

        this.front.addEventListener('click', () => {
           document.getElementById("modal").classList.add('modal-flip');
        });


        this.back_modal.addEventListener('click', () => {
            intervalID=setInterval(this.modalClear,20);
        });        
    }

    modalSetUp(modal_header, modal_content, effect) {
        gController.changeStateTo(gController.STATES.PAUSE);
        this.effect = effect;
        this.effect();
        let t = document.querySelector(".modal-back > .title");
        let c = document.querySelector(".modal-back > .modal-desc");

        t.innerHTML = modal_header;
        c.innerHTML = modal_content;
        this.fadeIn();
    }
    
    fadeIn() {
        let modal = document.getElementById("modal-container");
        modal.style.display = "inherit";
        intervalID=setInterval(this.modalShow,20);
    }
     
    modalShow() {
        let modal = document.getElementById("modal-container");
        opacity = Number(window.getComputedStyle(modal).getPropertyValue("opacity"));
    
        if(opacity<1)
        {
            opacity += 0.1;
            modal.style.opacity=opacity;
        }
        else clearInterval(intervalID); 
    }
    
    modalClear() {
        let modal = document.getElementById("modal-container");
        opacity = Number(window.getComputedStyle(modal).getPropertyValue("opacity"));
        if(opacity>0)
        {
            opacity -= 0.1;
            modal.style.opacity=opacity;
        }
        else {
            clearInterval(intervalID);
            modal.style.display = "none";
            gController.cooldown++;
            gController.modal.isActivated = false;
            document.getElementById("modal").classList.remove('modal-flip');
            gController.changeStateTo(gController.STATES.INGAME);
        }
    }
}