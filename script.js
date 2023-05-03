const increment = document.querySelector(".increment");
const number = document.getElementById("number");
    let compte = 0; 
    increment.addEventListener("click",()=> {
           compte++;
           number.textContent = compte;
    });

