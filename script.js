window.addEventListener('load',function(){
    const container = document.querySelector(".container");
    const hamburg = document.querySelectorAll(".nav-bar img");
    const menu = document.querySelector(".nav-bar table");
    const header = document.querySelector(".header");
    const overlay = document.querySelectorAll(".overlay");
    const about = document.querySelectorAll(".amount a");
    const selModal = document.querySelector(".selection-modal");
    const selModalClose = document.querySelector(".selection-modal span img");
    const pledge = document.querySelectorAll(".pledge");
    const radioButton = document.querySelectorAll(".sub-pledge1 label input");
    const subPledge = document.querySelectorAll(".sub-pledge");
    const label = document.querySelectorAll(".sub-pledge1 label");
    const continueButton = document.querySelectorAll(".sub-pledge .next");
    const completed = document.querySelector(".completed");
    const completeButton = document.querySelector(".completed a");
    const checkFirst = document.querySelector("label .check-first");

    let hamb = "images/icon-hamburger.svg";
    let close = "images/icon-close-menu.svg";

    //Menu icon
    hamburg[1].addEventListener('click',function(){
        if(hamburg[1].src.search(hamb) !== -1){
            hamburg[1].src = close;
	    menu.style.display = "block";
	    header.style.zIndex = 120;
	    overlay[0].style.display = "block";
        }else{
            hamburg[1].src = hamb;
	    menu.style.display = "none";
	    header.style.zIndex = 1;
	    overlay[0].style.display = "none";
        }
    });

    //About buttons

    about.forEach((value) => {
	value.addEventListener('click',() => {
	    if(selModal.style.display === "block"){
		selModal.style.display = "none";
		overlay[1].style.display = "none";
	    }else{
		selModal.style.display = "block";
		overlay[1].style.display = "flex";
		overlay[1].style.justifyContent = "center";
		selModal.style.zIndex =100;

	    }
	});
    });

    //close icon on the selection-modal

    selModalClose.addEventListener('click',() => {
	selModal.style.display = "none";
	overlay[1].style.display = "none";
    });

   //radio button on the selection-modal and the border-color showing the sub-pledge option
    label.forEach((val,index) => {
        val.addEventListener('click',() => {
            if(radioButton[index].checked === true){
                pledge[index].style.border = "2px solid hsl(176, 50%, 47%)";
                subPledge[index-1].style.display = "block";
		
		continueBut();
		
            }else{
                pledge.forEach((val2,index2) => {
                    val2.style.border = "1px solid rgba(0,0,0,0.3)";
                    subPledge[index2].style.display = "none";
                });
            }
        });
    });

    //continue Button

    let continueBut = () => {
	continueButton.forEach((val) => {
	    val.addEventListener('click',() => {
		completed.style.display = "block";
		selModal.style.display = "none";
		overlay[2].style.display = "flex";
		overlay[2].style.justifyContent = "center";

		complete();
	    });
	});
    }
    
    //complete Button

    let complete = () => {
	completeButton.addEventListener('click',() => {
	    completed.style.display="none";
	    overlay.forEach((val) => {
		val.style.display = "none";
	    });
	});
    }

    checkFirst.addEventListener('click',() => {
	completed.style.display = "block";
	selModal.style.display = "none";
	overlay[2].style.display = "flex";
	overlay[2].style.justifyContent = "center";
	
	complete();
    });
    
});
