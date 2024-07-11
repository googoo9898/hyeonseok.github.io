let selecH1 = document.querySelector("h1");
let selecH2 = document.querySelector("h2");
let selecImage = document.querySelector("img");
let selecButton = document.querySelector("button");

selecH2.onclick = function () {
    alert("hey!");
}

selecImage.onclick = function () {
    let sImgSrc = selecImage.getAttribute("src");

    if (sImgSrc === "../images/one.png") {
        selecImage.setAttribute("src", "images/two.png");
    } else {
        selecImage.setAttribute("src", "images/one.png");
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    selecH1.textContent = "Hi, " + storedName;
}

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        selecH1.textContent = "Hi, " + myName;
    }
}

selecButton.onclick = function () {
    setUserName();
}

//sex