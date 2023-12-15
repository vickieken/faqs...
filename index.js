const minusEl = document.querySelector("i");

const minusEls = document.querySelectorAll("i");

const plusEl = document.querySelector(".fa-plus");

const plusEls = document.querySelectorAll(".fa-plus");

console.log(plusEl);
const contentEl = document.querySelector(".content");

minusEls.forEach((minusEl) => {
    for (let index = 0; index < minusEls.length; index++) {
        minusEl[index].addEventListener("click", ()=> {
            contentEl.style.maxHeight = "0";
            plusEl.style.visibility = "visible";
            minusEl.style.visibility = "hidden";
        })
        
    }
});




