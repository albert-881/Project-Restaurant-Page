import krabbyPatty from "./images/hqdefault.jpg";
import noodles from "./images/po-serving-noodles.jpg";
import grub from "./images/images-2.jpeg";
import cake from "./images/minecraft.jpg";

export function loadMenu () {
    const divContainer = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "MENU";

    const headline1 = document.createElement("h2");
    headline1.textContent = "Krabby Patty";

    const image1 = document.createElement("img");
    image1.src = krabbyPatty;

    divContainer.append(title);
    divContainer.append(headline1);
    divContainer.append(image1);

    const headline2 = document.createElement("h2");
    headline2.textContent = "Po Noodles"

    const image2 = document.createElement("img");
    image2.src = noodles;

    divContainer.append(headline2);
    divContainer.append(image2);

    const headline3 = document.createElement("h2");
    headline3.textContent = "Grubs and Bugs";

    const image3 = document.createElement("img");
    image3.src = grub;

    divContainer.append(headline3);
    divContainer.append(image3);

    const headline4 = document.createElement("h2");
    headline4.textContent = "Minecraft Cake";

    const image4 = document.createElement("img");
    image4.src = cake;

    divContainer.append(headline4);
    divContainer.append(image4);
}