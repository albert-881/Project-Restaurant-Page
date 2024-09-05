
export function loadContact () {
    const divContainer = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "CONTACT";

    const phoneNum = document.createElement("div");
    phoneNum.textContent = "(###) ### - ###"

    const email = document.createElement("div");
    email.textContent = "legitEmail@noCap.com";

    divContainer.append(title);
    divContainer.append(phoneNum);
    divContainer.append(email);
}