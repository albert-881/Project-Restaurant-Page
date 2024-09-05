//import foodImage from "./images/foodImage.jpg"

export function loadHomePage() {
    const divContainer = document.querySelector("#content");

    /* 
    const foodImg = document.createElement("img");
    foodImg.src = foodImage; 
    */

    const headLine = document.createElement("h1");
    headLine.textContent = "Albert's Food Shack";

    const importantInfo = document.createElement("div");
    importantInfo.classList.add("text");
    importantInfo.textContent = "Here in Albert's Food Shack the food is always high quality and fresh. With over 5,000 5 star reviews we aim to keep going in the direction of pristine dishes. Our food is of the highest quality ingredients and with ample portions to keep you full! Come stop by for a discount for newcomers!!";


    divContainer.append(headLine);
    //divContainer.append(foodImg);
    divContainer.append(importantInfo);
}

