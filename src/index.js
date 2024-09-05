import "./styles.css";
import { loadHomePage } from "./homePage.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact";

const container = document.querySelector('#content');


const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

document.addEventListener('DOMContentLoaded', function() {
    
    homeButton.classList.add("button-active");
    loadHomePage();  // Call the function to load the home page by default
});

homeButton.addEventListener('click', (e) => {

    container.innerHTML = "";
    menuButton.classList.remove("button-active");
    contactButton.classList.remove("button-active");
    homeButton.classList.add("button-active");
    loadHomePage();
});


menuButton.addEventListener('click', (e) => {
    
    container.innerHTML = "";
    homeButton.classList.remove("button-active");
    contactButton.classList.remove("button-active");
    menuButton.classList.add("button-active");
    loadMenu();
});


contactButton.addEventListener('click', (e) => {

    container.innerHTML = "";
    homeButton.classList.remove("button-active");
    menuButton.classList.remove("button-active");
    contactButton.classList.add("button-active");
    loadContact();
})