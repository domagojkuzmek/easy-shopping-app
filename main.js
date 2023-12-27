import "./scss/style.scss";

document.addEventListener("DOMContentLoaded", () => {
    const inputBar = document.querySelector(".inputBar");
    const list = document.querySelector(".list");
    const submitBtn = document.querySelector(".submit");
    
    function addItemList(){
        const itemText = inputBar.value;
        if (itemText === ""){
            alert("Please add an item");
        }else {
            list.innerHTML +=  `<li class="list__item">${itemText}<i class="fa-solid fa-xmark delete" role="button"></i></li>`;
            inputBar.value = "";
        }
        // Remove item 
        
    }
    
    submitBtn.addEventListener("click", addItemList);
    
});
